



$(document).ready(function(){	
	$('.open-menu').click(function(event) {
		$('body').toggleClass('show-menu');
	});	
	$('.close-menu,.mobile-menu ul li a').click(function(event) {
		$('body').removeClass('show-menu');
	});	

	if($('.bannner-slider').length > 0) {
		$('.bannner-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			arrows: true,
			dots: false,
			prevArrow:"<div class='slick-prev'><span class='icon-left-open'></span></div>",
			nextArrow:"<div class='slick-next'><span class='icon-right-open'></span></div>",
			responsive: [
				{
					breakpoint: 767,
					settings: 'unslick'
				}
			]
		});
	}
	if($('.search-tag-list').length > 0) {
		$('.search-tag-list').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			variableWidth: true,
			prevArrow:"<div class='slick-prev'><span class='icon-left-open'></span></div>",
			nextArrow:"<div class='slick-next'><span class='icon-right-open'></span></div>",
			
		});
	}
	if($('.product-slider').length > 0) {
		$('.product-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			arrows: true,
			dots: false,
			prevArrow:"<div class='slick-prev'><span class='icon-left-open'></span></div>",
			nextArrow:"<div class='slick-next'><span class='icon-right-open'></span></div>",
			responsive: [
				{
					breakpoint: 767,
					settings: 'unslick'
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}
	if($('.category-list').length > 0) {
		$('.category-list').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			arrows: true,
			dots: false,
			prevArrow:"<div class='slick-prev'><span class='icon-left-open'></span></div>",
			nextArrow:"<div class='slick-next'><span class='icon-right-open'></span></div>",
			responsive: [
				{
					breakpoint: 767,
					settings: 'unslick'
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}
	if($('.our-clients-slider').length > 0) {
		$('.our-clients-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			arrows: true,
			dots: false,
			prevArrow:"<div class='slick-prev'><span class='icon-left-open'></span></div>",
			nextArrow:"<div class='slick-next'><span class='icon-right-open'></span></div>",
			responsive: [
				{
					breakpoint: 767,
					settings: 'unslick'
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}
	if($('.instgram-slider').length > 0) {
		$('.instgram-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			arrows: true,
			dots: false,
			prevArrow:"<div class='slick-prev'><span class='icon-left-open'></span></div>",
			nextArrow:"<div class='slick-next'><span class='icon-right-open'></span></div>",
			responsive: [
				{
					breakpoint: 767,
					settings: 'unslick'
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 320,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}
	
	
   
		
});
$(window).on('resize', function() {
	if($('.bannner-slider').length > 0) {
		$('.bannner-slider').slick('resize');
	}
	if($('.product-slider').length > 0) {
		$('.product-slider').slick('resize');
	}
	if($('.category-list').length > 0) {
		$('.category-list').slick('resize');
	}
	if($('.our-clients-slider').length > 0) {
		$('.our-clients-slider').slick('resize');
	}
	if($('.instgram-slider').length > 0) {
		$('.instgram-slider').slick('resize');
	}
});