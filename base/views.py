from django.shortcuts import render
from .models import Movie

# Create your views here.
def index(request):
    movie = Movie.objects.all()
    context = {
        'movies':movie
    }
    return render (request, 'index.html', context)
def movie (request,pk):
    movie_uuid = pk
    movie_details = Movie.objects.get(uu_id =movie_uuid)
    context  ={
        'movie_details':movie_details
    }
    return render (request, 'movie.html',context)