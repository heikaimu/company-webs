/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-05-02 13:55:25
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2020-05-06 16:04:54
 */
// PC团队
var teamSwiper = new Swiper('.team-swiper', {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000
  },
  disableOnInteraction: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'my-bullet',
    bulletActiveClass: 'my-bullet-active',
    clickable: true
  },
});

// PC我们的实力
var powerSwiper = new Swiper('.power-swiper', {
  navigation: {
    nextEl: '#power_prev',
    prevEl: '#power_next',
  },
  pagination: {
    el: '#power_pagination',
    clickable: true
  },
});

// PC服务质量
var qualificationSwiper = new Swiper('.qualification-swiper', {
  slidesPerView: 4,
  navigation: {
    nextEl: '#qualification_prev',
    prevEl: '#qualification_next',
  },
});

// 移动端服务质量
var mobileQualificationSwiper = new Swiper('#mobile_qualification_swiper', {
  slidesPerView: 3,
  spaceBetween: 15,
  pagination: {
    el: '#mobile_qualification_pagination',
  }
});