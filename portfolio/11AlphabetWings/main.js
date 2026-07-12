var isMobile = window.innerWidth <= 768;

$(document).ready(function(){

    $('.resize').hide();
    $('h4').hide();
    $('.shoe').hide();

    $('#button1').on('click', function(){

        if (isMobile) {
            $('#button1').hide();
        } else {
            $('#box1').remove();
        }

        $('.resize').show();
        $('h4').show();

    });

    $('#button2').on('click', function(){

        $('h4').remove();
        $('.shoe').show();
        $('.shoe').css("margin-right","5%");

    });

});
