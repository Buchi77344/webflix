from django.urls import path
from .import views

urlpatterns = [
    path('',views.index, name='index'),
    path('movie/<str:pk>/',views.movie,name='movie')
]