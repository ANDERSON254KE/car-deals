from django import forms
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Field, Submit, Row, Column
from .models import Lead, TestDriveBooking
from cars.models import Car


class LeadForm(forms.ModelForm):
    class Meta:
        model = Lead
        fields = ['name', 'email', 'phone', 'inquiry_type', 'message']
        widgets = {
            'message': forms.Textarea(attrs={'rows': 5}),
        }
    
    def __init__(self, *args, **kwargs):
        self.car = kwargs.pop('car', None)
        super().__init__(*args, **kwargs)
        
        self.helper = FormHelper()
        self.helper.layout = Layout(
            Row(
                Column('name', css_class='form-group col-md-6 mb-3'),
                Column('email', css_class='form-group col-md-6 mb-3'),
                css_class='form-row'
            ),
            Row(
                Column('phone', css_class='form-group col-md-6 mb-3'),
                Column('inquiry_type', css_class='form-group col-md-6 mb-3'),
                css_class='form-row'
            ),
            Field('message', css_class='form-group mb-3'),
            Submit('submit', 'Send Inquiry', css_class='btn btn-primary')
        )
        
        # Set placeholders
        self.fields['name'].widget.attrs.update({'placeholder': 'Your full name'})
        self.fields['email'].widget.attrs.update({'placeholder': 'your.email@example.com'})
        self.fields['phone'].widget.attrs.update({'placeholder': '+1 (555) 123-4567'})
        self.fields['message'].widget.attrs.update({'placeholder': 'Tell us more about your interest...'})
    
    def save(self, commit=True):
        lead = super().save(commit=False)
        if self.car:
            lead.related_car = self.car
            lead.inquiry_type = 'car_specific'
        
        if commit:
            lead.save()
            lead.send_notification_email()
        
        return lead


class TestDriveForm(forms.ModelForm):
    class Meta:
        model = TestDriveBooking
        fields = ['customer_name', 'customer_email', 'customer_phone', 'preferred_date', 'preferred_time', 'message']
        widgets = {
            'preferred_date': forms.DateInput(attrs={'type': 'date', 'min': ''}),
            'preferred_time': forms.TimeInput(attrs={'type': 'time'}),
            'message': forms.Textarea(attrs={'rows': 3}),
        }
    
    def __init__(self, *args, **kwargs):
        self.car = kwargs.pop('car', None)
        super().__init__(*args, **kwargs)
        
        self.helper = FormHelper()
        self.helper.layout = Layout(
            Row(
                Column('customer_name', css_class='form-group col-md-6 mb-3'),
                Column('customer_email', css_class='form-group col-md-6 mb-3'),
                css_class='form-row'
            ),
            Field('customer_phone', css_class='form-group mb-3'),
            Row(
                Column('preferred_date', css_class='form-group col-md-6 mb-3'),
                Column('preferred_time', css_class='form-group col-md-6 mb-3'),
                css_class='form-row'
            ),
            Field('message', css_class='form-group mb-3'),
            Submit('submit', 'Book Test Drive', css_class='btn btn-success')
        )
        
        # Set placeholders
        self.fields['customer_name'].widget.attrs.update({'placeholder': 'Your full name'})
        self.fields['customer_email'].widget.attrs.update({'placeholder': 'your.email@example.com'})
        self.fields['customer_phone'].widget.attrs.update({'placeholder': '+1 (555) 123-4567'})
        self.fields['message'].widget.attrs.update({'placeholder': 'Any special requirements or notes...'})
        
        # Set minimum date to today
        from datetime import date
        self.fields['preferred_date'].widget.attrs['min'] = date.today().isoformat()
    
    def save(self, commit=True):
        booking = super().save(commit=False)
        if self.car:
            booking.car = self.car
        
        if commit:
            booking.save()
            booking.send_notification_email()
        
        return booking


class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    phone = forms.CharField(max_length=20, required=False)
    subject = forms.CharField(max_length=200)
    message = forms.CharField(widget=forms.Textarea(attrs={'rows': 5}))
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        
        self.helper = FormHelper()
        self.helper.layout = Layout(
            Row(
                Column('name', css_class='form-group col-md-6 mb-3'),
                Column('email', css_class='form-group col-md-6 mb-3'),
                css_class='form-row'
            ),
            Row(
                Column('phone', css_class='form-group col-md-6 mb-3'),
                Column('subject', css_class='form-group col-md-6 mb-3'),
                css_class='form-row'
            ),
            Field('message', css_class='form-group mb-3'),
            Submit('submit', 'Send Message', css_class='btn btn-primary')
        )
        
        # Set placeholders
        self.fields['name'].widget.attrs.update({'placeholder': 'Your full name'})
        self.fields['email'].widget.attrs.update({'placeholder': 'your.email@example.com'})
        self.fields['phone'].widget.attrs.update({'placeholder': '+1 (555) 123-4567'})
        self.fields['subject'].widget.attrs.update({'placeholder': 'What is this regarding?'})
        self.fields['message'].widget.attrs.update({'placeholder': 'Your message...'})