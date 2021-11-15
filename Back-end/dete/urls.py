from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views
router=SimpleRouter()
router.register('detes',views.DeteViewSet)
router.register('clients',views.ClientViewSet)

urlpatterns=router.urls