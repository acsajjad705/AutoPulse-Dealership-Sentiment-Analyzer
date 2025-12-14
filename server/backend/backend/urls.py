from django.contrib import admin
from django.urls import path, include
from cars import views as cars_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('cars.urls')),
    # optional: include auth endpoints if in users app
]
