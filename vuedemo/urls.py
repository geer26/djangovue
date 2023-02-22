from django.urls import path

from .views import IndexView

app_name = 'vue_demo'

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
]