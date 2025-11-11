from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from .forms import LeadForm, TestDriveForm, ContactForm
from .models import Lead, TestDriveBooking
from cars.models import Car
from django import forms
from django.core.files.uploadedfile import UploadedFile


class MultipleFileInput(forms.ClearableFileInput):
    allow_multiple_selected = True


def create_lead(request, car_id=None):
    car = None
    if car_id:
        car = get_object_or_404(Car, id=car_id)
    
    if request.method == 'POST':
        form = LeadForm(request.POST, car=car)
        if form.is_valid():
            form.save()
            messages.success(request, 'Thank you for your inquiry! We will contact you soon.')
            return redirect('leads:thank_you')
    else:
        form = LeadForm(car=car)
    
    return render(request, 'leads/create_lead.html', {'form': form, 'car': car})


def book_test_drive(request, car_id):
    car = get_object_or_404(Car, id=car_id)
    
    if request.method == 'POST':
        form = TestDriveForm(request.POST, car=car)
        if form.is_valid():
            form.save()
            messages.success(request, 'Test drive request submitted! We will contact you to confirm the appointment.')
            return redirect('leads:thank_you')
    else:
        form = TestDriveForm(car=car)
    
    return render(request, 'leads/book_test_drive.html', {'form': form, 'car': car})


def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Create a lead from contact form
            lead = Lead.objects.create(
                name=form.cleaned_data['name'],
                email=form.cleaned_data['email'],
                phone=form.cleaned_data['phone'],
                inquiry_type='general',
                message=f"Subject: {form.cleaned_data['subject']}\n\n{form.cleaned_data['message']}"
            )
            lead.send_notification_email()
            
            messages.success(request, 'Thank you for contacting us! We will get back to you soon.')
            return redirect('leads:thank_you')
    else:
        form = ContactForm()
    
    return render(request, 'leads/contact.html', {'form': form})


def thank_you(request):
    return render(request, 'leads/thank_you.html')


# Trade-in Form
class TradeInForm(forms.Form):
    name = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500', 'placeholder': 'Your name'})
    )
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500', 'placeholder': 'Your email'})
    )
    phone = forms.CharField(
        max_length=20,
        widget=forms.TextInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500', 'placeholder': 'Your phone'})
    )
    year = forms.IntegerField(
        min_value=1900,
        max_value=2025,
        widget=forms.NumberInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'})
    )
    make = forms.CharField(
        max_length=50,
        widget=forms.TextInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500', 'placeholder': 'e.g., Toyota'})
    )
    model = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500', 'placeholder': 'e.g., Camry'})
    )
    mileage = forms.IntegerField(
        widget=forms.NumberInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'})
    )
    condition = forms.ChoiceField(
        choices=[('excellent', 'Excellent'), ('good', 'Good'), ('fair', 'Fair'), ('poor', 'Poor')],
        widget=forms.Select(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'})
    )
    vin = forms.CharField(
        max_length=20,
        required=False,
        widget=forms.TextInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500', 'placeholder': 'Optional VIN'})
    )
    notes = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500', 'rows': 4, 'placeholder': 'Additional notes'})
    )
    images = forms.FileField(
        required=True,
        widget=MultipleFileInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500', 'accept': 'image/*', 'id': 'images-input'}),
        help_text='Upload at least 10 clear photos of your vehicle (exterior, interior, engine, any damage, etc.)'
    )

    def clean_images(self):
        images = self.files.getlist('images')
        if len(images) < 10:
            raise forms.ValidationError('Please upload at least 10 images of your vehicle.')
        return images


def trade_in(request):
    if request.method == 'POST':
        form = TradeInForm(request.POST, request.FILES)
        if form.is_valid():
            # Handle uploaded images
            images_info = ""
            if 'images' in request.FILES:
                uploaded_files = request.FILES.getlist('images')
                images_info = f"\n\nImages uploaded: {len(uploaded_files)} file(s)"
                for i, file in enumerate(uploaded_files, 1):
                    images_info += f"\n  {i}. {file.name} ({file.size} bytes)"
                # Note: In a production app, you'd save these files properly
                # For now, we'll just note that images were uploaded

            # Create a Lead with trade-in info
            message = (
                f"Trade-in submission:\n"
                f"Car: {form.cleaned_data['year']} {form.cleaned_data['make']} {form.cleaned_data['model']}\n"
                f"Mileage: {form.cleaned_data['mileage']}\n"
                f"Condition: {form.cleaned_data['condition']}\n"
                f"VIN: {form.cleaned_data.get('vin', '')}\n\n"
                f"Notes:\n{form.cleaned_data.get('notes', '')}\n"
                f"{images_info}"
            )
            lead = Lead.objects.create(
                name=form.cleaned_data['name'],
                email=form.cleaned_data['email'],
                phone=form.cleaned_data['phone'],
                inquiry_type='trade_in',
                message=message
            )
            # Email notification to dealership
            lead.send_notification_email()
            messages.success(request, 'Trade-in submitted successfully! We will reach out soon.')
            return redirect('leads:thank_you')
    else:
        form = TradeInForm()
    return render(request, 'leads/trade_in.html', {'form': form})


# Financing Form
class FinancingForm(forms.Form):
    name = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500', 'placeholder': 'Your name'})
    )
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500', 'placeholder': 'Your email'})
    )
    phone = forms.CharField(
        max_length=20,
        widget=forms.TextInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500', 'placeholder': 'Your phone'})
    )
    employment_status = forms.ChoiceField(
        choices=[('employed', 'Employed'), ('self', 'Self-employed'), ('student', 'Student'), ('unemployed', 'Unemployed')],
        widget=forms.Select(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'})
    )
    monthly_income = forms.IntegerField(
        min_value=0,
        widget=forms.NumberInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'})
    )
    downpayment = forms.IntegerField(
        min_value=0,
        widget=forms.NumberInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'})
    )
    term_months = forms.ChoiceField(
        choices=[('12', '12 months'), ('24', '24 months'), ('36', '36 months'), ('48', '48 months'), ('60', '60 months')],
        widget=forms.Select(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'})
    )
    notes = forms.CharField(
        widget=forms.Textarea(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500', 'rows': 4}),
        required=False
    )


def financing(request):
    if request.method == 'POST':
        form = FinancingForm(request.POST)
        if form.is_valid():
            message = (
                f"Financing inquiry:\n"
                f"Employment: {form.cleaned_data['employment_status']}\n"
                f"Monthly Income: {form.cleaned_data['monthly_income']}\n"
                f"Downpayment: {form.cleaned_data['downpayment']}\n"
                f"Term: {form.cleaned_data['term_months']}\n\n"
                f"Notes:\n{form.cleaned_data.get('notes', '')}\n"
            )
            lead = Lead.objects.create(
                name=form.cleaned_data['name'],
                email=form.cleaned_data['email'],
                phone=form.cleaned_data['phone'],
                inquiry_type='financing',
                message=message
            )
            lead.send_notification_email()
            messages.success(request, 'Financing inquiry sent! We will contact you soon.')
            return redirect('leads:thank_you')
    else:
        form = FinancingForm()
    return render(request, 'leads/financing.html', {'form': form})