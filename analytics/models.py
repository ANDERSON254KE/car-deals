from django.db import models
from django.utils import timezone
from cars.models import Car
from leads.models import Lead, TestDriveBooking


class CarView(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='views')
    ip_address = models.GenericIPAddressField()
    user_agent = models.TextField(blank=True)
    referrer = models.URLField(blank=True)
    viewed_at = models.DateTimeField(auto_now_add=True)
    
    # Session tracking
    session_key = models.CharField(max_length=40, blank=True)
    
    class Meta:
        ordering = ['-viewed_at']
        indexes = [
            models.Index(fields=['car', 'viewed_at']),
            models.Index(fields=['ip_address', 'viewed_at']),
            models.Index(fields=['session_key']),
        ]

    def __str__(self):
        return f"{self.car} viewed from {self.ip_address}"


class DashboardStats(models.Model):
    """Model to cache dashboard statistics"""
    date = models.DateField(unique=True)
    
    # Car stats
    total_cars = models.PositiveIntegerField(default=0)
    available_cars = models.PositiveIntegerField(default=0)
    sold_cars = models.PositiveIntegerField(default=0)
    featured_cars = models.PositiveIntegerField(default=0)
    
    # Lead stats
    total_leads = models.PositiveIntegerField(default=0)
    contacted_leads = models.PositiveIntegerField(default=0)
    pending_leads = models.PositiveIntegerField(default=0)
    
    # Booking stats
    total_bookings = models.PositiveIntegerField(default=0)
    confirmed_bookings = models.PositiveIntegerField(default=0)
    pending_bookings = models.PositiveIntegerField(default=0)
    
    # View stats
    total_views = models.PositiveIntegerField(default=0)
    unique_views = models.PositiveIntegerField(default=0)
    
    # Calculated stats
    conversion_rate = models.DecimalField(max_digits=5, decimal_places=2, default=0)  # leads/views
    inquiry_rate = models.DecimalField(max_digits=5, decimal_places=2, default=0)  # inquiries/cars
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return f"Dashboard stats for {self.date}"

    @classmethod
    def get_or_calculate_today(cls):
        """Get today's stats or calculate them if they don't exist"""
        today = timezone.now().date()
        stats, created = cls.objects.get_or_create(
            date=today,
            defaults=cls._calculate_stats_for_date(today)
        )
        
        # If stats exist but are old, recalculate
        if not created and stats.updated_at.date() < today:
            for key, value in cls._calculate_stats_for_date(today).items():
                setattr(stats, key, value)
            stats.save()
        
        return stats

    @classmethod
    def _calculate_stats_for_date(cls, date):
        """Calculate statistics for a given date"""
        from django.db.models import Count, Q
        
        # Car stats
        car_stats = {
            'total_cars': Car.objects.count(),
            'available_cars': Car.objects.filter(status='available').count(),
            'sold_cars': Car.objects.filter(status='sold').count(),
            'featured_cars': Car.objects.filter(is_featured=True).count(),
        }
        
        # Lead stats (all time)
        lead_stats = {
            'total_leads': Lead.objects.count(),
            'contacted_leads': Lead.objects.filter(is_contacted=True).count(),
            'pending_leads': Lead.objects.filter(is_contacted=False).count(),
        }
        
        # Booking stats (all time)
        booking_stats = {
            'total_bookings': TestDriveBooking.objects.count(),
            'confirmed_bookings': TestDriveBooking.objects.filter(status='confirmed').count(),
            'pending_bookings': TestDriveBooking.objects.filter(status='pending').count(),
        }
        
        # View stats (all time)
        view_stats = {
            'total_views': CarView.objects.count(),
            'unique_views': CarView.objects.values('ip_address').distinct().count(),
        }
        
        # Calculated stats
        total_views = view_stats['total_views']
        total_leads = lead_stats['total_leads']
        total_cars = car_stats['total_cars']
        
        conversion_rate = (total_leads / max(total_views, 1)) * 100
        inquiry_rate = (total_leads / max(total_cars, 1)) * 100
        
        calculated_stats = {
            'conversion_rate': round(conversion_rate, 2),
            'inquiry_rate': round(inquiry_rate, 2),
        }
        
        # Combine all stats
        return {**car_stats, **lead_stats, **booking_stats, **view_stats, **calculated_stats}


class PopularCar(models.Model):
    """Track most popular cars based on views"""
    car = models.OneToOneField(Car, on_delete=models.CASCADE, related_name='popularity')
    total_views = models.PositiveIntegerField(default=0)
    unique_views = models.PositiveIntegerField(default=0)
    total_inquiries = models.PositiveIntegerField(default=0)
    total_bookings = models.PositiveIntegerField(default=0)
    
    # Time-based views
    views_today = models.PositiveIntegerField(default=0)
    views_this_week = models.PositiveIntegerField(default=0)
    views_this_month = models.PositiveIntegerField(default=0)
    
    # Engagement score (weighted combination of views, inquiries, bookings)
    engagement_score = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-engagement_score', '-total_views']

    def __str__(self):
        return f"{self.car} - {self.total_views} views"

    def calculate_engagement_score(self):
        """Calculate engagement score based on views, inquiries, and bookings"""
        # Weighted formula: views * 1 + inquiries * 10 + bookings * 20
        score = (self.total_views * 1) + (self.total_inquiries * 10) + (self.total_bookings * 20)
        self.engagement_score = score
        return score

    @classmethod
    def update_car_popularity(cls, car):
        """Update popularity stats for a specific car"""
        from django.db.models import Count
        from datetime import datetime, timedelta
        
        popular_car, created = cls.objects.get_or_create(car=car)
        
        # Calculate total views
        popular_car.total_views = CarView.objects.filter(car=car).count()
        popular_car.unique_views = CarView.objects.filter(car=car).values('ip_address').distinct().count()
        
        # Calculate inquiries and bookings
        popular_car.total_inquiries = Lead.objects.filter(related_car=car).count()
        popular_car.total_bookings = TestDriveBooking.objects.filter(car=car).count()
        
        # Calculate time-based views
        today = timezone.now().date()
        week_ago = today - timedelta(days=7)
        month_ago = today - timedelta(days=30)
        
        popular_car.views_today = CarView.objects.filter(
            car=car, 
            viewed_at__date=today
        ).count()
        
        popular_car.views_this_week = CarView.objects.filter(
            car=car, 
            viewed_at__date__gte=week_ago
        ).count()
        
        popular_car.views_this_month = CarView.objects.filter(
            car=car, 
            viewed_at__date__gte=month_ago
        ).count()
        
        # Calculate engagement score
        popular_car.calculate_engagement_score()
        popular_car.save()
        
        return popular_car