from django.db import models

class Faq(models.Model):
    label = models.CharField(max_length=100)
    description = models.TextField()
    title = models.CharField(max_length=250)
