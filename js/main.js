// Owl Carousel Function

$( '.owl-carousel' ).owlCarousel( {
     loop: true,
     margin: 10,
     responsiveClass: true,
     dots: false,
     nav: true,
     responsive: {
          300: {
               items: 1,
               nav: true
          },
          500: {
               items: 1,
               nav: true
          },
     }
} )