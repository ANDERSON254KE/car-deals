from django.utils.deprecation import MiddlewareMixin
from django.urls import resolve, Resolver404
from .models import CarView, PopularCar


class CarViewMiddleware(MiddlewareMixin):
    """Middleware to track car page views"""
    
    def process_response(self, request, response):
        # Only track successful GET requests
        if request.method != 'GET' or response.status_code != 200:
            return response
        
        try:
            # Check if this is a car detail view
            resolved = resolve(request.path)
            if resolved.url_name == 'detail' and resolved.namespace == 'cars':
                car_id = resolved.kwargs.get('pk')
                if car_id:
                    self.track_car_view(request, car_id)
        except (Resolver404, AttributeError):
            pass
        
        return response
    
    def track_car_view(self, request, car_id):
        """Track a car view"""
        try:
            from cars.models import Car
            car = Car.objects.get(id=car_id)
            
            # Get client IP address
            ip_address = self.get_client_ip(request)
            
            # Get session key
            session_key = request.session.session_key or ''
            
            # Check if we already tracked this view recently (same IP, same car, within last hour)
            from datetime import datetime, timedelta
            one_hour_ago = datetime.now() - timedelta(hours=1)
            
            recent_view = CarView.objects.filter(
                car=car,
                ip_address=ip_address,
                viewed_at__gte=one_hour_ago
            ).exists()
            
            if not recent_view:
                # Create new view record
                CarView.objects.create(
                    car=car,
                    ip_address=ip_address,
                    user_agent=request.META.get('HTTP_USER_AGENT', '')[:500],
                    referrer=request.META.get('HTTP_REFERER', ''),
                    session_key=session_key
                )
                
                # Update car popularity stats (do this asynchronously in production)
                try:
                    PopularCar.update_car_popularity(car)
                except Exception:
                    pass  # Don't break the request if popularity update fails
                
        except Exception:
            pass  # Don't break the request if tracking fails
    
    def get_client_ip(self, request):
        """Get client IP address from request"""
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip