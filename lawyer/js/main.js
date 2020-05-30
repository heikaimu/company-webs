/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-02 17:17:19
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-05-06 16:19:38
 */
$(function () {

  // 导航
  $("#sub_nav").hover(function () {
    $(this).find(".sub-nav").fadeIn();
  }, function () {
    $(this).find(".sub-nav").hide();
  })

  // 手机导航
  $("#mobile_nav_switch").click(function () {
    if ($(this).hasClass("active")) {
      $(this).stop().removeClass("active");
      $("#mobile_nav").fadeOut();
    } else {
      $(this).addClass("active");
      $("#mobile_nav").stop().fadeIn();
    }
  })

  // 滚动的时候改变顶部透明度
  if (document.getElementById("banner")) {
    $(window).scroll(function (event) {
      var scrollDistance = $(window).scrollTop();
      var bannerHeight = $("#banner").height();
      if (scrollDistance > bannerHeight) {
        $("#header").css({ backgroundColor: 'rgba(6, 11, 43, 1)' })
      } else {
        $("#header").css({ backgroundColor: 'rgba(6, 11, 43, 0.7)' })
      }
    })
  } else {
    $("#header").css({ backgroundColor: 'rgba(6, 11, 43, 1)' })
  };

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