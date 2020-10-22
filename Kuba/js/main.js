$(function(){

  $('.photo-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/left-Shape.svg" alt=""></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="images/right-Shape.svg" alt=""></button>'
  });

  $('.menu-btn').on('click', function(){
    $('.menu-list').slideToggle();
  });
});