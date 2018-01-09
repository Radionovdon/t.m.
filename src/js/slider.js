'use strict';

$(function() {

	var imageIndex = 0;

	function slideImageNext() {
		$('.slider-list').animate({
			left: "-=960"
		}, 200);
		imageIndex++;
		if (imageIndex > 28) {
			imageIndex = 0;
			$('.slider-list').animate({
				left: "+=27840"
			}, 200);
		}
	};

	function slideImagePrev() {
		$('.slider-list').animate({
			left: "+=960"
		}, 200);
		imageIndex--;
		if (imageIndex < 0) {
			imageIndex = 28;
			$('.slider-list').animate({
				left: "-=27840"
			}, 200);
		}
	};

	$('.slide-next').click(function() {
		slideImageNext();
	});

	$('.slide-prev').click(function() {
		slideImagePrev();
	});

	setInterval(function() { 
		slideImageNext();
	}, 10000);

});