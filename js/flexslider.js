$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
});

// carousel

$('.bxslider').bxSlider({
  buildPager: function(slideIndex){
    switch(slideIndex){
      case 0:
        return '<img src="/images/thumbs/tree_root.jpg">';
      case 1:
        return '<img src="/images/thumbs/houses.jpg">';
      case 2:
        return '<img src="/images/thumbs/hill_fence.jpg">';
    }
  }
});
