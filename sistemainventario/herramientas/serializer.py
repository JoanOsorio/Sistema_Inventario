from .models import Herramientas
from rest_framework import serializers

class HerramientasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Herramientas
        fields = '__all__'
