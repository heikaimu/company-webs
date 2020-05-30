/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-02 13:55:25
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-05-29 16:25:52
 */
var indexBannerSwiper = new Swiper('.swiper-animation', {
  loop: true,
  speed: 500,
  effect: 'fade',
  autoplay: {
    delay: 5000
  },
  disableOnInteraction: false,
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'my-bullet',
    bulletActiveClass: 'my-bullet-active',
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
$("#index_banner_prev").click(function () {
  indexBannerSwiper.slidePrev();
})
$("#index_banner_next").click(function () {
  indexBannerSwiper.slideNext();
})

// 业务领域
var businessSwiper = new Swiper('.business-swiper', {
  speed: 500,
  autoplay: {
    delay: 5000
  },
  spaceBetween: 35,
  on: {
    init: function () {
      swiperAnimateCache(this); //隐藏动画元素 
      swiperAnimate(this); //初始化完成开始动画
      $('#business').find('.menu-item').eq(this.activeIndex).addClass('active').siblings('.menu-item').removeClass('active');
    },
    slideChangeTransitionEnd: function () {
      swiperAnimate(this);
      $('#business').find('.menu-item').eq(this.activeIndex).addClass('active').siblings('.menu-item').removeClass('active');
    },
  },
});
var businessBgSwiper = new Swiper('.business-bg-swiper', {
  effect: 'fade'
})
$('#business').find('.menu-item').each(function () {
  $(this).hover(function () {
    $(this).addClass('active').siblings('.menu-item').removeClass('active');
    businessSwiper.slideTo($(this).index());
    businessBgSwiper.slideTo($(this).index());
  })
})



// 品牌切换
var brandSwiper = new Swiper('.partner-swiper', {
  spaceBetween: 15,
  slidesPerView: 4,//一行显示3个
  slidesPerColumn: 2,//显示2行
  speed: 500,
  autoplay: {
    delay: 5000
  },
  disableOnInteraction: false,
  navigation: {
    nextEl: '#partner_prev',
    prevEl: '#partner_next',
  },
  pagination: {
    el: '#partner_pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
             ' / ' +
             '<span class="' + totalClass + '"></span>';
    },
},
});