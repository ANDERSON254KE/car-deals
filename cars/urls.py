from django.urls import path
from . import views

app_name = 'cars'

urlpatterns = [
    path('', views.CarListView.as_view(), name='list'),
    path('<int:pk>/', views.CarDetailView.as_view(), name='detail'),
    path('search/', views.CarSearchView.as_view(), name='search'),
    path('api/', views.car_api, name='car_api'),
]