/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-02 17:17:19
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-09-04 13:17:47
 */
$(function () {

  // 导航
  var nav = $(this).find(".web-nav");
  nav.lavaLamp({ fx: "swing", speed: 500 });

  // 轮播图
  new Swiper("#banner", {
    loop: true,
    speed: 500,
    effect: 'fade',
    autoplay: {
      delay: 5000
    },
    disableOnInteraction: false,
    pagination: {
      el: $("#banner .swiper-pagination"),
      clickable: true
    },
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      }
    }
  });

  // 内部导航
  new Swiper("#inline_nav", {
    slidesPerView: 9,
  });

})


// 跳转到页面某个位置
function gotoPage(domId, offsetDistance) {
  offsetDistance = offsetDistance ? offsetDistance : 0;
  var scrollDistance = '0px';
  if (domId) {
    scrollDistance = $("#" + domId).offset().top + offsetDistance + 'px';
  };
  
  $("html,body").animate({
    scrollTop: scrollDistance
  }, 500);
}