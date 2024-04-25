from django.urls import path
from .import views

urlpatterns = [
    path("topic", views.topics, name = "topics"),
    path('',views.indexpageview.as_view(), name='index'),
    path('category/<category>/',views.catpageview.as_view(), name= 'category'),
    path('movie/<str:pk>/',views.movie,name='movie'),
    # path('create-movie', views.create_movie_list,name = 'create-movie'),
    path('movielist', views.movie_list, name='movelist'),
    path('dell',views.dell,name='dell'),
    path('aboutus',views.aboutus,name='aboutus'),
    path('fetchapi', views.fetchapi, name= 'fetchapi')
]
