
from django.shortcuts import render ,redirect ,get_object_or_404,HttpResponse
from .models import Movie ,Category ,ViewedIP ,User, Topic ,LatestMovie ,YourModel
from django.views import generic
from django.urls import reverse
# from django.contrib.gis.geoip2 import GeoIP2
from django.db.models import Q 
import json
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect
import json
from django.http import JsonResponse
from.models  import LatestMovie
import requests
import time
from .snap import get_latest_movie







class indexpageview(generic.ListView):
    template_name = 'index.html'
    queryset = Movie.objects.all()
    context_object_name = 'movies'
    
def index(request):
    movie =get_latest_movie()
    context = {
        'movie': movie
    }

    return render (request, 'index.html',context)

def topics(request):
    topic = Topic.objects.all()
    topic_json =json.dumps(list(topic.values()))
    context ={
        'topic_json':topic_json
    }
    return HttpResponse(topic_json , context)
     
def movie(request,pk):
    movie_uuid =pk
    movie_details = Movie.objects.get(uu_id=movie_uuid)
    

    def get_ip(request):
        address =request.META.get('HTTP_X_FORWARDED_FOR')
        if address:
           ip=address.split(',')[-1].strip()
        else:
            ip =request.META.get('REMOTE_ADDR')
        return ip
    ip=get_ip(request)
    u = User(user=ip)
    print(ip)
    result =User.objects.filter(Q(user__icontains=ip))
    if len(result)==1:
        print('user exist')
    elif len(result)>1:
        print ('user exist more ....')
    else:
        u.save()
        print('user is unique')
    count =User.objects.all().count()
    print('total user is',count)
    context = {
        'count':count,
        'movie_details':movie_details 
    }
    return render(request, 'movie.html',context)

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
    
# def create_movie_list(request):
#     if request.method == 'POST':
#         form =MovieForm(request.POST)
#         if form.is_valid():
#             movie =form.save()
#             movielist = request.session.get('movielist',{})
#             ip_address =request.META.get('REMOTE_ADDR')
#             movielist.setdefault(ip_address,[]).append(movie.id)
#             request.session['movielist']= movielist
#             return redirect('movielist')
#     else:
#         form = MovieForm()
#         context = {
#             'form':form
#         }
#         return render (request, 'create_movie_list.html',context)

def movie_list(request):
    movie_data =get_latest_movie()
    context = {
        'movie_data': movie_data
    }
    return render (request, 'movie_list.html', context)





def dell(request):
    text = ''
    secs_time = time.localtime().tm_sec
    print(secs_time)
    cond_time = secs_time % 10
    
    if cond_time == 0:
        text = "success"
        print("10 seconds")
    context= {
        'text':text
    }
    return render(request,'del.html', context)



    


def aboutus(request):
    return render (request, 'aboutus.html')


def fetchapi(request):
    return JsonResponse({"message":"success"})