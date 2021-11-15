from django.contrib import admin
from .models import client,dete



class deteAdmin(admin.ModelAdmin):
    list_display=("debit","credit","date","client_id")


# Register your models here.
admin.site.register(dete,deteAdmin)

class clientAdmin(admin.ModelAdmin):
    list_display=("id","nom","prenom","username","password")

# Register your models here.
admin.site.register(client,clientAdmin)
