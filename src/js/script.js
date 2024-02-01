
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
    slidesPerView: 1.55, // 一度に表示する枚数
    centeredSlides: true, // アクティブなスライドを中央にする
    spaceBetween: 16,
    autoplay: {
      delay: 2500,
    },

    breakpoints: {
      768: {
        slidesPerView: 3.25, // 一度に表示する枚数
        centeredSlides: false, // アクティブなスライドを中央にする
        spaceBetween: 32,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

   // アコーディオン
   $(function () {
    // 最初は閉じた状態に
    $(".faq__accordion .js-accordion + .faq__answer").hide();
    // タイトルをクリックすると
    $(".js-accordion").on("click", function () {
      // クリックした次の要素を開閉
      $(this).next(".faq__answer").slideToggle(300);
      // タイトルにopenクラスを付け外ししてプラスマイナスを変更
      $(this).toggleClass("open",300);
    });
  });

});
