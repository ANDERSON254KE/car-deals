from django.views.generic import TemplateView
from cars.models import Car


class HomeView(TemplateView):
    template_name = 'core/home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['featured_cars'] = Car.objects.filter(is_featured=True).order_by('-created_at')[:6]
        context['recent_cars'] = Car.objects.order_by('-created_at')[:8]
        return context

class AboutView(TemplateView):
    template_name = 'core/about.html'