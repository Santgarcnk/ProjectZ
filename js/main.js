$(document).ready(function(){
// cambio de header
    $(window).on('scroll', function(){
        let posicion = $('#pr').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $('header').removeClass('transparente');
        }else{
            $('header').addClass('transparente');
        }
    })

// Menu lateral
    $('#barras').click(function(){
        $('#barras').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })

// scroll flecha
    $('a').on('click', function(){
        if (this.hash !== ''){
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })


})