from django.db import models
from django.core.mail import send_mail
from django.conf import settings
from cars.models import Car


class Lead(models.Model):
    INQUIRY_TYPES = [
        ('general', 'General Inquiry'),
        ('car_specific', 'Car Specific Inquiry'),
        ('financing', 'Financing Question'),
        ('trade_in', 'Trade-in Inquiry'),
    ]

    # Contact Information
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    
    # Inquiry Details
    inquiry_type = models.CharField(max_length=20, choices=INQUIRY_TYPES, default='general')
    message = models.TextField()
    related_car = models.ForeignKey(Car, on_delete=models.SET_NULL, null=True, blank=True, related_name='inquiries')
    
    # Status and Timestamps
    is_contacted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Lead'
        verbose_name_plural = 'Leads'

    def __str__(self):
        return f"{self.name} - {self.get_inquiry_type_display()}"
    
    def send_notification_email(self):
        """Send email notification to dealership"""
        subject = f"New Lead: {self.name}"
        car_info = f" (Interest in: {self.related_car})" if self.related_car else ""
        message = f"""
        New lead received{car_info}:
        
        Name: {self.name}
        Email: {self.email}
        Phone: {self.phone}
        Inquiry Type: {self.get_inquiry_type_display()}
        
        Message:
        {self.message}
        
        Please follow up with this lead promptly.
        """
        
        try:
            notify = getattr(settings, 'NOTIFY_EMAIL', settings.DEFAULT_FROM_EMAIL)
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [notify],  # Send to dealership notification email
                fail_silently=False,
            )
        except Exception as e:
            print(f"Failed to send notification email: {e}")


class TestDriveBooking(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    # Car and Customer Info
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='test_drives')
    customer_name = models.CharField(max_length=100)
    customer_email = models.EmailField()
    customer_phone = models.CharField(max_length=20)
    
    # Booking Details
    preferred_date = models.DateField()
    preferred_time = models.TimeField()
    message = models.TextField(blank=True, help_text="Any special requirements or notes")
    
    # Status and Management
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    confirmed_date = models.DateField(null=True, blank=True)
    confirmed_time = models.TimeField(null=True, blank=True)
    notes = models.TextField(blank=True, help_text="Internal notes")
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Test Drive Booking'
        verbose_name_plural = 'Test Drive Bookings'

    def __str__(self):
        return f"{self.customer_name} - {self.car} ({self.get_status_display()})"
    
    def send_confirmation_email(self):
        """Send confirmation email to customer"""
        if self.status == 'confirmed' and self.confirmed_date and self.confirmed_time:
            subject = f"Test Drive Confirmed - {self.car}"
            message = f"""
            Dear {self.customer_name},
            
            Your test drive for the {self.car} has been confirmed for:
            
            Date: {self.confirmed_date.strftime('%B %d, %Y')}
            Time: {self.confirmed_time.strftime('%I:%M %p')}
            
            Please arrive 15 minutes early with a valid driver's license.
            
            If you need to reschedule, please contact us as soon as possible.
            
            We look forward to seeing you!
            
            Best regards,
            Car Dealership Team
            """
            
            try:
                send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [self.customer_email],
                fail_silently=False,
                )
            except Exception as e:
                print(f"Failed to send confirmation email: {e}")
    
    def send_notification_email(self):
        """Send notification email to dealership"""
        subject = f"New Test Drive Booking: {self.car}"
        message = f"""
        New test drive booking received:
        
        Car: {self.car}
        Customer: {self.customer_name}
        Email: {self.customer_email}
        Phone: {self.customer_phone}
        Preferred Date: {self.preferred_date.strftime('%B %d, %Y')}
        Preferred Time: {self.preferred_time.strftime('%I:%M %p')}
        
        Message from customer:
        {self.message}
        
        Please confirm this booking in the admin panel.
        """
        
        try:
            notify = getattr(settings, 'NOTIFY_EMAIL', settings.DEFAULT_FROM_EMAIL)
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [notify],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Failed to send notification email: {e}")