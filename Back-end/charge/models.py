from django.db import models

# Create your models here.


class charge(models.Model):
    Description = models.TextField()
    MotantCharge = models.DecimalField(max_digits=20, decimal_places=3)
    Date = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return charge.Description

    class Meta:
        ordering = ['MotantCharge']
