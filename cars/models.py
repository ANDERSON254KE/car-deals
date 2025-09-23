from django.db import models
from django.urls import reverse
from django.core.validators import MinValueValidator, MaxValueValidator
import uuid
import os


def car_image_upload_path(instance, filename):
    """Generate upload path for car images"""
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4().hex}.{ext}'
    return os.path.join('cars', str(instance.car.id), filename)


class Car(models.Model):
    FUEL_CHOICES = [
        ('petrol', 'Petrol'),
        ('diesel', 'Diesel'),
        ('hybrid', 'Hybrid'),
        ('electric', 'Electric'),
        ('cng', 'CNG'),
    ]
    
    TRANSMISSION_CHOICES = [
        ('manual', 'Manual'),
        ('automatic', 'Automatic'),
        ('cvt', 'CVT'),
    ]
    
    BODY_TYPE_CHOICES = [
        ('sedan', 'Sedan'),
        ('hatchback', 'Hatchback'),
        ('suv', 'SUV'),
        ('coupe', 'Coupe'),
        ('convertible', 'Convertible'),
        ('wagon', 'Wagon'),
        ('pickup', 'Pickup Truck'),
    ]

    # Basic Information
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.PositiveIntegerField(
        validators=[MinValueValidator(1900), MaxValueValidator(2030)]
    )
    mileage = models.PositiveIntegerField(help_text="Mileage in kilometers")
    price = models.DecimalField(max_digits=12, decimal_places=2)
    
    # Technical Details
    fuel_type = models.CharField(max_length=20, choices=FUEL_CHOICES, default='petrol')
    transmission = models.CharField(max_length=20, choices=TRANSMISSION_CHOICES, default='manual')
    body_type = models.CharField(max_length=20, choices=BODY_TYPE_CHOICES, default='sedan')
    engine_size = models.DecimalField(max_digits=3, decimal_places=1, null=True, blank=True, help_text="Engine size in liters")
    doors = models.PositiveSmallIntegerField(default=4)
    seats = models.PositiveSmallIntegerField(default=5)
    
    # Description and Features
    description = models.TextField()
    features = models.TextField(blank=True, help_text="List key features, separated by commas")
    condition = models.CharField(max_length=50, default='Used')
    color = models.CharField(max_length=50, blank=True)
    
    # Status
    is_available = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    is_sold = models.BooleanField(default=False)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Car'
        verbose_name_plural = 'Cars'

    def __str__(self):
        return f"{self.year} {self.make} {self.model}"
    
    def get_absolute_url(self):
        return reverse('cars:detail', kwargs={'pk': self.pk})
    
    @property
    def primary_image(self):
        """Get the first image for this car"""
        return self.images.first()
    
    @property
    def formatted_price(self):
        """Return formatted price"""
        return f"${self.price:,.0f}"
    
    @property
    def features_list(self):
        """Return features as a list"""
        if self.features:
            return [feature.strip() for feature in self.features.split(',')]
        return []


class CarImage(models.Model):
    car = models.ForeignKey(Car, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=car_image_upload_path)
    alt_text = models.CharField(max_length=255, blank=True)
    is_primary = models.BooleanField(default=False)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-is_primary', 'uploaded_at']

    def __str__(self):
        return f"Image for {self.car}"

    def save(self, *args, **kwargs):
        if self.is_primary:
            # Make sure only one image is primary per car
            CarImage.objects.filter(car=self.car, is_primary=True).update(is_primary=False)
        super().save(*args, **kwargs)