$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-nav").toggleClass("active");
    $(".header-burger").toggleClass("active");
  });
  $(".guestion-item").click(function (event) {
    // $(".answer").toggleClass("open");
    // $(".answer").removeClass("open");
    $(this).closest("li").find(".answer").toggleClass("open");
    $(this).closest("li").find("img").toggleClass("open");
  });
});
