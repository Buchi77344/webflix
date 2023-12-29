"""webflix URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
<<<<<<< HEAD
from django.conf import settings
from django.conf.urls.static import static

=======
>>>>>>> 64528bcb5ed55d659ff7a74311e107c5e85340f3

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('base.urls')),
]
<<<<<<< HEAD


urlpatterns =urlpatterns+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
=======
>>>>>>> 64528bcb5ed55d659ff7a74311e107c5e85340f3
