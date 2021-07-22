
$(document).ready(function(){

    // Oculta div que contengan class "alert" y se encuentren en un elemento con id "formulario-contacto".
    $("#formulario-contacto span.alert").hide();

    // Función que verifica si fieldValue es vacío y exhibe u oculta 
    // el mensaje en div de alerta asociado al campo en el parámetro fieldname,respectivamente
    function validarCampoVacio(fieldValue, fieldId) {
        
        if (fieldValue.trim().length == 0) {
            $("#"+fieldId).addClass("error-campo-formulario");
            $("label[for='"+fieldId+"'] span.alert").html("El campo no puede ser vacío");
            $("label[for='"+fieldId+"'] span.alert").show();
            $("label[for='"+fieldId+"'] span.alert").fadeOut( 5000 )

            return false;
        } else {
            $("#"+fieldId).removeClass("error-campo-formulario");
            $("label[for='"+fieldId+"'] span.alert").hide();

            return true;
        }
    }

    //Si el campo es vacío, relaciona en el evento blur de #fieldContacto la llamada a la función de validación.
    $("#fieldTipoContacto").change(function(){
        valorIngresado = $(this).val();
        console.log("No ha seleccionado un tipo de contacto: '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldTipoContacto");
    });

    //Si el campo es vacío, relaciona en el eventro blur de #fieldNombre la llamada a la función de validación.
    $("#fieldNombre").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo nombre con el valor: '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldNombre");
    });
   
    //Si el campo es vacío, relaciona en el evento blur de #fieldMail la llamada a la fucnión de validación.
    $("#fieldEmail").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo e-mail con el valor: '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldEmail");
    });

    //Si el campo es vacío, relaciona en el evento blur de#fieldNacimiento la llamada a la función de validación.
    $("#fieldFechaNacimiento").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo fechaNacimiento con el valor: '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldFechaNacimiento");
    });

    //Si el campo es vacío, relaciona en el evento blur de #fieldRut la llamada a la función de validación
    $("#fieldRut").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo RUT vacío: + '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldRut");
    });

    
    //Si el campo es vacío, relaciona en el evento blur de #fieldComentario la llamada a la función de validación
    $("#fieldComentario").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo comentario con el valor: '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldComentario");
    });

    $(":submit").click(function(event) {
        error = false;

        $("input, textarea, select").each(function() {
            value = $(this).val();
            fieldId = $(this).attr("id");

            if (!validarCampoVacio(value, fieldId)) {
                error = true;
            }
        })

        if (error) {
            event.preventDefault();
            return false;
        }

        return true;
    })
});


