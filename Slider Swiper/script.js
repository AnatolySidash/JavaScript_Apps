new Swiper('.image-slider', {
   // arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   // pagination
   pagination: {
      el: '.swiper-pagination',
      // bullets
      // clickable: true,
      // dynamicBullets: true,
      type: 'fraction',

   },

   autoHeight: true,
   slidesPerView: 1,
   spaceBetween: 30,
   centeredSlides: true,
   loop: true,
   freeMode: true,
   effect: 'flip',
   flipEffect: {
      slideShadows: true,
      limitRotation: true
   },
});