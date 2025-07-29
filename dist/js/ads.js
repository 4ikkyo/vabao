$(document).ready(function () {
  // $(".about_search-line > input").keyup(search);
  $("#input__file").change(readURL);
});

window.onload = function () {
  var listNew = document.querySelector("#New").scrollHeight;
  document.querySelector(".range-wrap").style.height = listNew + "px";
};

// function search() {
//   if (this.value == "") {
//     New.setAttribute("style", "display: block");
//     dl.setAttribute("style", "display: none");

//     var phrase = document.querySelector(".about_search-line > input");
//     var table = document
//       .querySelector(".sticky-list")
//       .getElementsByTagName("h1");
//     for (var i = 0; i < table.length; i++) {
//       table[i].parentElement.style.display = "";
//     }
//   } else {
//     New.setAttribute("style", "display: none");
//     dl.setAttribute("style", "display: block");

//     var phrase = document.querySelector(".about_search-line > input");
//     var table = document
//       .querySelector(".sticky-list")
//       .getElementsByTagName("h1");
//     var regPhrase = new RegExp(phrase.value, "i");
//     var flag = false;

//     for (var i = 0; i < table.length; i++) {
//       flag = false;
//       flag = regPhrase.test(table[i].innerHTML);
//       if (flag) {
//         table[i].parentElement.style.display = "";
//       } else {
//         table[i].parentElement.style.display = "none";
//       }
//     }
//   }
//   return false;
// }

function readURL() {
  if (this.files && this.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".regular").slick(
        "slickAdd",
        '<div><div><li class="wrapp_img--item"> <img class="added-img" src=' +
          e.target.result +
          ' width="141px"> <img class="chat__img--rem" src="img/svg/imgremove.svg" onclick="del(this)"> </li></div></div>'
      );
    };

    reader.readAsDataURL(this.files[0]);
  }
}

function del(t) {
  $(t).closest(".slick-slide").remove();
}

//Список по алфавиту. Проверка наличия у каждой буквы наличие игры, если с данной буквой никакой игры нет, блок с буквой скрывается
var list = document.querySelectorAll(".sticky-list > div");
for (var i = 0; i < list.length; i++) {
  if (!list[i].querySelector(".title-game").children.length > 0) {
    list[i].style.display = "none";
  }
}

$(function () {
  $("#slider-range").slider({
    range: true,
    min: minValue,
    max: maxValue,
    values: [minValue, maxValue],
    slide: function (event, ui) {
      $(".price__item1").val(ui.values[0]);
      $(".price__item2").val(ui.values[1]);
      $(".ui-slider-handle").eq(0).css("background", "#FFFFFF !important");
    },
  });
});

$(".regular").slick({
  dots: false,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  variableWidth: true,
});

const autoCompleteJS = new autoComplete({
  placeHolder: "Поиск",
  data: {
    src: gameList,
    cache: true,
  },
  resultItem: {
    highlight: true,
  },
  resultsList: {
    element: (list, data) => {
      if (!data.results.length) {
        // Create "No Results" message element
        const message = document.createElement("div");
        // Add class to the created element
        message.setAttribute("class", "no_result");
        // Add message text content
        message.innerHTML = `<span>Ничего не найдено</span> <a class="button-o">Запросить<a>`;
        // Append message element to the results list
        list.prepend(message);
      }
    },
    noResults: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },
});

document
  .querySelector("#autoComplete")
  .addEventListener("focus", function (event) {
    autoCompleteJS.start(" ");
  });

const choseGames = new autoComplete({
  selector: "#chose-games-list",
  placeHolder: "Выбор игры",
  data: {
    src: gameList,
    cache: true,
  },
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        choseGames.input.value = selection;
      },
    },
  },
});

var data = document
  .getElementsByClassName("data")[0]
  .getElementsByTagName("option");
var New = document.getElementById("New");
var dl = document.getElementsByClassName("sticky-list")[0];

New.setAttribute("style", "display: block");
dl.setAttribute("style", "display: none");

var range = document.getElementsByClassName("input-range")[0];

range.addEventListener("change", function () {
  if (this.value == "0") {
    New.setAttribute("style", "display: block");
    dl.setAttribute("style", "display: none");
  } else {
    New.setAttribute("style", "display: none");
    dl.setAttribute("style", "display: block");
    for (var i = 0; i < data.length; ++i) {
      if (data[i].value == this.value) {
        location.href = "#" + data[i].textContent;
      }
    }
  }
});

var data = document
  .getElementsByClassName("data")[0]
  .getElementsByTagName("option");

const slide = document.querySelector("#range1");
const sliderval = document.querySelector("#sliderval");
const value = document.querySelector("#value");
const option = document.querySelector(".data > option");

slide.oninput = function () {
  window.navigator.vibrate(20);
  var screenHeight = window.screen.height;
  var u = (screenHeight * 85) / 100 / 39;
  // console.log(u);

  sliderval.style.top = "calc((85vh / 39 *" + slide.value + ") - 40px)";
  for (var i = 0; i < data.length; ++i) {
    if (data[i].value == slide.value) {
      value.innerHTML = data[i].textContent;
    }
  }
};

var start = function (event) {
  sliderval.classList.add("visible");
  sliderval.classList.remove("invisible");
  sliderval.focus();
};

slide.addEventListener("touchstart", start, false);
slide.addEventListener("mousedown", start, false);

var end = function (event) {
  sliderval.classList.remove("visible");
  sliderval.classList.add("invisible");
};

slide.addEventListener("touchend", end, false);
slide.addEventListener("mouseup", end, false);

if ("ontouchstart" in document.querySelector(".input-range")) {
  event = addOffsetsOnTouch(event);
}

// function addOffsetsOnTouch(e) {
//   let touch = e.touches[0] || event.changedTouches[0];
//   let target = document.elementFromPoint(touch.clientX, touch.clientY);
//   event.offsetX = touch.clientX - target.getBoundingClientRect().x;
//   event.offsetY = touch.clientY - target.getBoundingClientRect().y
//   return e;
// }

// var leftwrapper = document.querySelector(".left__wrapper");

// window.addEventListener("scroll", function () {
//   var screenWidth = window.screen.width;
//   if (screenWidth < 992) {
//     if (pageYOffset > 70) {
//       leftwrapper.style.top = 0;
//     } else {
//       leftwrapper.style.top = 70 - pageYOffset + "px";
//     }
//     console.log(pageYOffset + "px");
//   } else {
//     leftwrapper.style.top = 0;
//   }
// });
