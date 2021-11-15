from rest_framework import serializers
from .models import client,dete

class clientSerializers(serializers.ModelSerializer):
    class Meta:
        model=client
        fields=['nom','prenom','username','password']

class deteSerializers(serializers.ModelSerializer):
    class Meta:
        model=dete
        fields=['credit','debit','date','client']