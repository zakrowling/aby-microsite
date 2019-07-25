$(document).ready(function() {
    
    // Initialise pagepiling
    $('#pagepiling').pagepiling({
        direction: 'vertical',
        verticalCentered: true,
        scrollingSpeed: 600,
        easing: 'swing',
        navigation: {
                'textColor': '#ffffff',
                'bulletsColor': '#ffffff',
                'position': 'right'
        },
    });

    $('.envelope').click(function() {
        $(this).parent('.container').addClass('is-open');
        setTimeout(function() {
            $('.is-open .postcard').addClass('is-displayed');
        },2000);
    })
});