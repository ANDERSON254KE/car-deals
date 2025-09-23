from django.urls import path
from . import views

app_name = 'leads'

urlpatterns = [
    path('inquiry/', views.create_lead, name='create_lead'),
    path('inquiry/<int:car_id>/', views.create_lead, name='create_lead_for_car'),
    path('test-drive/<int:car_id>/', views.book_test_drive, name='book_test_drive'),
    path('contact/', views.contact_view, name='contact'),
    path('thank-you/', views.thank_you, name='thank_you'),
]