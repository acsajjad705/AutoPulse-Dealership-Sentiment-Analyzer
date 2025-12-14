from django.contrib import admin
from .models import Dealer, Review

@admin.register(Dealer)
class DealerAdmin(admin.ModelAdmin):
    list_display = ('id','name','city','state')

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id','dealer','user','sentiment','created_at')
