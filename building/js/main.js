/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-02 17:17:19
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-05-29 13:59:03
 */

// 滚动数字
var isDone = false;
var wWidth = null;
var wHeight = null;

$(function () {
  wWidth = $(window).width();
  wHeight = $(window).height();

  $("#mobile_nav_switch").click(function () {
    if ($(this).hasClass("active")) {
      $(this).stop().removeClass("active");
      $("#mobile_nav").fadeOut();
    } else {
      $(this).addClass("active");
      $("#mobile_nav").stop().fadeIn();
    }
  })

  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 50,
    mobile: true,
    live: true
  });
  wow.init();

  $(document).click(function (e) {
    var targetName = e.target.className;
    if (targetName === 'show-icon') {
      $(".show-icon").hide();
      $(".search-form").fadeIn();
    } else if (targetName === 'submit-icon' || targetName === 'search-input-text') {
      console.log('不做任何事');
    } else {
      $(".show-icon").fadeIn();
      $(".search-form").hide();
    }
  })

  $("#down_scroll_btn").click(function () {
    gotoPage("main");
  })

  runNumber();
  setHeaderBg();

})

$(window).scroll(function () {
  runNumber();
  setHeaderBg();
});

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

function runNumber() {
  if (Math.abs($(window).scrollTop()) > $('#introduce').offset().top) {
    if (!isDone) {
      $(".run-num").each(function () {
        $(this).runNumber();
      })
      isDone = true;
    }
  }
}

function setHeaderBg() {
  if (wWidth) {
    var wScrollDis = Math.abs($(window).scrollTop());
    var opicaty = Math.min(1, wScrollDis / wHeight);
    $("#header").css({ "background-color": "rgba(0,0,0," + opicaty + ")" });
    if (wWidth > 1200) {
      if (opicaty === 1) {
        $("#header").css({ 'padding': '20px' });
      } else {
        $("#header").css({ 'padding': '50px' });
      }
    }

  }

}