$(document).ready(function() {
    // $('.tooltip-btn').hover(function() {
    //     $('.tooltip-header').toggleClass('block-show');
    // });

    new WOW().init();

    $(function() {
        $('.burger').click(function() {
            $('.main-nav ul').slideToggle();
        });
        $(window).resize(function() {
            var w = $(window).width();
            if (w >= 768) {
                $('.main-nav ul').removeAttr('style');
            }
        });
    });

    $('.main-slider').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 5,
        nav: true,
        autoplay: true,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        smartSpeed: 1000,
        responsive: {
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });

    $('.icon-slider').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        margin: 55,
        nav: true,
        autoplay: false,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        smartSpeed: 1000,
        responsive: {
            500: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 8
            }
        }
    });

    $('.ether-slider').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        margin: 45,
        nav: true,
        autoplay: false,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        smartSpeed: 1000,
        responsive: {
            1270: {
                items: 2
            }
        }
    });

    $('.mayor-kluv_slider').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        smartSpeed: 2000
    });

    $('.main-slider_item').hover(function() {
        $(this).find('.main-slider_hover').stop().slideToggle();
    });

    $('.tooltip-btn').mouseenter(function(){
        $(this).removeClass('pulsing');
    });

    $('.tooltip-btn').mouseleave(function(){
        $(this).addClass('pulsing');
    });










});
