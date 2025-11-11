from django.shortcuts import render
from django.http import JsonResponse
from django.db.models import Count, Q
from django.utils import timezone
from datetime import datetime, timedelta
from .models import CarView, DashboardStats, PopularCar
from cars.models import Car
from leads.models import Lead, TestDriveBooking
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .forms import CarForm


def dashboard(request):
    """Analytics dashboard view with live-calculated stats"""
    # Always calculate live stats to avoid stale counts
    today_stats = DashboardStats._calculate_stats_for_date(timezone.now().date())
    
    # Get most popular cars
    popular_cars = PopularCar.objects.select_related('car').order_by('-engagement_score')[:10]
    
    # Recent activity
    recent_leads = Lead.objects.select_related('related_car').order_by('-created_at')[:5]
    recent_bookings = TestDriveBooking.objects.select_related('car').order_by('-created_at')[:5]
    recent_views = CarView.objects.select_related('car').order_by('-viewed_at')[:10]
    
    context = {
        'stats': today_stats,
        'popular_cars': popular_cars,
        'recent_leads': recent_leads,
        'recent_bookings': recent_bookings,
        'recent_views': recent_views,
    }
    
    return render(request, 'analytics/dashboard.html', context)


def live_stats_api(request):
    """API endpoint that returns live stats for real-time dashboard updates"""
    data = DashboardStats._calculate_stats_for_date(timezone.now().date())
    return JsonResponse({'data': data})


def chart_data_api(request):
    """API endpoint for chart data"""
    chart_type = request.GET.get('type', 'daily_views')
    start_date = request.GET.get('start_date')
    end_date = request.GET.get('end_date')

    # Parse dates if provided
    if start_date:
        try:
            start_date = datetime.strptime(start_date, '%Y-%m-%d').date()
        except ValueError:
            start_date = None
    if end_date:
        try:
            end_date = datetime.strptime(end_date, '%Y-%m-%d').date()
        except ValueError:
            end_date = None

    if chart_type == 'daily_views':
        # Default to last 30 days if no dates provided
        if not start_date:
            start_date = (timezone.now() - timedelta(days=30)).date()
        if not end_date:
            end_date = timezone.now().date()

        data = []
        current_date = start_date
        while current_date <= end_date:
            views_count = CarView.objects.filter(viewed_at__date=current_date).count()
            data.append({
                'date': current_date.isoformat(),
                'views': views_count
            })
            current_date += timedelta(days=1)

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

class CarListView(ListView):
    model = Car
    template_name = 'analytics/car_list.html'
    context_object_name = 'cars'

class CarCreateView(CreateView):
    model = Car
    form_class = CarForm
    template_name = 'analytics/car_form.html'
    success_url = reverse_lazy('analytics:car_list')

class CarUpdateView(UpdateView):
    model = Car
    form_class = CarForm
    template_name = 'analytics/car_form.html'
    success_url = reverse_lazy('analytics:car_list')

class CarDeleteView(DeleteView):
    model = Car
    template_name = 'analytics/car_confirm_delete.html'
    success_url = reverse_lazy('analytics:car_list')