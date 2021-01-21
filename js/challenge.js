$(document).ready(function(){

    $('#menu').removeClass("transicion");

    $('#botonPrincipal').click(function(){

        $('#menu').removeClass("transicion");
        $('#menu').css("display","block");
        $('.PaginaPrincipal').css("opacity", "0.5");

        /*Clic fuera del menu*/ 
        $('#sobrante').click(function() {
                $('#menu').addClass("transicion");
                $('.PaginaPrincipal').css("opacity", "");
        });
        
        /*Tecla ESC*/ 
        $(document).keyup(function(e) {
            if ( e.keyCode === 27 )
            {
                $('#menu').addClass("transicion");
                $('.PaginaPrincipal').css("opacity", "");
            }      
        });

        /*Clic en el boton del menu*/ 
        $('#botonMenu').click(function(){
                $('#menu').addClass("transicion");
                $('.PaginaPrincipal').css("opacity", "");
        });
 
    }); 

});



