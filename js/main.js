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
  	// Main menu sticky	 
	// var menu_height = $('#mainHeader').innerHeight();
	// $(window).bind('scroll', function () {	 
	//  if ($(window).scrollTop() >= num) {
	//   		$('header+section').css({'margin-top':menu_height});
	// 		$('#main_menu').addClass('sticky');
	// 	} else {
	// 		$('#main_menu').removeClass('sticky');
	//   		$('header+section').css({'margin-top':0});
	// 	}		
	// });
	/*
	var nav = $('#main_menu');
    var header = $('.headerTop');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function () {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
        	$('#main_menu').addClass('sticky');
            nav.css({
                position: 'fixed',
                top: 0,                
            });
            header.css('marginTop', 50);
            isFixed = true;
        } else if (!shouldBeFixed && isFixed) {
        	$('#main_menu').removeClass('sticky');
            nav.css({
                position: 'relative'
            });
            header.css('marginTop', 0);
            isFixed = false;
        }
    });*/
});












