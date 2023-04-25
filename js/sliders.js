$(" .reviews-slider ").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  breakpoint: 768,

  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
$(" .gallery-list ").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  breakpoint: 768,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
