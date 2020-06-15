/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-02 17:17:19
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-05-06 16:19:38
 */

var wWidth = null;
var wHeight = null;
 
$(function () {
  wWidth = $(window).width();
  wHeight = $(window).height();

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

  if (wWidth < 1200) {
    $(document).click(function (e) {
      var targetName = e.target.className;
      if (targetName === 'search-show-icon') {
        $(".search-bar").fadeIn();
      } else if (targetName === 'submit-icon' || targetName === 'search-input-text') {
        console.log('不做任何事');
      } else {
        $(".search-bar").fadeOut();
      }
    })
  }

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