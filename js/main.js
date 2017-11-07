'use strict'

$("document").ready(function($){
	// Слайдер
	$('.multiple-items').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true
	});

	$('.slick-arrow').each(function(){
		this.textContent = '';
	})
	// Переходы по якорным ссылкам
	var nav = $('.navbar-default');
	var scrltop = $('.scroll-to-top .fa');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			nav.addClass("f-nav");
			scrltop.css('display', 'block');
		} else {
			nav.removeClass("f-nav");
			scrltop.css('display', 'none');
		}
	});
	nav.on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	// Переход к началу страницы
	$(".scroll-top").click(function() {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		}, 1500);
		return false;
	});
});