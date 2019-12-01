$(document).ready(function() {
  $(".mobile-nav-toggle").click(function(e) {
    e.preventDefault();
    $(".header").toggleClass("mobile-nav");
    $("body").toggleClass("show-mobile-nav");

  // $("body").on "touchmove", (e) ->
  //   if $("body").hasClass "show-mobile-nav"
  //     e.preventDefault()
  });

  $(".navigation a").click(function(e) {
    $(".header").removeClass("mobile-nav");
    $("body").removeClass("show-mobile-nav");
  });

  $(".js-time-now").click(function(e) {
    $(".js-time-img").addClass("now");
  });

  $(".js-time-tomorrow").click(function(e) {
    $(".js-time-img").removeClass("now");
  });
});
