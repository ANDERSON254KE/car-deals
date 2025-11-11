from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView
from django.db.models import Q
from django.http import JsonResponse
from .models import Car


class CarListView(ListView):
    model = Car
    template_name = 'cars/list.html'
    context_object_name = 'cars'
    paginate_by = 12
    
    def get_queryset(self):
        queryset = Car.objects.filter(status='available').select_related().prefetch_related('images')
        
        # Filter by make
        make = self.request.GET.get('make')
        if make:
            queryset = queryset.filter(make__icontains=make)
        
        # Filter by price range
        min_price = self.request.GET.get('min_price')
        max_price = self.request.GET.get('max_price')
        if min_price:
            queryset = queryset.filter(price__gte=min_price)
        if max_price:
            queryset = queryset.filter(price__lte=max_price)
        
        # Filter by year range
        min_year = self.request.GET.get('min_year')
        max_year = self.request.GET.get('max_year')
        if min_year:
            queryset = queryset.filter(year__gte=min_year)
        if max_year:
            queryset = queryset.filter(year__lte=max_year)
        
        # Filter by fuel type
        fuel_type = self.request.GET.get('fuel_type')
        if fuel_type:
            queryset = queryset.filter(fuel_type=fuel_type)
        
        # Filter by transmission
        transmission = self.request.GET.get('transmission')
        if transmission:
            queryset = queryset.filter(transmission=transmission)
            
        # Sort by
        sort_by = self.request.GET.get('sort_by', '-created_at')
        if sort_by:
            queryset = queryset.order_by(sort_by)
        
        return queryset
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['makes'] = Car.objects.values_list('make', flat=True).distinct().order_by('make')
        context['fuel_types'] = Car.FUEL_CHOICES
        context['transmissions'] = Car.TRANSMISSION_CHOICES
        context['current_filters'] = self.request.GET
        return context


class CarDetailView(DetailView):
    model = Car
    template_name = 'cars/detail.html'
    context_object_name = 'car'
    
    def get_queryset(self):
        return Car.objects.prefetch_related('images')
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['related_cars'] = Car.objects.filter(
            make=self.object.make,
            status='available'
        ).exclude(id=self.object.id)[:4]
        return context


class CarSearchView(ListView):
    model = Car
    template_name = 'cars/search_results.html'
    context_object_name = 'cars'
    paginate_by = 12
    
    def get_queryset(self):
        query = self.request.GET.get('q')
        if query:
            return Car.objects.filter(
                Q(make__icontains=query) |
                Q(model__icontains=query) |
                Q(description__icontains=query) |
                Q(features__icontains=query),
                status='available'
            ).select_related().prefetch_related('images')
        return Car.objects.none()
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['query'] = self.request.GET.get('q', '')
        return context


from django.views.decorators.cache import cache_page


@cache_page(60 * 15)
def car_api(request):
    cars = Car.objects.filter(status='available').select_related().prefetch_related('images')
    data = []
    for car in cars:
        data.append({
            'id': car.id,
            'make': car.make,
            'model': car.model,
            'year': car.year,
            'price': car.price,
            'mileage': car.mileage,
            'image': car.primary_image.image.url if car.primary_image else f'https://picsum.photos/400/300?random={car.id}&car',
            'features': car.features_list,
        })
    return JsonResponse(data, safe=False)