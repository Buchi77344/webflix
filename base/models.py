from django.db import models
import uuid

# Create your models here.
class Movie(models.Model):
    GENE_MOVIE = [
        ('action_Movie', 'Action Movie'),
        ('horror', 'Horror'),
        ('sci-fiction', 'Sci_fiction'),
        ('romance', 'Romance'),
        ('korean_Movie', 'Korean Movie'),
    ]
    
    uu_id = models.UUIDField(default=uuid.uuid1)
    title = models.CharField(max_length=123)
    description =models.TextField()
    gene = models.CharField(max_length=50, choices= GENE_MOVIE)
    image_card = models.ImageField(upload_to='movie_images/')
    image_cover = models.ImageField(upload_to='movie_images/', null=True)
    release_date = models.DateField()
    video = models.FileField(upload_to='movie_videos/')
    movie_views = models.IntegerField(default=0)
    length = models.PositiveIntegerField()

    def __str__ (self):
        return self.title
  
class Topic(models.Model):
    name = models.CharField(max_length=123)
    des = models.TextField()
    def __str__(self):
        return self.name

