from django.db import models
from cars.models import Car


class SocialAccount(models.Model):
    PLATFORM_CHOICES = [
        ('facebook', 'Facebook'),
        ('instagram', 'Instagram'),
        ('twitter', 'Twitter'),
    ]

    platform = models.CharField(max_length=20, choices=PLATFORM_CHOICES, unique=True)
    api_token = models.TextField(help_text="API access token for this platform")
    page_id = models.CharField(max_length=100, blank=True, help_text="Page/Account ID for posting")
    is_active = models.BooleanField(default=True)
    connected_at = models.DateTimeField(auto_now_add=True)
    last_used = models.DateTimeField(null=True, blank=True)
    
    # Configuration
    auto_post_new_cars = models.BooleanField(default=True, help_text="Automatically post new cars")
    post_template = models.TextField(
        blank=True,
        help_text="Template for posts. Use {car}, {price}, {year}, {make}, {model} placeholders"
    )

    class Meta:
        verbose_name = 'Social Media Account'
        verbose_name_plural = 'Social Media Accounts'

    def __str__(self):
        return f"{self.get_platform_display()} Account"

    def get_default_template(self):
        """Get default post template for the platform"""
        templates = {
            'facebook': "🚗 New Arrival! {year} {make} {model}\n💰 Price: {price}\n\n{description}\n\n#cars #carsales #dealership",
            'instagram': "🚗 {year} {make} {model}\n💰 {price}\n\n{description}\n\n#cars #carsales #dealership #automotive",
            'twitter': "🚗 New: {year} {make} {model} - {price}\n\n{description}\n\n#cars #deals"
        }
        return templates.get(self.platform, "{year} {make} {model} - {price}")


class SocialPost(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('posted', 'Posted'),
        ('failed', 'Failed'),
        ('cancelled', 'Cancelled'),
    ]

    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='social_posts')
    account = models.ForeignKey(SocialAccount, on_delete=models.CASCADE)
    platform = models.CharField(max_length=20)  # Denormalized for easier queries
    
    # Post Content
    content = models.TextField()
    post_id = models.CharField(max_length=200, blank=True, help_text="ID from social platform")
    post_url = models.URLField(blank=True, help_text="Direct link to the post")
    
    # Status and Metadata
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    error_message = models.TextField(blank=True)
    attempts = models.PositiveSmallIntegerField(default=0)
    max_attempts = models.PositiveSmallIntegerField(default=3)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    posted_at = models.DateTimeField(null=True, blank=True)
    scheduled_for = models.DateTimeField(null=True, blank=True, help_text="Schedule post for later")

    class Meta:
        ordering = ['-created_at']
        unique_together = ['car', 'account']  # One post per car per account

    def __str__(self):
        return f"{self.car} - {self.platform} ({self.get_status_display()})"

    def generate_content(self):
        """Generate post content using template"""
        template = self.account.post_template or self.account.get_default_template()
        
        # Prepare context for template
        context = {
            'car': str(self.car),
            'year': self.car.year,
            'make': self.car.make,
            'model': self.car.model,
            'price': self.car.formatted_price,
            'description': self.car.description[:200] + '...' if len(self.car.description) > 200 else self.car.description,
        }
        
        # Format the template
        try:
            self.content = template.format(**context)
        except KeyError as e:
            self.content = f"New car available: {self.car} - {self.car.formatted_price}"
        
        return self.content