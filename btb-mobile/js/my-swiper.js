/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-02 13:55:25
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-06-11 20:14:36
 */
var homeSwiper = new Swiper('.home-swiper', {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000
  },
  spaceBetween: 15,
  disableOnInteraction: false,
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'my-bullet',
    bulletActiveClass: 'my-bullet-active',
    clickable: true
  },
});

// 品牌切换
var brandSwiper = new Swiper('.brand-swiper', {
  spaceBetween: 15,
  speed: 500,
  autoplay: {
    delay: 5000
  },
  disableOnInteraction: false,
  on: {
    init: function () {
      //Swiper初始化了
      $('#brand_titles').find('.tab-item').eq(this.activeIndex).addClass('active').siblings('.tab-item').removeClass('active');
    },
    slideChangeTransitionEnd: function () {
      $('#brand_titles').find('.tab-item').eq(this.activeIndex).addClass('active').siblings('.tab-item').removeClass('active');
    },
  },
});
$('#brand_titles').find('.tab-item').each(function() {
  $(this).click(function() {
    brandSwiper.slideTo($(this).index());
  })
})

var homeSwiper = new Swiper('.web-nav-swiper', {
  slidesPerView : '4',
  spaceBetween : 10,
});