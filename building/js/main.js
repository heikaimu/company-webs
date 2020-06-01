/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-02 17:17:19
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-05-29 13:59:03
 */

var wWidth = null;
var wHeight = null;

$(function () {
  wWidth = $(window).width();
  wHeight = $(window).height();

  // wow.js
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 50,
    mobile: true,
    live: true
  });
  wow.init();

  // 头部
  setHeaderBg();
  $(".web-header").each(function () {
    var header = $(this);
    var search = $(this).find(".search-bar");
    var searchOpenSwitch = $(this).find(".search-bar-show");
    var searchCloseSwitch = $(this).find(".search-bar-close");
    var navSwitch = $(this).find(".web-nav-switch");
    var nav = $(this).find(".web-nav");

    nav.lavaLamp({ fx: "swing", speed: 500 });

    searchOpenSwitch.click(function () {
      search.slideDown();
    })

    searchCloseSwitch.click(function () {
      search.slideUp();
    })

    header.mouseleave(function () {
      search.slideUp();
    })

    navSwitch.click(function() {
      if (navSwitch.hasClass("active")) {
        navSwitch.stop().removeClass("active");
        nav.slideUp();
        $("html").css({"overflow-y": "auto"});
      } else {
        navSwitch.addClass("active");
        nav.stop().slideDown();
        $("html").css({"overflow-y": "hidden"});
      }
    })
  })

})

$(window).scroll(function () {
  setHeaderBg();
});


// 头部背景色
function setHeaderBg() {
  if (wWidth) {
    var wScrollDis = Math.abs($(window).scrollTop());
    var percent = Math.min(1, wScrollDis / wHeight);
    $(".web-header").css({ "background-color": "rgba(255,255,255," + percent + ")" });
    $(".web-header").css({ "color": percent < 0.6 ? "#ffffff" : "#333" });
    $(".web-header").css({ "border-bottom": percent === 1 ? "1px solid #e7e7e7" : "none" });
  }
}