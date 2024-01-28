
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // ドロワーメニュー
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass("is-active")) {
      $(".js-hamburger").removeClass('is-active');
      $("body").removeClass('is-active');
      $(".js-sp-nav").fadeOut(300);
    } else {
      $(".js-hamburger").addClass('is-active');
      $("body").addClass('is-active');
      $(".js-sp-nav").fadeIn(300);
    }
  });

  // ページトップボタン
  $(function () {
    const pageTop = $("#to-top");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    pageTop.click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
    // about__swiper
    const swiper = new Swiper('.about__swiper', {
      loop: true,
      loopedSlides: 10,
      autoplay: {
          delay: 0,
      },
      speed: 3000,
      width: 100,

      spaceBetween: 10,
      breakpoints: {
        768: {
          width: 200,
          spaceBetween: 20,
        },
      },
    })
  });

  var swiper = new Swiper(".recommended-spots__swiper", {
    loop: true,
    loopedSlides: 7,
    width: 240,
    spaceBetween: 16,
    autoplay: {
      delay: 3000,
    },

    breakpoints: {
      768: {
        width: 344,
        spaceBetween: 32,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
