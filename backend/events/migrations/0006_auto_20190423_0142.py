# Generated by Django 2.2 on 2019-04-23 01:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0005_auto_20190416_0128'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_image',
            field=models.ImageField(blank=True, default='https://via.placeholder.com/150', null='True', upload_to=None),
        ),
    ]
