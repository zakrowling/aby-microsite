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

    var envelopeDelay = 2000;

    // Automatically open envelope
    setInterval(function() {
        $('.section.active .envelope').click();
    },envelopeDelay);

    // Open envelope on click
    $('.envelope').click(function() {
        $(this).parent('.container').addClass('is-open');
        setTimeout(function() {
            $('.is-open .postcard').addClass('is-displayed');
        },envelopeDelay);
    });
});