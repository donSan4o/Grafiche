$(document).ready(function () {
    var swiper = new Swiper('.list-slider .swiper-container', {
        paginationClickable: true,
        spaceBetween: 0,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.list-slider .swiper-button-next',
            prevEl: '.list-slider .swiper-button-prev',
          },
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 20
    });
    var swiper = new Swiper('.other-news-slider .swiper-container', {
        paginationClickable: true,
        spaceBetween: 0,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.other-news-slider .swiper-button-next',
            prevEl: '.other-news-slider .swiper-button-prev',
          },
        autoplayDisableOnInteraction: false,
        slidesPerView: 2,
        autoHeight: true,
        breakpoints: {
            540: {
              slidesPerView: 1,
            }
        }
    });
    
    var swiper = new Swiper('.blog-slider .swiper-container', {
        paginationClickable: true,
        spaceBetween: 0,
        speed: 1200,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.blog-slider .swiper-button-next',
            prevEl: '.blog-slider .swiper-button-prev',
          },
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 20
    });
    var swiper = new Swiper('.also-like-slider .swiper-container', {
        paginationClickable: true,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.also-like-slider .swiper-button-next',
            prevEl: '.also-like-slider .swiper-button-prev',
          },
        autoplayDisableOnInteraction: false,
        slidesPerView: 4,
        autoHeight: true,
        spaceBetween: 0,
        breakpoints: {
            540: {
              slidesPerView: 2,
              spaceBetween: 0
            }
        }

    });
    $('.btn-carello').click(function () {
        $('.basket').show();
        $('.fader').show();
    });
    $('.fader').click(function () {
        $(this).hide();
        $('.basket').hide();
    });
    $('.comment-box h3').click(function () {
        $('.comment-form').slideToggle();
    })
})