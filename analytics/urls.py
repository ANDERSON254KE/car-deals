from django.urls import path
from . import views

app_name = 'analytics'

urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
    path('api/chart-data/', views.chart_data_api, name='chart_data_api'),
]