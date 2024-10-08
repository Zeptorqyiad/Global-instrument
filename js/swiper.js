let swiperAbout = new Swiper('.swiper-about', {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 10,
   pagination: {
      el: '.swiper-pagination',
   },
   breakpoints: {
      969: {
         slidesPerView: 3,
      },
      637: {
         slidesPerView: 2,
      },
      500: {
         slidesPerView: 2,
      },
      0: {
         slidesPerView: 1,
      },
   },
})

let swiperExamples = new Swiper('.swiper-examples', {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 0,
   breakpoints: {
      969: {
         slidesPerView: 3,
      },
      637: {
         slidesPerView: 2,
      },
      500: {
         slidesPerView: 2,
      },
      0: {
         slidesPerView: 1,
      },
   },
})

let swiperIncisors = new Swiper('.swiper-incisors', {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 10,
   pagination: {
      el: '.incisors-pagination',
   },
   breakpoints: {
      969: {
         slidesPerView: 3,
      },
      637: {
         slidesPerView: 2,
      },
      500: {
         slidesPerView: 2,
      },
      0: {
         slidesPerView: 1,
      },
   },
})

let swiperPopup = new Swiper('.swiper-popup', {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 0,
   pagination: {
      el: '.popup-pagination',
   },
})
