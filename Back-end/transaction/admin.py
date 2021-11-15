from django.contrib import admin
from .models import Transaction



class transactionAdmin(admin.ModelAdmin):
    list_display=("telephone","date","operation","montant","commision","portfeuille")


# Register your models here.
admin.site.register(Transaction,transactionAdmin)
