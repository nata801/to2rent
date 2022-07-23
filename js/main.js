$(function(){
    $('.slider').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prev arrow"></button>',
        fade: true, /*картинка меняется не выезжая, а всплывая*/
        responsive: [
            {
              breakpoint: 441,  /*убрали стрелки на картинке*/
              settings: {
                arrows:false
              }
            },
          ]
    });
});




