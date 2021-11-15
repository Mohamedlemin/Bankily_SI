from rest_framework import serializers
from .models import Transaction

class transactionSerializers(serializers.ModelSerializer):
    class Meta:
        model=Transaction
        fields=['telephone','montant','date','commision','operation','portfeuille']