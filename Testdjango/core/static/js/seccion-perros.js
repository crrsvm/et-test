// inicio

$(document).ready(function() {

  

    createSelet('https://api.thedogapi.com/v1/breeds');
    //generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Cambiar Imagen");
});
 
$(document).on('change','#raza', function(event){
    event.stopImmediatePropagation();
    var nroTotalImagenes = 4;
    var nroColumnasPorFila = 3;
    var selectorTablaHTML = "#lista-perros"
    //var url = "https://api.thecatapi.com/v1/images/search?limit="+nroTotalImagenes
    var url = "https://api.thedogapi.com/v1/images/search?breed_ids="+ $(this).val() +"&limit="+nroTotalImagenes;
    $("#lista-perros").html("");
    generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Ver Detalle");
 
});

function getBtnActionURL() {
    return "https://api.thedogapi.com/v1/images/search?limit=1";
}
function createSelet(ruta) {
    var options= '<option value="" >-- Seleccione una raza --</option>';
    $.get(ruta, function(response){
        
        //iterar por el único elemento que debería devolver la respuesta
        $.each(response, function(index, element){
            options += '<option value="' +element.id + '">' + element.name + '</option>';
 
            //cuando la imagen ya se encuentra descargada
                 
        });
        $('#raza').html(options);
    });
    
}

function buscarRaza(raza) {
    var ruta = "https://api.thedogapi.com/v1/breeds/search?q=" +raza;
    console.log("ruta:"+ruta);
    $.get(ruta, function(response){
        
        //iterar por el único elemento que debería devolver la respuesta
        $.each(response, function(index, element){
            //options += '<option value="' +element.id + '">' + element.name + '</option>';
            console.log("response:"+response);
            console.log("Nombre:"+element.name);
            console.log("PesoPromedio:"+element.weight.metric);
            console.log("EstaturaPromedio:"+element.height.metric);
            console.log("PromedioVida:"+element.life_span);
            //cuando la imagen ya se encuentra descargada
                 
        });
        //$('#raza').html(options);
    });
    
}