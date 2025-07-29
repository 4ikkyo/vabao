$(document).ready(function () {
  $(".comments__photos-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    initialSlide: 3,
    speed: 250,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    asNavFor: ".comments__comments-slider",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: true,
        },
      },
    ],
  });
  $(".comments__comments-slider").slick({
    arrows: false,
    fade: true,
    initialSlide: 3,
    asNavFor: ".comments__photos-slider",
  });
  $(".comments__photos-slider").slick("setPosition");
});

$(document).ready(function () {
  $(".super__slider").slick({
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    initialSlide: 1,
    speed: 250,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    appendArrows: ".super__item-right",
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".same-product__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    initialSlide: 1,
    speed: 250,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".profile__review-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    initialSlide: 1,
    speed: 250,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    appendArrows: ".profile__review-item-right",
  });
});

$(document).ready(function () {
  $(".order-processing__review-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    initialSlide: 1,
    speed: 250,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    appendArrows: ".order-processing__review-item-right",
  });
});



$(document).ready(function () {
  $(".auth-reg__img").slick({
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    adaptiveHeight: true,
    dots: true,
  });
});

$(document).ready(function () {
  $(".order-processing__slide").slick({
    slidesToShow: 4.5,
    autoplay: true,
    infinite: false,
    arrows: false,
    adaptiveHeight: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
