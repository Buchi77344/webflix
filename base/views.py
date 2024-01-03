from django.shortcuts import render
from .models import Movie ,Topic
from django.http import HttpResponse
import json
# Create your views here.
def index(request):
    movie = Movie.objects.all()
    topic = Topic.objects.all()
    context = {
        'movies':movie,
        'topic':topic
    }


    return render (request, 'index.html', context)

def topics(request):
    topic = Topic.objects.all()
    topic_json =json.dumps(list(topic.values()))
    context ={
        'topic_json':topic_json
    }
    return HttpResponse (topic_json , context)
def movie (request,pk):
    movie_uuid = pk
    movie_details = Movie.objects.get(uu_id =movie_uuid)
    context  ={
        'movie_details':movie_details
    }
    return render (request, 'movie.html',context)