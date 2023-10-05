from django.db import models

#Modelo para crear herramientas

class Herramientas(models.Model):
    codigo = models.CharField(max_length=10)
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=100)
    estado = models.IntegerField()
