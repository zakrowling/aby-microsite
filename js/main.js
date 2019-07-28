$(document).ready(function() {
    
    var envelopeDelay = 2000;

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
        onLeave: function(){
            openEnvelope(envelopeDelay);
        },
    });

    // Open envelope on click
    $('.envelope').click(function(){
        $(this).parent('.container').addClass('is-open');
        setTimeout(function() {
            $('.is-open .postcard').addClass('is-displayed');
        },envelopeDelay);
    });
});

function openEnvelope(envelopeDelay){
    setTimeout(function() {
        $('.section.active .envelope').click();
    },envelopeDelay);
}