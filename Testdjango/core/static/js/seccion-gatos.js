
$(document).ready(function() {

  

    createSelet('https://api.thecatapi.com/v1/breeds');
    //generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Cambiar Imagen");
});
 
$(document).on('change','#raza', function(event){
    event.stopImmediatePropagation();
    var nroTotalImagenes = 4;
    var nroColumnasPorFila = 3;
    var selectorTablaHTML = "#lista-gatos"
    //var url = "https://api.thecatapi.com/v1/images/search?limit="+nroTotalImagenes
    var url = "https://api.thecatapi.com/v1/images/search?breed_ids="+ $(this).val() +"&limit="+nroTotalImagenes;
    $("#lista-gatos").html("");
    generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Ver Detalle");
 
});

function getBtnActionURL() {
    return "https://api.thecatapi.com/v1/images/search?limit=1";
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