/*
 * @Description: 数字滚动到指定的值
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-29 14:00:50
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-05-29 14:25:11
 */ 
(function($) {
  $.fn.runNumber = function(duration) {
    duration = duration ? duration : 2000;
    var step = 100;
    var el = $(this);
    var runNum = 0;
    var num = el.text();
    num = Number(num);
    var stepTime = duration / Math.floor(num / 100);

    el.text(0);

    if (isNaN(num)) {
      return;
    }

    const timer = setInterval(function() {
      runNum += step;
      if (runNum >= num) {
        runNum = num;
        clearInterval(timer);
      }
      el.text(runNum);
    }, stepTime);
  }
}(jQuery));