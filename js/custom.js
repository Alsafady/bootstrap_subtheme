
jQuery(document).ready(function () {


   //  Scroll to To
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 200) {
            jQuery("#backtotop").addClass("active");
        } else {
            jQuery("#backtotop").removeClass("active");
        }
    });

    jQuery('#backtotop').on("click", function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
   //  End Scroll to To


});




jQuery(document).ready(function($){
    if (typeof WOW === 'function') {



      var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
        }
      );
      wow.init();



    }
  });
