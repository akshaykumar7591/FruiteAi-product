from django.contrib import admin
from .models import *

@admin.register(Faq)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('label', 'description', 'title')
    search_fields = ('label', 'description')
