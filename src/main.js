$(document).ready(function () {
  $(".vertical-slick-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".vertical-slick-nav",
  });

  $(".vertical-slick-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".vertical-slick-for",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
  });
});
