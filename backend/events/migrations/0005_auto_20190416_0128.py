# Generated by Django 2.2 on 2019-04-16 01:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0004_auto_20190416_0103'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_image',
            field=models.ImageField(blank=True, default='https://via.placeholder.com/150', upload_to=None),
        ),
    ]