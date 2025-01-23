jQuery(function () {
  $(".reviews-slider").slick({
    arrows: false,
    mobileFirst: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".reviews-next").on("click", function () {
    $(".reviews-slider").slick("slickNext");
  });
  $(".reviews-prev").on("click", function () {
    $(".reviews-slider").slick("slickPrev");
  });
});
