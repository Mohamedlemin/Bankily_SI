from django_filters.rest_framework import FilterSet
from .models import dete

class DeteFilter(FilterSet):
  class Meta:
    model = dete
    fields = {
      'client': ['exact'],
      'debit': ['gt', 'lt']
    }