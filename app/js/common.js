$(function() {

    // menu fixed on scroll
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        if ( scrolled >= 150  ) {
            $(".header-top-wrap").addClass("fixed");

        } else {
            $(".header-top-wrap").removeClass("fixed");
        }
    });

});
