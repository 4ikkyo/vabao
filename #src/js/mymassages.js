var chatSendImg = document.body.querySelector(".send-img");
var chat = document.body.querySelector(".send-chat");

let sizeWidth = $(window).width();

$(window).on("resize", function () {
  sizeWidth = $(window).width();

  if (sizeWidth > 992) {
    document.body.querySelector(".my-massages__chat").style.display = "grid";
    document.body.querySelector(".my-massages__part-left").style.display = "grid";
  } else {
    document.body.querySelector(".my-massages__chat").style.display = "none";
    document.body.querySelector(".my-massages__part-left").style.display = "grid";
  }
});

$(document).ready(function () {
  // $(".my-massages .about_search-line > input").keyup(searchMessage);
  $(".my-massages .about_search-line > input").keyup(searchMessageV2);
  $("#files").change(readURL);
  $(".contacts__item").click(mobileShowChat);
  $(".arrow-back").click(mobileCloseChat);
});

// function searchMessage() {
//   var phrase = document.querySelector(".my-massages .about_search-line > input");
//   var table = document.querySelectorAll(".my-massages__contacts h5");
//   var regPhrase = new RegExp(phrase.value, "i");
//   var flag = false;

//   for (var i = 0; i < table.length; i++) {
//     flag = false;
//     flag = regPhrase.test(table[i].innerHTML);

//     if (flag) {
//       table[i].parentElement.parentElement.style.display = "";
//     } else {
//       table[i].parentElement.parentElement.style.display = "none";
//     }
//   }
// }

function searchMessageV2() {
  // Declare variables
  var input, filter, li, a, i, txtValue;

  input = document.querySelector('.my-massages .about_search-line > input');
  filter = input.value.toUpperCase();
  li = document.querySelectorAll('.contacts__item');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h5")[0];
    txtValue = a.textContent || a.innerText;
    let matchStart;
    if ((matchStart = txtValue.toUpperCase().indexOf(filter)) > -1) {
      // Replace link text to include highlighted span
      a.innerHTML = '';
      a.appendChild(document.createTextNode(txtValue.slice(0, matchStart)));
      const highlighted = document.createElement('span');
      highlighted.classList.add('highlighted');
      highlighted.innerText = txtValue.slice(matchStart, matchStart + filter.length);
      a.appendChild(highlighted);
      a.appendChild(document.createTextNode(txtValue.slice(matchStart + filter.length)));
      
      li[i].style.display = "";
      // li[i].style.color = 'green';
    } else {
      li[i].style.display = "none";
    }
  }
}

function readURL() {
  if (this.files && this.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      document.body
        .querySelector(".send-img")
        .insertAdjacentHTML(
          "beforeend",
          '<li class="wrapp_img--item"> <img class="added-img" src=' +
            e.target.result +
            ' width="141px"> <img class="chat__img--rem" src="img/svg/imgremove.svg" onclick="del(this)"> </li>'
        );
    };

    reader.readAsDataURL(this.files[0]);

    chat.style.borderTop = "solid 1px #EDEEF2";
  }
}

function del(t) {
  $(t).closest(".wrapp_img--item").remove();

  if (chatSendImg.hasChildNodes()) {
    chat.style.borderTop = "solid 1px #EDEEF2";
  } else {
    chat.style.border = "";
  }
}

function mobileShowChat() {
  if (sizeWidth < 992) {
    document.body.querySelector(".my-massages__chat").style.display = "grid";
    document.body.querySelector(".my-massages__part-left").style.display =
      "none";
  }
}

function mobileCloseChat() {
  if (sizeWidth < 992) {
    document.body.querySelector(".my-massages__chat").style.display = "none";
    document.body.querySelector(".my-massages__part-left").style.display =
      "grid";
  }
}
