var $ = jQuery;	
$(document).ready(function(){
	// Scrol to top 
  	$(window).scroll(function () {
		if ($(this).scrollTop() > 767) {
			$('.scrollup').fadeIn('slow');
		} else {
			$('.scrollup').fadeOut('slow');
		}
	});

	$('.scrollup').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});

	//main Banner
  	$('#main_banner').slick({
    	dots: false,
	  	infinite: true,
	  	speed: 800,
	 	fade: true,
	 	autoplay: true,
	 	autoplaySpeed:5000,
	 	arrows: false,
	 	touchMove: true,
  	});
});












