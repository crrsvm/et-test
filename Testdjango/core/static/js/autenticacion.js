
$(document).ready(function(){

    // ocultar todos los div que tengan class "alert" y se encuentren
    // dentro de un elemento cuyo id es "formulario-autenticacion".
    $("#formulario-autenticacion span.alert").hide();

    // asocia en el evento blur del elemento de formulario con id "fieldUsuario" la llamada a la
    // función de validar si el campo es vacío.
    $("#fieldUsuario").change(function(){
        if ($(this).val().length >= 8) {
            if($(this).val().indexOf(' ') >= 0){
                $("#fieldUsuario").addClass("error-campo-formulario");
                $("label[for='fieldUsuario'] span.alert").html("El nombre de usuario no puede tener espacios");
                $("label[for='fieldUsuario'] span.alert").show();
                $("label[for='fieldUsuario'] span.alert").fadeOut( 5000 );
                $(".btn-enviar").attr('disabled',true);
                return false;
            }else{
                $("#fieldUsuario").removeClass("error-campo-formulario");
                $("label[for='fieldUsuario'] span.alert").hide();
                $(".btn-enviar").attr('disabled',true);
                return true;
            }
        }
	    else {
            $("#fieldUsuario").addClass("error-campo-formulario");
            $("label[for='fieldUsuario'] span.alert").html("Debes tener al menos 8 caracteres");
            $("label[for='fieldUsuario'] span.alert").show();
            $("label[for='fieldUsuario'] span.alert").fadeOut( 5000 );
            $(".btn-enviar").attr('disabled',true);
            return false;
	    }
        
    
        
        });

    // asocia en el evento blur del elemento de formulario con id "fieldClave" la llamada a la
    // función de validar si el campo es vacío.
    $("#fieldClave").change(function(){
        ///^([0-9])*$/.test($(this).val())
        if ($(this).val().length >= 2 || /^\s+$/.test($(this).val())){
            $("#fieldClave").removeClass("error-campo-formulario");
            $("label[for='fieldClave'] span.alert").hide();
            $(".btn-enviar").attr('disabled',false);
            return true;
        }else{
            $("#fieldClave").addClass("error-campo-formulario");
            $("label[for='fieldClave'] span.alert").html("Debe contener al menos 2 letras");
            $("label[for='fieldClave'] span.alert").show();
            $("label[for='fieldClave'] span.alert").fadeOut( 5000 );
            $(".btn-enviar").attr('disabled',true);
            return false;
        }
    });
   
    $(":submit").click(function(event) {
        window.open("login-exitoso.html",'_self');
    })
});


