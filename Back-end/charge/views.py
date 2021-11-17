from django.db import models
from django.db.models.query import QuerySet
from django.shortcuts import render
from .models import charge
from .serializers import ChargeSerializers
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend


class ChargeViewSet(ModelViewSet):
    queryset = charge.objects.all()
    serializer_class = ChargeSerializers
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['MotantCharge']
