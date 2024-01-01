# Generated by Django 5.0 on 2023-12-27 04:41

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uu_id', models.UUIDField(default=uuid.uuid4)),
                ('title', models.CharField(max_length=123)),
                ('description', models.TextField()),
                ('gene', models.CharField(choices=[('action_Movie', 'Action Movie'), ('horror', 'Horror'), ('sci-fiction', 'Sci_fiction'), ('romance', 'Romance'), ('korean_Movie', 'Korean Movie')], max_length=50)),
                ('image_card', models.ImageField(upload_to='images/')),
                ('image_slide', models.ImageField(upload_to='images/')),
                ('release_date', models.DateField()),
                ('video', models.FileField(upload_to='movie_videos')),
                ('movie_views', models.IntegerField(default=0)),
                ('length', models.PositiveIntegerField()),
            ],
        ),
    ]
