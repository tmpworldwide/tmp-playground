// Spell's Disney Accessibility Fixes - I never said it would be pretty.

// Append CSS

$("head").append("<link href='https://radancy.dev/playground/disney/init.css' rel='stylesheet'>");

// Add button role to Advanced Search Jobs toggle

$(".advanced-search-toggle").attr("role", "button");

// Ensure ASJ button toggle can be used with space bar

$(".top-bar .advanced-search-toggle").on("keypress", function() {

	$(this).click();
	return false;

});

// Carousel Fixes

var $SlickSliderList = $(".one-time");

$SlickSliderList.on("afterChange", function(event, slick, currentSlide){

	$(this).append("<button class='slick-carousel-pause' aria-pressed='false'>Pause</button>");

});

$(".slick-carousel-pause").on("click", function() {

  if ($(this).attr("aria-pressed") == "pause"){

    $SlickSliderList.slick("slickPause");
    $(this).attr("aria-pressed", "true");

  } else {

    $SlickSliderList.slick("slickPlay");
    $(this).attr("aria-pressed", "false");

  }

});
