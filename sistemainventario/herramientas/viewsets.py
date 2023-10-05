from rest_framework import viewsets

from.models import Herramientas
from.serializer import HerramientasSerializer

class HerramientasViewSet(viewsets.ModelViewSet):
    queryset = Herramientas.objects.all()
    serializer_class = HerramientasSerializer