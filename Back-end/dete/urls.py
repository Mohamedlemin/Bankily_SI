from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views
router = SimpleRouter()
router.register('ListDettes', views.DeteViewSet)
router.register('ListClients', views.ClientViewSet)

urlpatterns = router.urls
