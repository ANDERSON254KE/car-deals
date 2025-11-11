"""CarDealerPlatform URL Configuration"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('django-admin/', admin.site.urls),
    path('admin/', include('analytics.urls')),
    path('', include('core.urls')),
    path('cars/', include('cars.urls')),
    path('leads/', include('leads.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Admin site customization
admin.site.site_header = 'Car Dealership Admin'
admin.site.site_title = 'Car Dealership'
admin.site.index_title = 'Welcome to Car Dealership Administration'