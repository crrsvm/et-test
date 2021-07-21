from django.shortcuts import render,redirect, get_object_or_404
from .forms import ProveedorForm
from .models import Proveedor
from django.contrib import messages

# Create your views here.

def home(request):

    return render(request, 'core/home.html')

def contacto(request):

    return render(request, 'core/contacto.html')

def seccion_gatos(request):

    return render(request, 'core/seccion-gatos.html')

def seccion_perros(request):

    return render(request, 'core/seccion-perros.html')


def agregar_proveedores(request):

    data = {
        'form': ProveedorForm()
    }
    if request.method == 'POST':
        formulario = ProveedorForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            messages.success(request, 'Proveedor agregado exitosamente')
            return redirect(to='core:proveedores')
        data["form"] = formulario
    
    return render(request, 'core/agregar_proveedores.html',data)

def proveedores(request):

    proveedores = Proveedor.objects.all()
    data = {
        'proveedores': proveedores
    }
    
    return render(request, 'core/proveedores.html', data)


def eliminar_proveedores(request,id):

    proveedores = get_object_or_404(Proveedor, id=id)
    proveedores.delete()
    messages.success(request, 'Proveedor eliminado exitosamente')
    return redirect(to='core:proveedores')   

def modificar_proveedores(request,id):

    proveedores = get_object_or_404(Proveedor, id=id)
    data = {
        'form': ProveedorForm(instance=proveedores)
    }
    if request.method == 'POST':
        formulario = ProveedorForm(data=request.POST, instance=proveedores)
        if formulario.is_valid():             
            formulario.save()       
            messages.success(request, 'Proveedor modificado exitosamente')
            return redirect(to='core:proveedores')                 
        data["form"] = formulario
    return render(request, 'core/modificar_proveedor.html', data)   