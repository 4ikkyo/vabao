if ($(window).width() < 992) {
	$(".selection__price").addClass("invisible");
  } else {
	$(".selection__price").removeClass("invisible");
}

$(window).on("resize", function () {
    if ($(window).width() < 992) {
      $(".selection__price").addClass("invisible");
    } else {
      $(".selection__price").removeClass("invisible");
    }
});

$(window).load(function () {
//   var changeSelect = function () {
//     $(".sort select").on({
//       click: function () {
//         $(".sort select").toggleClass("change_arrow");
//       },

//       blur: function () {
//         $(".sort select").removeClass("change_arrow");
//       },
//       keyup: function (e) {
//         if (e.keyCode == 27) $(".sort select").addClass("change_arrow");
//       },
//     });
//   };

  var addBell = function () {
    $(".menu-bell-add").on("click", function () {
      $(".header__additional-menu-bell").toggleClass("visible");
      $(".header__additional-menu-bell").toggleClass("invisible");
    });
  };

  var addMenu = function () {
    $(".menu-burger-add").on("click", function () {
      $(".header__additional-menu").toggleClass("visible");
      $(".header__additional-menu").toggleClass("invisible");
    });
  };

  var addProfile = function () {
    $(".header__account__logo_user")
      .add(".header__background")
      .on("click", function () {
        $(".header__left-additional-menu").toggleClass("visible");
        $(".header__left-additional-menu").toggleClass("invisible");
        if ($(".header__left-additional-menu").hasClass("visible")) {
          blockScrollon992();
        } else {
          $("html").removeAttr("style");
        }
      });
  };

  var allMenu = function () {
    $(".menu-burger-smart").on("click", function () {
      $(".header__menu-burger").toggleClass("header__menu-burger-active");
      $(".smart-menu__wrapper").toggleClass("smart-menu__wrapper-visible");
      $(".header__smart-menu_lining").toggleClass(
        "header__smart-menu_lining-visible"
      );

      $(".header__right-additional-menu").toggleClass("visible");
      $(".header__right-additional-menu").toggleClass("invisible");
    });
    $(".header__smart-menu_lining").on("click", function () {
      $(".smart-menu__wrapper").removeClass("smart-menu__wrapper-visible");
      $(".header__menu-bell").toggleClass("header__menu-bell-active");
      $(".header__smart-menu_lining").removeClass(
        "header__smart-menu_lining-visible"
      );
    });
  };

  var obn = function () {
    $(".obj").on("click", function () {
      $(".obji").addClass("visible");
      $(".obji").removeClass("invisible");
      $(".search-form__lining").toggleClass("visible");
      $(".search-form__lining").removeClass("invisible");
    });

    $(".register-form__cross").on("click", function () {
      $(".obji").removeClass("visible");
      $(".obji").addClass("invisible");
      $(".search-form__lining").removeClass("visible");
      $(".search-form__lining").addClass("invisible");
    });
    $(".search-form__lining").on("click", function () {
      $(".search-form__lining").removeClass("visible");
      $(".search-form__lining").addClass("invisible");
      $(".obji").removeClass("visible");
      $(".obji").addClass("invisible");
    });
  };

  var ads__filter = function () {
    $(".button_mobile--filter").on("click", function () {
      $(".selection__price").addClass("visible");
      $(".selection__price").removeClass("invisible");
    });
    $(".selection__cross").on("click", function () {
      $(".selection__price").removeClass("visible");
      $(".selection__price").addClass("invisible");
    });
  };

  // function check() {
  // 	if ($(window).width() < 992) {
  // 		if ($('.header__left-additional-menu').hasClass('invisible')) {
  // 			$('.header__background').removeClass('visible');
  // 			$('.header__background').addClass('invisible');
  // 		} else {
  // 			$('.header__background').removeClass('invisible');
  // 			$('.header__background').addClass('visible');
  // 		}
  // 	}
  // }

  function blockScrollon992() {
    if ($(window).width() < 992) {
      $("html").css({
        position: "fixed",
        width: "100%",
        "overflow-y": "scroll",
      });
    }
  }

  ads__filter();
  obn();

  addBell();
  addMenu();
  allMenu();
  addProfile();

  var search = function () {
    $(".header__search").on("click", function () {
      $(".header__search-menu").addClass("visible");
      $(".header__search-menu").removeClass("invisible");
    });
    $(".header__search-menu__cross").on("click", function () {
      $(".header__search-menu").removeClass("visible");
      $(".header__search-menu").addClass("invisible");
    });
    $(".header__search-menu__background").on("click", function () {
      $(".header__search-menu").removeClass("visible");
      $(".header__search-menu").addClass("invisible");
    });
  };

  search();

});

@@include('_reg.js')

@@include('slick.js')

@@include('comments-slider.js')

@@include('tabs.js')

@@include('rating.js')