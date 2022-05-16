from django.urls import path
from . import views


urlpatterns = [
    path('scenario', views.index, name='index')
]