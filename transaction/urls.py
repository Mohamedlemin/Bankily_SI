from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views
router=SimpleRouter()
router.register('transactions',views.TransactionViewSet)


urlpatterns=router.urls