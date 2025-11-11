#!/usr/bin/env python
"""
Script to create sample cars for the dealership
"""
import os
import django
import random

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CarDealerPlatform.settings')
django.setup()

from cars.models import Car

def create_sample_cars():
    """Create sample cars for testing"""
    # Clear existing cars
    Car.objects.all().delete()

    makes = ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes', 'Audi', 'Nissan', 'Chevrolet']
    models = ['Camry', 'Civic', 'F-150', '3 Series', 'C-Class', 'A4', 'Altima', 'Silverado']
    colors = ['White', 'Black', 'Silver', 'Blue', 'Red', 'Gray']

    cars_created = []

    for i in range(12):
        year = random.randint(2018, 2023)
        make = random.choice(makes)
        model = random.choice(models)
        price = random.randint(15000, 50000)
        mileage = random.randint(10000, 80000)
        color = random.choice(colors)

        car = Car.objects.create(
            make=make,
            model=model,
            year=year,
            price=price,
            mileage=mileage,
            color=color,
            fuel_type='petrol',
            transmission='automatic',
            body_type='sedan',
            description=f'A beautiful {year} {make} {model} in {color}. Well maintained with {mileage:,} miles.',
            is_featured=(i < 3),  # First 3 cars are featured
            status='available'
        )
        cars_created.append(car)
        print(f'Created: {car}')

    print(f'\nTotal cars created: {Car.objects.count()}')
    print(f'Featured cars: {Car.objects.filter(is_featured=True).count()}')
    print(f'Recent cars: {Car.objects.order_by("-created_at")[:5].count()}')

if __name__ == "__main__":
    create_sample_cars()