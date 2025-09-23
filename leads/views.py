from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from .forms import LeadForm, TestDriveForm, ContactForm
from .models import Lead, TestDriveBooking
from cars.models import Car


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