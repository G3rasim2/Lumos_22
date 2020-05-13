$(document).ready(function() {
  $('#resultCarousel').owlCarousel({
      dots:false,
      loop: true,
      startPosition:0,
      margin:10,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed:1000,
      responsive:{
          320:{
              items:1
          }
      }
  });
});