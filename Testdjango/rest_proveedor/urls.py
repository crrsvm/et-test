from django.urls import path 
from rest_proveedor.views import lista_proveedores, agregar_proveedor, detalle_proveedor
from rest_proveedor.viewsLogin import login

urlpatterns = [
    path('lista_proveedores', lista_proveedores, name='lista_proveedores'),
    path('agregar_proveedor', agregar_proveedor, name='agregar_proveedor' ),
    path('detalle_proveedor/<id>', detalle_proveedor, name='detalle_proveedor'),
    path('login', login, name='login'),
]