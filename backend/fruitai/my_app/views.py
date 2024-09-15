from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework import status
from rest_framework.response import Response

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Faq.objects.all()
    serializer_class = FaqSerializer

    def create(self, request, *args, **kwargs):
        # Custom logic before creating an FAQ
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        # Custom logic before updating an FAQ
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        # Custom logic before deleting an FAQ
        return super().destroy(request, *args, **kwargs)