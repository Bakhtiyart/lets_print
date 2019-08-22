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

     // anchors
    $('a[href^="#"]').on("click", function (e) {
        var anchor = $(this);
        if(!anchor.hasClass('btn')){
            $('a[href^="#"]').parent().removeClass('menu__item--active');
            anchor.parent().addClass('menu__item--active');
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 80
            }, 777);
            e.preventDefault();
            return false;
        }

    });

    // mobile menu
    $('.burger-menu').click(function () {
        $('.header-top').toggleClass('header-menu--show');
        $(this).toggleClass('burger-menu--open');
    });

});
