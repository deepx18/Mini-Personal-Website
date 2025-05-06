
$(document).ready(
  // $(".content").hide().slideRight(2000)
  $("img").css({
    position: "relative",
    right: "-1100px",
    opacity: "0"
  }).animate({
    left: '0',
    opacity: "1"
  }, 2000),

  $(".content").css({
    position: "relative",
    left: "-900px",
    opacity: "0"
  }).animate({
    left: '0',
    opacity: "1"
  }, 2000),

  $(".header").css({
    position: "relative",
    top: "-10vh",
    opacity: "0"
  }).animate({
    top: '0',
    opacity: "1"
  }, 2000)
)