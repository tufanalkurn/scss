new WOW().init();

$(function(){
    var shrinkHeader = 1;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
             $('header#header').addClass('fixed');
          }
          else {
              $('header#header').removeClass('fixed');
          }
    });
    function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
      }
});

$(function() {  
    // Custom Easing
    //jQuery.scrollSpeed(100, 800);
});

