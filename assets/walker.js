$(function() {
    var runner = $(".runner");

    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            runner.addClass("walking walking-left");
            console.log('Scrolling up');
        }
        else {
            runner.addClass("walking").removeClass("walking-left");
            console.log('Scrolling down');
        }
        clearTimeout( $.data( this, "scrollCheck" ) );
        $.data( this, "scrollCheck", setTimeout(function() {
            runner.removeClass("walking");            
            console.log('Scroll stopped');
        }, 1000) );
    });
});