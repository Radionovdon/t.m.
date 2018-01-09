'use strict';

$(function() {

	$('.back-sector-main-content-literature-fig').hover(
		function() {
			$(this).children('.back-sector-main-content-literature-cover').css('width', '102%');
			$(this).children().children('.back-sector-main-content-literature-cover-text').css('display', 'block');
		}, 
		function() {
			$('.back-sector-main-content-literature-cover').css('width', '0');
			$(this).children().children('.back-sector-main-content-literature-cover-text').css('display', 'none');
		}
	);

});