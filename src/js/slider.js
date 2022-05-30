$(document).ready(function () {
  var $status = $('.reviews__title');
  var $slickElement = $('.slider');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
  });

  $('.slider').slick({
    autoplay: true,
    centerMode: true,
    arrows: false,
    centerPadding: '0',
    slidesToShow: 2,
    variableWidth: true,
    dots: false,
    autoplaySpeed: 2000,
    speed: 500,
    easing: 'ease',
    asNavFor: '.swiper__comment',
   responsive: [
            {
              breakpoint: 767,
       settings: {
                variableWidth: false,
                slidesToShow: 1,
                centerMode: false,
                
                
              },
            },
          ],
  });
});

$('.swiper__comment').slick({
  // centerMode: true,
  arrows: false,
  centerPadding: '0',
  slidesToShow: 1,
  asNavFor: '.slider',
  // variableWidth: true,
  dots: false,
  asNavFor: '.slider',
  fade: true,
});