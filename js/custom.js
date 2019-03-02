
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
      // Check if class exists, then initialize WOW object.
      new WOW().init();
    }
  });
