from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.
class client(models.Model):
    nom=models.CharField(max_length=70)
    prenom=models.CharField(max_length=70)
    username=models.CharField(max_length=80)
    password=models.CharField(max_length=80)
    

class dete(models.Model):
    credit=models.DecimalField(max_digits=30,decimal_places=15)
    debit=models.DecimalField(max_digits=30,decimal_places=15)
    date=models.DateTimeField(auto_now_add=True)
    client=models.ForeignKey(client,on_delete=models.CASCADE)