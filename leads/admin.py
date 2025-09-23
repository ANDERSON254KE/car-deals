from django.contrib import admin
from django.utils.html import format_html
from django.urls import reverse
from .models import Lead, TestDriveBooking


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'inquiry_type', 'related_car_link', 'is_contacted', 'created_at')
    list_filter = ('inquiry_type', 'is_contacted', 'created_at', 'related_car__make')
    search_fields = ('name', 'email', 'phone', 'message')
    list_editable = ('is_contacted',)
    readonly_fields = ('created_at',)
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'email', 'phone')
        }),
        ('Inquiry Details', {
            'fields': ('inquiry_type', 'related_car', 'message')
        }),
        ('Status', {
            'fields': ('is_contacted', 'created_at')
        }),
    )
    
    def related_car_link(self, obj):
        if obj.related_car:
            url = reverse('admin:cars_car_change', args=[obj.related_car.id])
            return format_html('<a href="{}">{}</a>', url, obj.related_car)
        return "No specific car"
    related_car_link.short_description = "Related Car"
    related_car_link.admin_order_field = 'related_car'
    
    actions = ['mark_as_contacted', 'mark_as_not_contacted']
    
    def mark_as_contacted(self, request, queryset):
        updated = queryset.update(is_contacted=True)
        self.message_user(request, f'{updated} leads marked as contacted.')
    mark_as_contacted.short_description = "Mark selected leads as contacted"
    
    def mark_as_not_contacted(self, request, queryset):
        updated = queryset.update(is_contacted=False)
        self.message_user(request, f'{updated} leads marked as not contacted.')
    mark_as_not_contacted.short_description = "Mark selected leads as not contacted"


@admin.register(TestDriveBooking)
class TestDriveBookingAdmin(admin.ModelAdmin):
    list_display = ('customer_name', 'car_link', 'preferred_date', 'preferred_time', 'status', 'created_at')
    list_filter = ('status', 'preferred_date', 'created_at', 'car__make')
    search_fields = ('customer_name', 'customer_email', 'customer_phone', 'car__make', 'car__model')
    list_editable = ('status',)
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Customer Information', {
            'fields': ('customer_name', 'customer_email', 'customer_phone')
        }),
        ('Booking Details', {
            'fields': ('car', 'preferred_date', 'preferred_time', 'message')
        }),
        ('Confirmation', {
            'fields': ('status', 'confirmed_date', 'confirmed_time')
        }),
        ('Management', {
            'fields': ('notes', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def car_link(self, obj):
        url = reverse('admin:cars_car_change', args=[obj.car.id])
        return format_html('<a href="{}">{}</a>', url, obj.car)
    car_link.short_description = "Car"
    car_link.admin_order_field = 'car'
    
    actions = ['confirm_bookings', 'cancel_bookings']
    
    def confirm_bookings(self, request, queryset):
        updated = queryset.update(status='confirmed')
        for booking in queryset:
            booking.send_confirmation_email()
        self.message_user(request, f'{updated} bookings confirmed and emails sent.')
    confirm_bookings.short_description = "Confirm selected bookings"
    
    def cancel_bookings(self, request, queryset):
        updated = queryset.update(status='cancelled')
        self.message_user(request, f'{updated} bookings cancelled.')
    cancel_bookings.short_description = "Cancel selected bookings"
    
    def save_model(self, request, obj, form, change):
        if change and 'status' in form.changed_data and obj.status == 'confirmed':
            # If status changed to confirmed, copy preferred date/time to confirmed fields if not set
            if not obj.confirmed_date:
                obj.confirmed_date = obj.preferred_date
            if not obj.confirmed_time:
                obj.confirmed_time = obj.preferred_time
            obj.send_confirmation_email()
        super().save_model(request, obj, form, change)