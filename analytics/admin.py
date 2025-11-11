from django.contrib import admin
from django.utils.html import format_html
from django.urls import reverse
from .models import CarView, DashboardStats, PopularCar


@admin.register(CarView)
class CarViewAdmin(admin.ModelAdmin):
    list_display = ('car_link', 'ip_address', 'viewed_at', 'referrer_short')
    list_filter = ('viewed_at', 'car__make', 'car__model')
    search_fields = ('car__make', 'car__model', 'ip_address')
    readonly_fields = ('viewed_at',)
    date_hierarchy = 'viewed_at'
    
    def car_link(self, obj):
        url = reverse('admin:cars_car_change', args=[obj.car.id])
        return format_html('<a href="{}">{}</a>', url, obj.car)
    car_link.short_description = "Car"
    car_link.admin_order_field = 'car'
    
    def referrer_short(self, obj):
        if obj.referrer:
            return obj.referrer[:50] + '...' if len(obj.referrer) > 50 else obj.referrer
        return 'Direct'
    referrer_short.short_description = "Referrer"

    def has_add_permission(self, request):
        return False  # Views are automatically created
    
    def has_change_permission(self, request, obj=None):
        return False  # Views should not be editable


@admin.register(DashboardStats)
class DashboardStatsAdmin(admin.ModelAdmin):
    list_display = ('date', 'total_cars', 'total_leads', 'total_bookings', 'total_views', 'conversion_rate')
    list_filter = ('date', 'created_at')
    readonly_fields = ('created_at', 'updated_at')
    date_hierarchy = 'date'
    
    fieldsets = (
        ('Date', {
            'fields': ('date',)
        }),
        ('Car Statistics', {
            'fields': ('total_cars', 'available_cars', 'sold_cars', 'featured_cars')
        }),
        ('Lead Statistics', {
            'fields': ('total_leads', 'contacted_leads', 'pending_leads')
        }),
        ('Booking Statistics', {
            'fields': ('total_bookings', 'confirmed_bookings', 'pending_bookings')
        }),
        ('View Statistics', {
            'fields': ('total_views', 'unique_views')
        }),
        ('Calculated Statistics', {
            'fields': ('conversion_rate', 'inquiry_rate')
        }),
        ('Metadata', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    def has_add_permission(self, request):
        return True  # Allow manual creation of stats
    
    def has_delete_permission(self, request, obj=None):
        return True  # Allow deletion of old stats


@admin.register(PopularCar)
class PopularCarAdmin(admin.ModelAdmin):
    list_display = ('car_link', 'total_views', 'unique_views', 'total_inquiries', 'total_bookings', 'engagement_score', 'last_updated')
    list_filter = ('last_updated', 'car__make', 'car__status')
    search_fields = ('car__make', 'car__model')
    readonly_fields = ('last_updated', 'engagement_score')
    ordering = ['-engagement_score', '-total_views']
    
    fieldsets = (
        ('Car', {
            'fields': ('car',)
        }),
        ('View Statistics', {
            'fields': ('total_views', 'unique_views', 'views_today', 'views_this_week', 'views_this_month')
        }),
        ('Engagement Statistics', {
            'fields': ('total_inquiries', 'total_bookings', 'engagement_score')
        }),
        ('Metadata', {
            'fields': ('last_updated',)
        }),
    )
    
    def car_link(self, obj):
        url = reverse('admin:cars_car_change', args=[obj.car.id])
        return format_html('<a href="{}">{}</a>', url, obj.car)
    car_link.short_description = "Car"
    car_link.admin_order_field = 'car'

    actions = ['update_popularity_stats']

    def update_popularity_stats(self, request, queryset):
        updated = 0
        for popular_car in queryset:
            PopularCar.update_car_popularity(popular_car.car)
            updated += 1
        self.message_user(request, f'{updated} popularity statistics updated.')
    update_popularity_stats.short_description = "Update popularity statistics"

    def has_add_permission(self, request):
        return False  # Popularity stats are automatically created

    def save_model(self, request, obj, form, change):
        if change:
            obj.calculate_engagement_score()
        super().save_model(request, obj, form, change)