from django.contrib import admin
from .models import charge


class ChargeAdmin(admin.ModelAdmin):
    list_display = ("Description", "MotantCharge", "Date")


# Register your models here.
admin.site.register(charge, ChargeAdmin)
