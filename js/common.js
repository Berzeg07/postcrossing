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

    $('.header-login_img').hover(function() {
        $('.header-login_nickname a:first-child').toggleClass('active');
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

    $('.mayor-kluv .tooltip-btn').mouseenter(function() {
        $(this).removeClass('pulsing');
    });

    $('.mayor-kluv .tooltip-btn').mouseleave(function() {
        $(this).addClass('pulsing');
    });


    $('.postcard-info_tabs a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab-table').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.postcard-info_tabs a:first').click();

    $('.choose-social_inst').click(function() {
        var divInner = $('.cabinet-middle_social__img');
        $(divInner).html('');
        $(divInner).html('<img src="img/inst-big.png">');
    });

    $('.choose-social_vk').click(function() {
        var divInner = $('.cabinet-middle_social__img');
        $(divInner).html('');
        $(divInner).html('<img src="img/vk-big.png">');
    });

    $('.delete-table').click(function() {
        $(this).parents('.postcard-table_main').remove();
    });

    $('.sortthemes_btn').click(function() {
        $('.sortthemes_btn').removeClass('active');
        $(this).addClass('active');
    });

    var itemprice = $('.product-main_price span').text(),
        priceInner = $('.product-main_price span');

    $(".product-counter  .switch-button").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);

        var quantity = $('#quantity').val(),
            total = itemprice * quantity;
        $(priceInner).html(total);
    });

    if ($("div").is(".basket-total_box")) {
        totalBasketPrice();
    }

    function totalBasketPrice() {
        var elements = document.getElementsByClassName('basket-price'),
            contents = [],
            total = 0;
        for (var i = 0; i < elements.length; i++) {
            contents[i] = +elements[i].innerText;
            total = total + contents[i];
        }
        $('.basket-total_inner').html(total);
    }

    $(".product-cat_counter  .switch-button").on("click", function() {
        var $button = $(this),
            productCatPrice = $button.parents('.product-cat_count').find('.current-price').val(),
            productCatPriceInner = $button.parents('.product-cat_count').find('.product-cat_price_main span'),
            oldValue = $button.parent().find("input").val();

        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);

        var quantity = $button.parent().find('.quantity').val(),
            total = productCatPrice * quantity;

        $(productCatPriceInner).html(total + ' ');

        if ($("div").is(".basket-total_box")) {
            totalBasketPrice();
        }
    });

    $('.delete-basket_product').click(function(){
        $(this).parents('li').remove();
        totalBasketPrice();
    });

    if ($("div").is("#map-profile")) {
        ymaps.ready(init);

        function init() {
            var center = [55.59113656911934, 37.88662649999996];
            var myMap = new ymaps.Map('map-profile', {
                center: center,
                controls: [],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'

            });

            // myMap.behaviors.disable('scrollZoom');

            var myPlacemark = new ymaps.Placemark(center, {
                // Свойства.
                // Содержимое иконки, балуна и хинта.
                balloonContent: 'улица Ивана Франко, 4к4',
                hintContent: 'улица Ивана Франко, 4к4'
            }, {
                // Опции.
                iconLayout: 'default#image',
                iconImageHref: 'img/map-ic.png',
                iconImageSize: [42, 42]
                // preset: 'twirl#violetIcon'
            });

            myMap.geoObjects.add(myPlacemark);
        }
    }

    $('.profile-social_link').hover(function() {
        $('.profile-social span').toggleClass('active');
    });

    $('.profile-name').hover(function() {
        $('.profile-name_hover').toggleClass('hide');
        $('.profile-name_inner').toggleClass('active');
    });

    $('.profile-article_show').click(function() {
        if ($('.profile-article_inner').hasClass('active')) {
            $('.profile-article_show').html('Развернуть');
        } else {
            $('.profile-article_show').html('Свернуть');
        }
        $('.profile-article_inner').toggleClass('active');
    });

    // custom select ===========================================================
    $('.news-sort_select').selectmenu();

});
