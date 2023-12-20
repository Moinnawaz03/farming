(function($) {
	'use strict';
	// Navbar Menu JS
	$('.scroll-btn, .navbar .navbar-nav li a').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 65
		}, 1000);
		e.preventDefault();
	});
	$('.navbar .navbar-nav li a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	// Menu Icon JS
	$(".menu-icon").on('click', function(){
		$(".menu-icon").toggleClass("active")
	})
	$(".menu-icon").on('click', function(){
		$(".sidebar").toggleClass("active")
	})
	
	// Preloader JS
	$(window).on('load', function() {
		$('.preloader').fadeOut();
	});

	// WOW Animation JS
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	};

	$('.slider-carousel').owlCarousel({
		loop:true,
		items:1,
		margin:0,
		nav:true,
		autoplay:true,
		center:true,
		stagePadding:0,
		dots:false
	});

	$('.service-carousel').owlCarousel({
		loop:true,
		margin:20,
		nav:false,
		autoplay:true,
		stagePadding:0,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});


	
	// $('.menu-item-has-children').on('click', function(){
	// 	$('.menu-item-has-children').removeClass('active');
	// 	$(this).addClass('active');
	// });
	
  
	$(document).ready(function () {
		$(".menu-item-has-children").click(function (e) {
		  // e.stopPropagation();
		  // e.preventDefault();
		  
		  // 1. Store in a var the clicked element
		  var current_dropdown = $(this).find(".sub-menu");
		  
		  $(".sub-menu").each(function() {
			   var element = $(this);
			   // 2. Remove the `open` classname from all elements except the clicked one.
			   if (!element.is(current_dropdown)) {
				 $(this).removeClass("active");
			   }
		  });
		  
		  // 3. Toggle the open class of the clicked element.
		  current_dropdown.toggleClass("active"); 
		});
	  
		// Close dropdown when u click outside of the nav ul
		$(document).click(function (e) {
		  if (!e.target.closest("ul") && $(".sub-menu").hasClass("active")) {
			$(".sub-menu").removeClass("active");
		  }
		});
	});
	  
		
})(jQuery);
