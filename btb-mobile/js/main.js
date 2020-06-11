/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-02 17:17:19
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-06-11 20:27:33
 */
$(function () {  
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