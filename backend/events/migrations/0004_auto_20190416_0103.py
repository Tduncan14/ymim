# Generated by Django 2.2 on 2019-04-16 01:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0003_auto_20190416_0002'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='end_time',
            field=models.TextField(blank=True, null='True'),
        ),
        migrations.AlterField(
            model_name='event',
            name='start_time',
            field=models.TextField(blank=True, null='True'),
        ),
    ]
