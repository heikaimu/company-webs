/*
 * @Description: 图片视频预览
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-11-20 16:38:28
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-11-20 17:04:14
 */
$(function () {

  // 创建容器
  const dom = '<div class="lyw-viewer" id="picture_view_wrapper"><div class="lyw-viewer__content"></div><span class="icon lyw-viewer__closeer"><svg t="1605862846443" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2748" width="32" height="32"><path d="M591.53 511.744l416.342-416.768a54.613 54.613 0 0 0 0-76.8l-2.304-2.304a54.443 54.443 0 0 0-76.63 0L512.513 433.237 96.256 15.957a54.443 54.443 0 0 0-76.63 0l-2.389 2.134a53.59 53.59 0 0 0 0 76.8l416.427 416.768L17.237 928.512a54.613 54.613 0 0 0 0 76.8l2.304 2.219a54.443 54.443 0 0 0 76.63 0l416.426-416.854 416.342 416.854a54.443 54.443 0 0 0 76.629 0l2.304-2.304a54.613 54.613 0 0 0 0-76.8L591.445 511.659z" p-id="2749" fill="#ffffff"></path></svg></span></div>';
  $('body').append(dom);
  $(".lyw-viewer").css({
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1000000,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'none',
  })
  $(".lyw-viewer__content").css({
    position: 'absolute',
    left: '100px',
    right: '100px',
    top: '100px',
    bottom: '100px',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })
  $(".lyw-viewer__closeer").css({
    display: 'block',
    padding: '20px',
    position: 'absolute',
    right: '10px',
    top: '10px',
    zIndex: 20,
    fontSize: '40px',
    color: '#fff',
    cursor: 'pointer',
  }).click(function() {
    $(".lyw-viewer").fadeOut().find(".lyw-viewer__content").empty();
  })

  // 绑定事件
  $(".r-view").each(function () {
    var type = $(this).attr("_type");
    var src = $(this).attr("_src");
    $(this).click(function () {
      if (type === 'picture') {
        $("#picture_view_wrapper").fadeIn().find(".lyw-viewer__content").append('<img style="max-width:100%;max-height:100%" src="' + src + '"/>');
      } else if (type === 'video') {
        $("#picture_view_wrapper").fadeIn().find(".lyw-viewer__content").append('<video style="width:100%;height:100%" src="' + src + '" controls="controls">您的浏览器不支持 video 标签。</video>');
      }
    })
  })
})