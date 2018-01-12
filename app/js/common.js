$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        spaceBetween: 0,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 20
    });
    var swiper = new Swiper('.also-like-slider .swiper-container', {
        paginationClickable: true,
        spaceBetween: 0,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 20
    });
})