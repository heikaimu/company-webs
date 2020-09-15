/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-09-09 18:10:03
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-09-15 12:53:21
 */
$(function () {

  // 导航
  var header = $("#header");
  var openMenu = header.find(".open-menu");
  var closeMenu = header.find(".close-menu");
  var navContent = header.find(".web-nav .content");
  var navBlank = header.find(".web-nav .blank");

  // 打开
  openMenu.click(function () {
    navBlank.fadeIn();
    navContent.addClass("active");
  })

  // 关闭
  navBlank.click(function () {
    navBlank.fadeOut();
    navContent.removeClass("active");
  })
  closeMenu.click(function () {
    navBlank.trigger("click");
  })

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
    slidesPerView: 6,
  });

})