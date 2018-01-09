'use strict';

$(function() {

	$('.back-sector-main-content-about-hon-img').on('click', function(e) {
		e.preventDefault();
		$('.back-sector-main-content-about-hon-modal').css('display', 'block');
		let honoursItem = $(this).closest('.back-sector-main-content-about-hon-img-list-item'),
			honoursItemPosition = honoursItem.index();
		$('.back-sector-main-content-about-hon-img-large').eq(honoursItemPosition).css('display', 'block');
	});

	$('.back-sector-main-content-about-hon-img-large').on('click', function(e) {
		e.preventDefault();
		$(this).css('display', 'none');
		$('.back-sector-main-content-about-hon-modal').css('display', 'none');
	});

});