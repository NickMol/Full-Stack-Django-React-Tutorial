from rest_framework import serializers
from .models import *

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'name')

class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ('id', 'name')

class CharacteristicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characteristic
        fields = ('id', 'name')


class FootballClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = FootballClub
        fields = "__all__"