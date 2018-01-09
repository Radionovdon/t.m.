'use strict';

$(function() {

	$('.modal-close').on('click', function() {
		$('.modal-overlay').fadeOut(500);
		$('.callback-form-user-name-text').remove();
	});

	$('#callback-form').submit(function() {
		$.ajax({
			type: "POST",
			url: "../../php/send.php",
			data: $(this).serialize()
		}).done(function() {
			$('.modal-modal').css('display', 'block');
			$('.modal-overlay').css('display', 'block');
			$('.modal-overlay').animate({
				opacity: 1
				}, 200);
			$('.callback-form-user-name').append('<span class="callback-form-user-name-text">' + $('.form-name').val() + '!' + '</span>');
			$('.modal-text').animate({
				opacity: 1
				}, 700);
			$(this).find('input').val('');
			$(this).find('textarea').val('');
			$('#callback-form').trigger('reset');
		});
		return false;
	});

		$('#callback-form-desktop').submit(function() {
		$.ajax({
			type: "POST",
			url: "../../php/send.php",
			data: $(this).serialize()
		}).done(function() {
			$('.modal-modal').css('display', 'block');
			$('.modal-overlay').css('display', 'block');
			$('.modal-overlay').animate({
				opacity: 1
				}, 200);
			$('.callback-form-desktop-user-name').append('<span class="callback-form-user-name-text">' + $('.form-desktop-name').val() + '!' + '</span>');
			$('.modal-text').animate({
				opacity: 1
				}, 700);
			$(this).find('input').val('');
			$(this).find('textarea').val('');
			$('#callback-form-desktop').trigger('reset');
		});
		return false;
	});

});