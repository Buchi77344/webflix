from django.db import models
import uuid

# Create your models here.
  
class Topic(models.Model):
    name = models.CharField(max_length=123)
    des = models.TextField()
    def __str__(self):
        return self.name

class Category(models.Model):
     name=models.CharField(max_length=100)
     def __str__(self):
            return self.name
class Movie (models.Model):
    slug =models.SlugField(max_length=120,null=True,blank=True)
    title = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE ,blank=True)
    overview = models.TextField()
    release_date = models.DateField()
    poster_path =models.ImageField(upload_to='movie_images/')
    video = models.FileField(upload_to='movie_images/',blank=True)
    vote_average = models.DecimalField( max_digits=5, decimal_places=2, null=True)

  
    

    def __str__(self):
        return self.title

class ViewedIP(models.Model):
    ip_address = models.GenericIPAddressField()

    def __str__(self):
        return self.ip_address
        


class Aboutus(models.Model):
    title = models.CharField(max_length=200)
    about = models.TextField()
    

    def __str__(self):
        return self.title

class User(models.Model):
    user =models.TextField(default=None)

    def __str__(self):
        return self.user


    


class LatestMovie (models.Model):
   
    title = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    overview = models.TextField()
    release_date = models.DateField()
    length =models.PositiveIntegerField()
    poster_path =models.ImageField(upload_to='movie_images/')
    image_cover =models.ImageField(upload_to='movie_images/')
    video = models.FileField(upload_to='movie_images/',blank=True)
    movie_views = models.IntegerField(default=0)
    viewed_ips =models.ManyToManyField('ViewedIP',blank=True)
    

    def __str__(self):
        return self.title
    
class YourModel(models.Model):
    crud = models.TextField()
class TimeStamp(models.Model):
    stamp = models.CharField( max_length=255,null=True)
    value = models.BooleanField(default=False)

    def __str__(self):
        return self.stamp