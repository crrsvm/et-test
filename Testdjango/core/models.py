from django.db import models

# Create your models here.

class Servicio (models.Model):
    id_servicio= models.IntegerField(primary_key=True, verbose_name='ID de servicio')
    nombre_servicio = models.CharField(max_length=50, verbose_name='Nombre del Servicio')

    def __str__(self):
        return self.nombre_servicio

class Proveedor(models.Model):
    rut=models.CharField(max_length=20)
    razon_social=models.CharField(max_length=50)
    descripcion=models.CharField(max_length=100)
    telefono=models.CharField(max_length=15)
    email=models.CharField(max_length=50)
    servicio=models.ForeignKey(Servicio, on_delete=models.CASCADE)
  
    def str(self):
        return self.rut