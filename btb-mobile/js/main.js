/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-02 17:17:19
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-06-12 16:22:19
 */
$(function () {
  // 手机导航
  $("#full_nav_switch").click(function () {
    if ($(this).hasClass("active")) {
      $(this).stop().removeClass("active");
      $("#full_nav").fadeOut();
    } else {
      $(this).addClass("active");
      $("#full_nav").stop().fadeIn();
    }
  })

  new Swiper('.web-nav-swiper', {
    slidesPerView: '4',
    spaceBetween: 10,
  });

  $(document).click(function (e) {
    var targetName = e.target.className;
    if (targetName === 'icon-search') {
      $(".search-bar .content").fadeIn();
    } else if (targetName === 'submit-icon' || targetName === 'search-input') {
      console.log('不做任何事');
    } else {
      $(".search-bar .content").fadeOut();
    }
  })

  // 二级导航
  new Swiper('.mobile-slide-nav-swiper', {
    slidesPerView: '4',
    spaceBetween: 10,
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