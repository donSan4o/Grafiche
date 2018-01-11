$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        spaceBetween: 0,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 4000,
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