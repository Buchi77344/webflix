# Generated by Django 5.0.1 on 2024-03-27 22:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_yourmodel'),
    ]

    operations = [
        migrations.RenameField(
            model_name='latestmovie',
            old_name='description',
            new_name='overview',
        ),
        migrations.RenameField(
            model_name='latestmovie',
            old_name='image_card',
            new_name='poster_path',
        ),
        migrations.RemoveField(
            model_name='latestmovie',
            name='uu_id',
        ),
    ]
