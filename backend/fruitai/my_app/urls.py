from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet

router = DefaultRouter()
router.register('', ItemViewSet)
# router.register('',ItemViewSet)

urlpatterns = [
    path('faq/', include(router.urls)),
]
