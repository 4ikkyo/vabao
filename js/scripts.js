$(window).load(function(){

	var changeSelect = function() {

		$(".sort select").on({

		  "click": function() {
		   $('.sort select').toggleClass('change_arrow');
		  },		


		  "blur": function() {
		      $('.sort select').removeClass('change_arrow');
		  },
		  "keyup": function(e) {
		    if (e.keyCode == 27)
		      $('.sort select').addClass('change_arrow');
		  }
		});


		// $('.sort select').on('click', function () {
		//       //$(this).closest('.bootstrap-select').addClass("checked");
		//       $('.sort select').toggleClass('change_arrow');
		// });
	};	


	var addBell = function() {
		$('.menu-bell-add').on('click', function() {
			$('.header__menu-bell').toggleClass('visible');
			$('.header__menu-bell').toggleClass('invisible')
		});
	};

	var addMenu = function() {
		$('.menu-burger-add').on('click', function() {
			$('.header__additional-menu').toggleClass('visible');
			$('.header__additional-menu').toggleClass('invisible')
		});
	};

    var addProfile = function() {
        $('.header__account-menu').on('click', function() {
            $('.header__menu-profile').toggleClass('visible');
			$('.header__menu-profile').toggleClass('invisible')
        });
    };

	
	var allMenu = function() {
		$('.menu-burger-smart').on('click', function() {
			$('.header__menu-burger').toggleClass('header__menu-burger-active');
			$('.smart-menu__wrapper').toggleClass('smart-menu__wrapper-visible');
			$('.header__smart-menu_lining').toggleClass('header__smart-menu_lining-visible');
		});
		$('.header__smart-menu_lining').on('click', function() {
			$('.smart-menu__wrapper').removeClass('smart-menu__wrapper-visible');
			$('.header__menu-bell').toggleClass('header__menu-bell-active');
			$('.header__smart-menu_lining').removeClass('header__smart-menu_lining-visible');
		});
	};
	
	var obn = function(){

		$('.obj').on('click', function() {
			$('.obji').addClass('visible');
			$('.obji').removeClass('invisible');
			$('.search-form__lining').toggleClass('visible');
			$('.search-form__lining').removeClass('invisible');
		});	

		$('.register-form__cross').on('click', function() {
			$('.obji').removeClass('visible');
			$('.obji').addClass('invisible');
			$('.search-form__lining').removeClass('visible');
			$('.search-form__lining').addClass('invisible');
		});
		$('.search-form__lining').on('click', function() {
			$('.search-form__lining').removeClass('visible');
			$('.search-form__lining').addClass('invisible');
			$('.obji').removeClass('visible');
			$('.obji').addClass('invisible');
		});
	}

	obn();

	addBell();
	addMenu();
	allMenu();
    addProfile();
    changeSelect();

	var search = function() {
		$('.header__search').on('click', function() {
			$('.header__search-form').addClass('visible');
			$('.header__search-form').removeClass('invisible');
			$('.search-form__lining').addClass('visible');
			$('.search-form__lining').removeClass('invisible');
		});
		$('.search-form__cross').on('click', function() {
			$('.header__search-form').removeClass('visible');
			$('.header__search-form').addClass('invisible');
			$('.search-form__lining').removeClass('visible');
			$('.search-form__lining').addClass('invisible');
		});
		$('.search-form__lining').on('click', function() {
			$('.header__search-form').removeClass('visible');
			$('.header__search-form').addClass('invisible');
			$('.search-form__lining').removeClass('visible');
			$('.search-form__lining').addClass('invisible');
		});
	}
	
	search();

	var logIn = function() {
		$('.header__account-login').on('click', function() {
			$('.header__logIn-form').removeClass('invisible');
			$('.header__logIn-form').addClass('visible');
			$('.logIn-form__lining').removeClass('invisible');
			$('.logIn-form__lining').addClass('visible');
		});
		$('.logIn-form__cross').on('click', function() {
			$('.header__logIn-form').addClass('invisible');
			$('.header__logIn-form').removeClass('visible');
			$('.logIn-form__lining').addClass('invisible');
			$('.logIn-form__lining').removeClass('visible');
		});
		$('.logIn-form__forgot').on('click', function() {
			$('.header__logIn-form').addClass('invisible');
			$('.header__logIn-form').removeClass('visible');
			$('.logIn-form__lining').addClass('invisible');
			$('.logIn-form__lining').removeClass('visible');
		});
		$('.logIn-form__button_r').on('click', function() {
			$('.header__logIn-form').addClass('invisible');
			$('.header__logIn-form').removeClass('visible');
			$('.logIn-form__lining').addClass('invisible');
			$('.logIn-form__lining').removeClass('visible');
		});
		$('.logIn-form__lining').on('click', function() {
			$('.header__logIn-form').addClass('invisible');
			$('.header__logIn-form').removeClass('visible');
			$('.logIn-form__lining').addClass('invisible');
			$('.logIn-form__lining').removeClass('visible');
		});
	}
	
	logIn();

	var register = function() {
		$('.logIn-form__button_r').on('click', function() {
			$('.register-form__lining').toggleClass('register-form__lining-visible');
			$('.header__register-form').toggleClass('register-form-active');
		});
		$('.register-form__cross').on('click', function() {
			$('.register-form__lining').removeClass('register-form__lining-visible');
			$('.header__register-form').removeClass('register-form-active');
		});
		$('.register-form__lining').on('click', function() {
			$('.register-form__lining').removeClass('register-form__lining-visible');
			$('.header__register-form').removeClass('register-form-active');
		});
	}
	
	register();



	var passRemember = function() {
		$('.logIn-form__forgot').on('click', function() {
			$('.pass-remember-form__lining').toggleClass('pass-remember-form__lining-visible');
			$('.header__pass-remember-form').toggleClass('pass-remember-form-active');
		});
		$('.pass-remember-form__cross').on('click', function() {
			$('.pass-remember-form__lining').removeClass('pass-remember-form__lining-visible');
			$('.header__pass-remember-form').removeClass('pass-remember-form-active');
		});
		$('.pass-remember-form__lining').on('click', function() {
			$('.pass-remember-form__lining').removeClass('pass-remember-form__lining-visible');
			$('.header__pass-remember-form').removeClass('pass-remember-form-active');
		});
	}
	
	passRemember();

	var order = function() {
		$('.button_open-dispute').on('click', function() {
			$('.open-dispute').toggleClass('visible');
			$('.open-dispute__lining ').toggleClass('visible');
		});
		$('.open-dispute__cross').on('click', function() {
			$('.open-dispute').removeClass('visible');
			$('.open-dispute__lining ').removeClass('visible');
		});
		$('.open-dispute__lining').on('click', function() {
			$('.open-dispute').removeClass('visible');
			$('.open-dispute__lining ').removeClass('visible');
		});
		$('.button_deny-dispute').on('click', function() {
			$('.open-dispute').removeClass('visible');
			$('.open-dispute__lining ').removeClass('visible');
		});
	}

	order();

	var rating = function() {
		$('.my-stars2').on('click', function() {
			$('.review').toggleClass('visible');
			$('.review__lining').toggleClass('visible');
		});
		$('.review__cross').on('click', function() {
			$('.review').removeClass('visible');
			$('.review__lining ').removeClass('visible');
		});
		$('.review__lining').on('click', function() {
			$('.review').removeClass('visible');
			$('.review__lining ').removeClass('visible');
		});
		$('.button_deny-dispute').on('click', function() {
			$('.review').removeClass('visible');
			$('.review__lining ').removeClass('visible');
		});
	}

	rating();





	var offerFocus = function() {
		if ($(window).width() > 1100){
			$('.offer__part-1').mouseenter(function() {
				$('.offer').addClass('offer-mouseover-left');
				$('.offer__part-2').css({'opacity':'0.7'});
			});
			$('.offer__part-1').mouseleave(function() {
				$('.offer').removeClass('offer-mouseover-left');
				$('.offer__part-2').css({'opacity':'1'});
			});
			$('.offer__part-2').mouseenter(function() {
				$('.offer').addClass('offer-mouseover-right');
				$('.offer__part-1').css({'opacity':'0.7'});
			});
			$('.offer__part-2').mouseleave(function() {
				$('.offer').removeClass('offer-mouseover-right');
				$('.offer__part-1').css({'opacity':'1'});
			});
		}
	}

	offerFocus();

	if ($(window).width() <= 700) {
		$('.contacts__item').on('click', function() {
			$('.my-massages__part-left').toggleClass('my-massages__part-left-unactive');
			$('.my-massages__chat').toggleClass('my-massages__chat-active');
		});
		$('.chat__return').on('click', function() {
			$('.my-massages__part-left').toggleClass('my-massages__part-left-unactive');
			$('.my-massages__chat').toggleClass('my-massages__chat-active');
		});
	}

	$(window).resize(function() {
		if ($(window).width() > 700) {
			$('.my-massages__part-left').removeClass('my-massages__part-left-unactive');
			$('.my-massages__chat').removeClass('my-massages__chat-active');
			$('.contacts__item').on('click', function() {
				$('.my-massages__part-left').removeClass('my-massages__part-left-unactive');
				$('.my-massages__chat').removeClass('my-massages__chat-active');
			});
		}
	});

});