$(document).ready(function () {
  $(".nav-toggler").each(function (_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
      $(target).animate({
        height: "toggle",
      });
    });
  });
});

// document scroll
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".homepage-header .normal-nav").css("background", "white");
      $(".homepage-header .normal-nav").css(
        "transition",
        ".3s all ease-in-out"
      );
      $(".homepage-header .normal-nav a span").css("color", "black");
    } else {
      $(".homepage-header .normal-nav").css("background", "transparent");
      $(".homepage-header .normal-nav a span").css("color", "white");
    }
  });
});
