from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.admin.views.decorators import staff_member_required
from django.db.models import Count, Q
from django.utils import timezone
from datetime import datetime, timedelta
from .models import CarView, DashboardStats, PopularCar
from cars.models import Car
from leads.models import Lead, TestDriveBooking


@staff_member_required
def dashboard(request):
    """Analytics dashboard view"""
    # Get today's stats
    today_stats = DashboardStats.get_or_calculate_today()
    
    # Get most popular cars
    popular_cars = PopularCar.objects.select_related('car').order_by('-engagement_score')[:10]
    
    # Recent activity
    recent_leads = Lead.objects.select_related('related_car').order_by('-created_at')[:5]
    recent_bookings = TestDriveBooking.objects.select_related('car').order_by('-created_at')[:5]
    recent_views = CarView.objects.select_related('car').order_by('-viewed_at')[:10]
    
    # Weekly view trends (last 7 days)
    week_ago = timezone.now() - timedelta(days=7)
    daily_views = []
    for i in range(7):
        date = (timezone.now() - timedelta(days=i)).date()
        views_count = CarView.objects.filter(viewed_at__date=date).count()
        daily_views.append({
            'date': date.strftime('%m/%d'),
            'views': views_count
        })
    daily_views.reverse()  # Show oldest first
    
    context = {
        'stats': today_stats,
        'popular_cars': popular_cars,
        'recent_leads': recent_leads,
        'recent_bookings': recent_bookings,
        'recent_views': recent_views,
        'daily_views': daily_views,
    }
    
    return render(request, 'analytics/dashboard.html', context)


@staff_member_required
def chart_data_api(request):
    """API endpoint for chart data"""
    chart_type = request.GET.get('type', 'daily_views')
    
    if chart_type == 'daily_views':
        # Last 30 days view data
        thirty_days_ago = timezone.now() - timedelta(days=30)
        data = []
        
        for i in range(30):
            date = (timezone.now() - timedelta(days=i)).date()
            views_count = CarView.objects.filter(viewed_at__date=date).count()
            data.append({
                'date': date.isoformat(),
                'views': views_count
            })
        
        data.reverse()  # Show oldest first
        return JsonResponse({'data': data})
    
    elif chart_type == 'popular_cars':
        # Top 10 most viewed cars
        popular_cars = PopularCar.objects.select_related('car').order_by('-total_views')[:10]
        data = [
            {
                'car': str(car.car),
                'views': car.total_views,
                'inquiries': car.total_inquiries,
                'bookings': car.total_bookings
            }
            for car in popular_cars
        ]
        return JsonResponse({'data': data})
    
    elif chart_type == 'leads_by_type':
        # Leads grouped by inquiry type
        lead_types = Lead.objects.values('inquiry_type').annotate(count=Count('id'))
        data = [
            {
                'type': item['inquiry_type'].replace('_', ' ').title(),
                'count': item['count']
            }
            for item in lead_types
        ]
        return JsonResponse({'data': data})
    
    elif chart_type == 'monthly_trends':
        # Monthly trends for the last 12 months
        twelve_months_ago = timezone.now() - timedelta(days=365)
        data = []
        
        for i in range(12):
            month_start = (timezone.now().replace(day=1) - timedelta(days=i*30)).replace(day=1)
            month_end = (month_start + timedelta(days=31)).replace(day=1) - timedelta(days=1)
            
            views = CarView.objects.filter(
                viewed_at__date__gte=month_start.date(),
                viewed_at__date__lte=month_end.date()
            ).count()
            
            leads = Lead.objects.filter(
                created_at__date__gte=month_start.date(),
                created_at__date__lte=month_end.date()
            ).count()
            
            bookings = TestDriveBooking.objects.filter(
                created_at__date__gte=month_start.date(),
                created_at__date__lte=month_end.date()
            ).count()
            
            data.append({
                'month': month_start.strftime('%b %Y'),
                'views': views,
                'leads': leads,
                'bookings': bookings
            })
        
        data.reverse()  # Show oldest first
        return JsonResponse({'data': data})
    
    return JsonResponse({'error': 'Invalid chart type'})