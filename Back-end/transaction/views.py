from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Transaction
from .serializers import transactionSerializers

# Create your views here.


class TransactionViewSet(ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = transactionSerializers
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['operation']
