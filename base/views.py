from django.shortcuts import render
from .models import Movie ,Category
from django.views import generic

# Create your views here.
class indexpageview(generic.ListView):
    template_name = 'index.html'
    queryset = Movie.objects.all()
    context_object_name = 'movies'
    
def index(request):
    movies = Movie.objects.all()
    context = {
        'movies':movies
    }
    return render (request, 'index.html',context)


    
def movie(request,pk):
    movie_uuid =pk
    movie_details = Movie.objects.get(uu_id=movie_uuid)

    context ={
        'movie_details':movie_details
    }
    return render (request, 'movie.html',context)

class catpageview(generic.ListView):
    template_name = 'category.html'
    context_object_name = 'catlist'
    
    def get_queryset(self):
        context = {
            'cat':self.kwargs['category'],
            'movie': Movie.objects.filter(category__name =self.kwargs['category'])
        }
        return context
def category_list(request):
    category_list = Category.objects.exclude(name ='default')
    context ={
        'category_list': category_list
    }
    return context
    


# Create your views here.

