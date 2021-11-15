from django_filters import filters
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import client,dete
from .serializers import clientSerializers,deteSerializers
from .filters import DeteFilter

# Create your views here.

class ClientViewSet(ModelViewSet):
    queryset=client.objects.all()
    serializer_class=clientSerializers
    filter_backends=[DjangoFilterBackend]
    filterset_fields=['nom']
   

class DeteViewSet(ModelViewSet):
      queryset=dete.objects.all()
      serializer_class=deteSerializers
      filter_backends=[DjangoFilterBackend,SearchFilter]
      filterset_class=DeteFilter
      #client
      search_fields=['client']



