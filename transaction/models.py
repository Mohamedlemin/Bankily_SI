from django.db import models

# Create your models here.

class Transaction(models.Model):
    telephone=models.IntegerField()
    montant=models.DecimalField(max_digits=30,decimal_places=15)
    date=models.DateField(auto_now_add=True)
    operation=models.CharField(max_length=300)
    commision=models.DecimalField(max_digits=30,decimal_places=15)
    portfeuille=models.DecimalField(max_digits=30,decimal_places=15)
   

    def __str__(self):
        return self.operation
        