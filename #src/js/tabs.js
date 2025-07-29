$(".tabs").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass("expanded");
  $("#" + $(e.target).attr("for")).prop("checked", true);
});
$(document).click(function () {
  $(".tabs").removeClass("expanded");
});

$(".tabs-mini").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass("expanded");
  $("#" + $(e.target).attr("for")).prop("checked", true);
});
$(document).click(function () {
  $(".tabs").removeClass("expanded");
});
