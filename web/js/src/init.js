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

  $(".review-single")
    .find(".open-review-modal")
    .each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        $("body").addClass("blocked");
        $(".overlay-modal").show(350, function () {
          $(".review-modal").show(function () {
            $(this).addClass("review-modal-active");
          });
        });
      });
    });
  $(".review-modal-close").on("click", function () {
    $(".review-modal").hide(function () {
      $(this).removeClass("review-modal-active");
    });
    setTimeout(function () {
      $(".overlay-modal").hide(350);
      $("body").removeClass("blocked");
    }, 850);
  });

  // Diego aqui pon la o id del boton que quieras que abra el cupon
  if (window.matchMedia("(max-width: 1199px)")) {
    $("#boton-prueba").on("click", function (e) {
      e.preventDefault();
      $("body").addClass("blocked");
      $(".overlay-modal").show(350, function () {
        $("#cupon").show(function () {
          $(this).addClass("cupon-modal-active");
        });
      });
    });
    $(".cupon-modal-close").on("click", function () {
      $("#cupon").hide(function () {
        $(this).removeClass("cupon-modal-active");
      });
      setTimeout(function () {
        $(".overlay-modal").hide(350);
        $("body").removeClass("blocked");
      }, 850);
    });
  }
});
