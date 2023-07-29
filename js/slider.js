var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 'auto',
  breakpoints: {
    768: {
      spaceBetween: 40,
    },

    375: {
      spaceBetween: 45,
    },
  },
});
