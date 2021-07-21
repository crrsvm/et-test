from django.urls import path
from core.views import home,contacto,seccion_gatos,seccion_perros,agregar_proveedores, proveedores,eliminar_proveedores,modificar_proveedores

app_name='core'

urlpatterns = [
    path('', home, name="home"),
    path('agregar/', agregar_proveedores , name="agregar"),
    path('proveedores/', proveedores , name="proveedores"),
    path('eliminar/<id>', eliminar_proveedores , name="eliminar"),
    path('modificar/<id>', modificar_proveedores , name="modificar"),   
    path('contacto/', contacto, name="contacto"),
    path('home/', home, name="home"),
    path('gatos/', seccion_gatos, name="gatos"),
    path('perros/', seccion_perros, name="perros"),
   
    
]