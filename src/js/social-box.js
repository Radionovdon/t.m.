'use strict';

$(function() {

	let sharing = $('.share-box'),
		socialBoxSharing = $('.footer-soc-share-box'),
		upLink = $('.back-sector-main-article-up-link'),
		artHght = 500;

	sharing.on('click', function(e) {
		e.preventDefault();
		socialBoxSharing.slideToggle('fast');
	});

	upLink.on('click', function (e) {
		e.preventDefault();
		let id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$(window).scroll(function() {
		let top = $(this).scrollTop();
		if (top > artHght) {
			upLink.css('display', 'block');
		} else {
			upLink.css('display', 'none');
		}
	});

});