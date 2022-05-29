var swiper = new Swiper(".mySwiper", {
  // Підключення пагінації
  pagination: {
    el: '.swiper-pagination',
    // Пагінація типу фракції ([поточний слайд/загальна кіль-ть] в цифрах)
    type: 'fraction',
  },

  // autoplay: {
  //   delay: 3000,
  // },
  
  // Змінити курсор при перетаскуванні слайду (на ПК)
  grabCursor: true,
  
  // Відступ між слайдами
  spaceBetween: 32,
  
  // Встановлюємо активний стартовий слайд
  initialSlide: 1,

  // Встановлюємо активний слайд по центру
  centeredSlides: true,

  // Зациклюємо слайдер
  // loop: true,

  // Встановлюємо швидкість перелистування слайдів
  speed: 500,

  effect: 'slides',

  breakpoints: {
    320: {
      // Кіль-то слайдів для показу
      slidesPerView: 1,
    },
    768: {
      // Кіль-то слайдів для показу
      slidesPerView: 3,
    },
  }
});