$(document).ready(function () {
  $("#password, #password-confirm").keyup(validate);
  $(
    ".input-password > .password-hide, .input-password-confirm > .password-hide"
  ).click(hidePass);
});

function validate() {
  var pass1 = $("#password").val();
  var pass2 = $("#password-confirm").val();

  if (pass1 == pass2) {
    if (pass1.length < 8) {
      $(".error").css({ display: "initial" });
      $(".error").html("Короткий пароль");
    } else {
      $("#password, #password-confirm").css({ "border-color": "#38C976" });
      $(".error").removeAttr("style");
    }
  } else {
    $("#password, #password-confirm").css({ "border-color": "#FC5858" });
    $(".error").css({ display: "initial" });
    $(".error").html("Пароли не совпадают");
  }
  return false;
}

function hidePass() {
  if ($(this).siblings("input").attr("type") == "password") {
    $(this).addClass("view");
    $(this).siblings("input").attr("type", "text");
  } else {
    $(this).removeClass("view");
    $(this).siblings("input").attr("type", "password");
  }
  return false;
}
