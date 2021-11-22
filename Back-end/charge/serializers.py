from django.db.models.base import Model
from rest_framework import serializers
from .models import charge


class ChargeSerializers(serializers.ModelSerializer):
    class Meta:
        model = charge
        fields = ['Description', 'MotantCharge', 'Date']
