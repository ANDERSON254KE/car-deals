from django.contrib import admin
from django.utils.html import format_html
from .models import Car, CarImage


class CarImageInline(admin.TabularInline):
    model = CarImage
    extra = 1
    fields = ('image', 'alt_text', 'is_primary', 'image_preview')
    readonly_fields = ('image_preview',)

    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="100" height="60" style="object-fit: cover;" />',
                obj.image.url
            )
        return "No image"
    image_preview.short_description = "Preview"


@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'year', 'fuel_type', 'transmission', 'formatted_price', 'status', 'is_featured', 'created_at')
    list_filter = ('make', 'fuel_type', 'transmission', 'body_type', 'status', 'is_featured', 'year')
    search_fields = ('make', 'model', 'year', 'description')
    list_editable = ('status', 'is_featured')
    readonly_fields = ('created_at', 'updated_at', 'primary_image_preview')
    inlines = [CarImageInline]

    fieldsets = (
        ('Basic Information', {
            'fields': ('make', 'model', 'year', 'price', 'color', 'condition')
        }),
        ('Technical Details', {
            'fields': ('fuel_type', 'transmission', 'body_type', 'engine_size', 'mileage', 'doors', 'seats')
        }),
        ('Description & Features', {
            'fields': ('description', 'features')
        }),
        ('Status', {
            'fields': ('status', 'is_featured')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
        ('Primary Image', {
            'fields': ('primary_image_preview',),
            'classes': ('collapse',)
        }),
    )

    def primary_image_preview(self, obj):
        if obj.primary_image:
            return format_html(
                '<img src="{}" width="200" height="150" style="object-fit: cover;" />',
                obj.primary_image.image.url
            )
        return "No primary image"
    primary_image_preview.short_description = "Primary Image Preview"

    def save_related(self, request, form, formsets, change):
        super().save_related(request, form, formsets, change)
        # Trigger social media posting when a new car is added
        if not change:  # New car
            from social.tasks import auto_post_car
            auto_post_car.delay(form.instance.id)


@admin.register(CarImage)
class CarImageAdmin(admin.ModelAdmin):
    list_display = ('car', 'alt_text', 'is_primary', 'uploaded_at', 'image_preview')
    list_filter = ('is_primary', 'uploaded_at')
    search_fields = ('car__make', 'car__model', 'alt_text')

    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="100" height="60" style="object-fit: cover;" />',
                obj.image.url
            )
        return "No image"
    image_preview.short_description = "Preview"