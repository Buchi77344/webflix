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
    uu_id =models.UUIDField(default=uuid.uuid4)
    title = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField()
    release_date = models.DateField()
    length =models.PositiveIntegerField()
    image_card =models.ImageField(upload_to='movie_images/')
    image_cover =models.ImageField(upload_to='movie_images/')
    video = models.FileField(upload_to='movie_images/')
    movie_views = models.IntegerField(default=0)
    viewed_ips =models.ManyToManyField('ViewedIP',blank=True)
    

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


    


