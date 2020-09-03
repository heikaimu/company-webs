/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-02 17:17:19
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-09-03 13:25:49
 */
$(function () {

  var nav = $(this).find(".web-nav");
  nav.lavaLamp({ fx: "swing", speed: 500 });

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