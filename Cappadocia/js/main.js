$(function(){
  $('.fairy-taily__slider').slick({ 
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/sliders/back.svg" alt="back"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/sliders/next.svg" alt="next"></button>',
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 601,
        settings: {
          arrows: false

        }
      },

    ]
  });
  $('.our-trip__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/sliders/back.svg" alt="back"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/sliders/next.svg" alt="next"></button>',
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 601,
        settings: {
          arrows: false
          
        }
      },
      
    ]
  });
});