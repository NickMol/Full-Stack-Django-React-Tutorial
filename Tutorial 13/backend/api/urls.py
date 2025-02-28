from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('country',CountryViewset, basename='country')
router.register('league',LeagueViewset, basename='league')
router.register('characteristic',CharacteristicViewset, basename='characteristic')
router.register('footballclub',FootballClubViewset, basename='footballclub')
urlpatterns = router.urls
