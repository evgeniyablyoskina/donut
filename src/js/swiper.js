var swiper = new Swiper(".mySwiper", {
  // Підключення пагінації
  pagination: {
    el: '.swiper-pagination',
    // Пагінація типу фракції ([поточний слайд/загальна кіль-ть] в цифрах)
    type: 'fraction',
  },

  autoplay: {
    delay: 3000,
  },
  
  // Змінити курсор при перетаскуванні слайду (на ПК)
  grabCursor: true,
  
  // Кіль-то слайдів для показу
  slidesPerView: 1,
  
  // Відступ між слайдами
  spaceBetween: 32,
  
  // Встановлюємо активний стартовий слайд
  initialSlide: 1,

  // Зациклюємо слайдер
  loop: true,

  // Встановлюємо швидкість перелистування слайдів
  speed: 500,

  // Еффект переключення слайдів
  effect: 'coverflow',
  coverflowEffect: {
    slideShadows: false,
    rotate: 30,
    modifier: 2,
  },

  // Налаштування слайдера під адаптив
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  },
});