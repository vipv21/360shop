$(function(){
    
// banner图
  var mySwiper = new Swiper('.swiper-container',{
    loop: true,
	autoplay: 3000,
	pagination: '.swiper-pagination',
  });



// 智能头条
  var swiper = new Swiper('.gdfy',{
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        // paginationClickable: true,
        spaceBetween:1,
        mousewheelControl: true
    });

// 掌上抢
    var swipers = new Swiper('.zsq', {
        pagination: '.swiper-pagination',
        slidesPerView:3,
        paginationClickable: true,
        spaceBetween:0,
        slidesPerGroup : 3,
    });

})