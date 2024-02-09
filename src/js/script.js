
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // ドロワーメニュー
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass("is-active")) {
      $(".js-hamburger").removeClass('is-active');
      $("body").removeClass('is-active');
      $(".js-sp-nav").slideUp(400); // 上から降りてくるアニメーション
    } else {
      $(".js-hamburger").addClass('is-active');
      $("body").addClass('is-active');
      $(".js-sp-nav").slideDown(400); // 上から降りてくるアニメーション
    }
  });

  // ページトップボタン
  $(function () {
    const pageTop = $("#to-top");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
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
      slidesPerView: "auto",
      autoplay: {
          delay: 0,
      },
      speed: 3000,

      spaceBetween: 10,
      breakpoints: {
        768: {
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

  // モーダルウィンドウ
  $(function () {
    $(".js-modal-open").on("click", function () {
        var modalId = $(this).data("id"); // クリックされた要素からdata-id属性の値を取得
        $("#" + modalId).fadeIn(); // 対応するモーダルを表示
        $('html, body').css('overflow', 'hidden');
        return false; // デフォルトのリンクの動作をキャンセル
    });
    
    $(".js-modal-close").on("click", function () {
        $(".modal").fadeOut(); // すべてのモーダルを非表示
        $('html, body').removeAttr('style');
        return false; // デフォルトのリンクの動作をキャンセル
    });
});

// お問い合わせフォームエラーメッセージ
$(document).ready(function(){
  $("form").submit(function(event) {
    // エラーメッセージをクリアする
    $(".error-message").remove();
    // エラースタイルを削除する
    $("input, select, textarea").removeClass("is-error"); // .is-errorクラスを削除する
    
    // 必須フィールドをチェックする
    $("input[required], select[required], textarea[required]").each(function(){
      if ($(this).val() === '') {
        event.preventDefault(); // フォーム送信を中止する
        $(this).after('<div class="error-message">このフィールドは必須です。</div>');
        $(this).addClass("is-error"); // .is-errorクラスを追加する
      }
    });
    
    // プライバシーチェックボックスをチェックする
    if (!$("input[name='privacy']").is(':checked')) {
      event.preventDefault(); // フォーム送信を中止する
      $(".form__checkbox").append('<div class="error-message">※プライバシーポリシーに同意する必要があります。</div>');
      $("input[name='privacy']").addClass("is-error"); // .is-errorクラスを追加する
    }
  });
});


});
