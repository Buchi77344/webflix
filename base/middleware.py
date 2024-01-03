from django.utils.deprecation import MiddlewareMixin

class SetUserIPMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if not request.session.get('user_ip_address'):
            request.session['user_ip_address']=request.META.get('REMOTE_ADDR')
    