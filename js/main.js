(function ($) {
    "use strict";
  /*=================================
       Trending Stories Swiper
   ==================================*/
   $(document).ready(function () {
    var swiper = new Swiper('.trending-stories-swiper', {
      slidesPerView: 4,
      grabCursor: true,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 190,
        },
      },
    });
  });

})(jQuery);