$(document).ready(function () {
    $('#primo-tab-content .tabs-slider .offers-holder').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // var swiper = new Swiper('.other-news-slider .swiper-container', {
    //     paginationClickable: true,
    //     spaceBetween: 0,
    //     speed: 1300,
    //     loop: true,
    //     autoplay: {
    //         delay: 5000,
    //     },
    //     navigation: {
    //         nextEl: '.other-news-slider .swiper-button-next',
    //         prevEl: '.other-news-slider .swiper-button-prev',
    //       },
    //     autoplayDisableOnInteraction: false,
    //     slidesPerView: 2,
    //     autoHeight: true,
    //     breakpoints: {
    //         540: {
    //           slidesPerView: 1,
    //         }
    //     }
    // });
    
    // var swiper = new Swiper('.blog-slider .swiper-container', {
    //     paginationClickable: true,
    //     spaceBetween: 0,
    //     speed: 1200,
    //     loop: true,
    //     autoplay: {
    //         delay: 5000,
    //     },
    //     navigation: {
    //         nextEl: '.blog-slider .swiper-button-next',
    //         prevEl: '.blog-slider .swiper-button-prev',
    //       },
    //     autoplayDisableOnInteraction: false,
    //     slidesPerView: 1,
    //     autoHeight: true,
    //     spaceBetween: 20
    // });
    // var swiper = new Swiper('.also-like-slider .swiper-container', {
    //     paginationClickable: true,
    //     speed: 1300,
    //     loop: true,
    //     autoplay: {
    //         delay: 5000,
    //     },
    //     navigation: {
    //         nextEl: '.also-like-slider .swiper-button-next',
    //         prevEl: '.also-like-slider .swiper-button-prev',
    //       },
    //     autoplayDisableOnInteraction: false,
    //     slidesPerView: 4,
    //     autoHeight: true,
    //     spaceBetween: 0,
    //     breakpoints: {
    //         540: {
    //           slidesPerView: 2,
    //           spaceBetween: 0
    //         }
    //     }
    // });
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
    $('.accordion-block').slideBlock({
        durationSlide:  300,
        mode: 'accordion',
        linkSlide:  'span.slide-link',
        slideBlock: 'div.slide-box',
        openClass: 'active',
    });
});

(function($) {
    $.fn.slideBlock = function(options){
        var options = jQuery.extend({
            linkSlide: 'span.slide-link',
            slideBlock: 'div.slide-box',
            openClass: 'active',
            durationSlide: 500,
            openComplete: false,
            closeComplete: false,
            mode:   false, //'accordion' - accordion mode or false - slide-block
            childSlide: 'accordion-child', //use only if mode: 'accordion'
        }, options);
        this.each(function() {
            if (options.mode === 'accordion') {
                var accordion = jQuery(this);
                var childSlide = accordion.find('> .' + options.childSlide, this);
                childSlide.each(function(){
                    var $this = jQuery(this);
                    if (!$this.is('.' + options.openClass)) {
                        $this.children(options.slideBlock).css('display','none');
                    }
                });
                childSlide.each(function(){
                    var $this = jQuery(this);
                    var link = jQuery(options.linkSlide, this).eq(0);
                    link.click(function(){
                        var that = jQuery(this);
                        if (that.closest(childSlide).is('.'+options.openClass)) {
                            that.closest(childSlide).removeClass(options.openClass);
                            that.closest(childSlide).find('> ' + options.slideBlock).slideUp(durationSlide, function(){if(typeof( options.closeComplete) == 'function') options.closeComplete()});
                        } else {
                            that.closest(accordion).find(childSlide).removeClass(options.openClass);
                            that.closest(accordion).find(childSlide).find('> ' + options.slideBlock).slideUp(durationSlide, function(){if(typeof( options.closeComplete) == 'function') options.closeComplete()});

                            that.parent(childSlide).parent().addClass(options.openClass);
                            that.parent(childSlide).parent().find('> ' + options.slideBlock).slideDown(durationSlide, function(){
                                jQuery('body,html').animate({scrollTop:that.offset().top},800);
                                if(typeof( options.openComplete) == 'function') options.openComplete(this);
                            });
                        }
                        return false;
                    });
                });
            } else {
                var $this = jQuery(this);
                var link = jQuery(options.linkSlide, this).eq(0);
                var slideBlock = jQuery(options.slideBlock, this).eq(0);
                var openClass = options.openClass;
                var durationSlide = options.durationSlide;

                if (!$this.is('.'+openClass)) {
                    $this.find(slideBlock).css('display','none');
                }
                link.click(function(){
                    if ($this.is('.'+ openClass)) {
                        $this.removeClass(openClass);
                        $this.find(slideBlock).slideUp(durationSlide, function(){if(typeof( options.closeComplete) == 'function') options.closeComplete()});
                    } else {
                        $this.addClass(openClass);
                        $this.find(slideBlock).slideDown(durationSlide, function(){if(typeof( options.openComplete) == 'function') options.openComplete(this)});
                    }
                    return false;
                });
            }
        });
        return this;
    };
})($);
