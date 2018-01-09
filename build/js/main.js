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
'use strict';

$(function() {

	let tabsControlLink = $('.back-sector-main-control-list-link'),
		tabsContent = $('.back-sector-main-content-list-item'),
		frontContent = $('.front-sector'),
		backContent = $('.back-sector'),
		enterLink = $('.front-sector-footer-link'),
		articleControlLink = $('.back-sector-main-article-link'),
		articleContent = $('.back-sector-main-articles-content-list-item');

	enterLink.on('click', function(e) {
		e.preventDefault();
		frontContent.animate({
			opacity: 0
			}, 1000);
		setTimeout(function(){
			frontContent.css('display', 'none');
			backContent.css('display', 'block');
			backContent.animate({
				opacity: 1
				}, 1000);
		}, 1001);
	});

	tabsControlLink.on('click', function(e) {
		e.preventDefault();
		$('.back-sector-main-start-box').css('display', 'none');
		let tabsItem = $(this).closest('.back-sector-main-control-list-item'),
			tabsItemPosition = tabsItem.index();
		tabsContent.eq(tabsItemPosition).css('display', 'block').siblings().css('display', 'none').closest('.back-sector-main-list-item-second').css('background', 'white');
		tabsControlLink.eq(tabsItemPosition).addClass('back-sector-main-control-list-link-hovered').closest('.back-sector-main-control-list-item').addClass('back-sector-main-control-list-item-hovered').siblings().removeClass('back-sector-main-control-list-item-hovered').children().removeClass('back-sector-main-control-list-link-hovered');
		let articleItems = $('.back-sector-main-articles-control-list-item');
		articleItems.css('display', 'inline-block');
		articleContent.css('display', 'none');
	});

	articleControlLink.on('click', function(e) {
		e.preventDefault();
		let articleItem = $(this).closest('.back-sector-main-articles-control-list-item'),
		articleItemPosition = articleItem.index();
		articleContent.eq(articleItemPosition).css('display', 'block').siblings().css('display', 'none');
		let id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
		let articleItems = $('.back-sector-main-articles-control-list-item');
		articleItems.css('display', 'none');
	});

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGxiYWNrLmpzIiwibGl0ZXJhdHVyZS5qcyIsInBpY3MuanMiLCJzbGlkZXIuanMiLCJzb2NpYWwtYm94LmpzIiwidGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cclxuXHQkKCcubW9kYWwtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCg1MDApO1xyXG5cdFx0JCgnLmNhbGxiYWNrLWZvcm0tdXNlci1uYW1lLXRleHQnKS5yZW1vdmUoKTtcclxuXHR9KTtcclxuXHJcblx0JCgnI2NhbGxiYWNrLWZvcm0nKS5zdWJtaXQoZnVuY3Rpb24oKSB7XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR0eXBlOiBcIlBPU1RcIixcclxuXHRcdFx0dXJsOiBcIi4uLy4uL3BocC9zZW5kLnBocFwiLFxyXG5cdFx0XHRkYXRhOiAkKHRoaXMpLnNlcmlhbGl6ZSgpXHJcblx0XHR9KS5kb25lKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcubW9kYWwtbW9kYWwnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdFx0JCgnLm1vZGFsLW92ZXJsYXknKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdFx0JCgnLm1vZGFsLW92ZXJsYXknKS5hbmltYXRlKHtcclxuXHRcdFx0XHRvcGFjaXR5OiAxXHJcblx0XHRcdFx0fSwgMjAwKTtcclxuXHRcdFx0JCgnLmNhbGxiYWNrLWZvcm0tdXNlci1uYW1lJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImNhbGxiYWNrLWZvcm0tdXNlci1uYW1lLXRleHRcIj4nICsgJCgnLmZvcm0tbmFtZScpLnZhbCgpICsgJyEnICsgJzwvc3Bhbj4nKTtcclxuXHRcdFx0JCgnLm1vZGFsLXRleHQnKS5hbmltYXRlKHtcclxuXHRcdFx0XHRvcGFjaXR5OiAxXHJcblx0XHRcdFx0fSwgNzAwKTtcclxuXHRcdFx0JCh0aGlzKS5maW5kKCdpbnB1dCcpLnZhbCgnJyk7XHJcblx0XHRcdCQodGhpcykuZmluZCgndGV4dGFyZWEnKS52YWwoJycpO1xyXG5cdFx0XHQkKCcjY2FsbGJhY2stZm9ybScpLnRyaWdnZXIoJ3Jlc2V0Jyk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblx0XHQkKCcjY2FsbGJhY2stZm9ybS1kZXNrdG9wJykuc3VibWl0KGZ1bmN0aW9uKCkge1xyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dHlwZTogXCJQT1NUXCIsXHJcblx0XHRcdHVybDogXCIuLi8uLi9waHAvc2VuZC5waHBcIixcclxuXHRcdFx0ZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKVxyXG5cdFx0fSkuZG9uZShmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnLm1vZGFsLW1vZGFsJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblx0XHRcdCQoJy5tb2RhbC1vdmVybGF5JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblx0XHRcdCQoJy5tb2RhbC1vdmVybGF5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0b3BhY2l0eTogMVxyXG5cdFx0XHRcdH0sIDIwMCk7XHJcblx0XHRcdCQoJy5jYWxsYmFjay1mb3JtLWRlc2t0b3AtdXNlci1uYW1lJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImNhbGxiYWNrLWZvcm0tdXNlci1uYW1lLXRleHRcIj4nICsgJCgnLmZvcm0tZGVza3RvcC1uYW1lJykudmFsKCkgKyAnIScgKyAnPC9zcGFuPicpO1xyXG5cdFx0XHQkKCcubW9kYWwtdGV4dCcpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdG9wYWNpdHk6IDFcclxuXHRcdFx0XHR9LCA3MDApO1xyXG5cdFx0XHQkKHRoaXMpLmZpbmQoJ2lucHV0JykudmFsKCcnKTtcclxuXHRcdFx0JCh0aGlzKS5maW5kKCd0ZXh0YXJlYScpLnZhbCgnJyk7XHJcblx0XHRcdCQoJyNjYWxsYmFjay1mb3JtLWRlc2t0b3AnKS50cmlnZ2VyKCdyZXNldCcpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cclxuXHQkKCcuYmFjay1zZWN0b3ItbWFpbi1jb250ZW50LWxpdGVyYXR1cmUtZmlnJykuaG92ZXIoXHJcblx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5jaGlsZHJlbignLmJhY2stc2VjdG9yLW1haW4tY29udGVudC1saXRlcmF0dXJlLWNvdmVyJykuY3NzKCd3aWR0aCcsICcxMDIlJyk7XHJcblx0XHRcdCQodGhpcykuY2hpbGRyZW4oKS5jaGlsZHJlbignLmJhY2stc2VjdG9yLW1haW4tY29udGVudC1saXRlcmF0dXJlLWNvdmVyLXRleHQnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdH0sIFxyXG5cdFx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJy5iYWNrLXNlY3Rvci1tYWluLWNvbnRlbnQtbGl0ZXJhdHVyZS1jb3ZlcicpLmNzcygnd2lkdGgnLCAnMCcpO1xyXG5cdFx0XHQkKHRoaXMpLmNoaWxkcmVuKCkuY2hpbGRyZW4oJy5iYWNrLXNlY3Rvci1tYWluLWNvbnRlbnQtbGl0ZXJhdHVyZS1jb3Zlci10ZXh0JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdH1cclxuXHQpO1xyXG5cclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHJcblx0JCgnLmJhY2stc2VjdG9yLW1haW4tY29udGVudC1hYm91dC1ob24taW1nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnLmJhY2stc2VjdG9yLW1haW4tY29udGVudC1hYm91dC1ob24tbW9kYWwnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdGxldCBob25vdXJzSXRlbSA9ICQodGhpcykuY2xvc2VzdCgnLmJhY2stc2VjdG9yLW1haW4tY29udGVudC1hYm91dC1ob24taW1nLWxpc3QtaXRlbScpLFxyXG5cdFx0XHRob25vdXJzSXRlbVBvc2l0aW9uID0gaG9ub3Vyc0l0ZW0uaW5kZXgoKTtcclxuXHRcdCQoJy5iYWNrLXNlY3Rvci1tYWluLWNvbnRlbnQtYWJvdXQtaG9uLWltZy1sYXJnZScpLmVxKGhvbm91cnNJdGVtUG9zaXRpb24pLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcuYmFjay1zZWN0b3ItbWFpbi1jb250ZW50LWFib3V0LWhvbi1pbWctbGFyZ2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0XHQkKCcuYmFjay1zZWN0b3ItbWFpbi1jb250ZW50LWFib3V0LWhvbi1tb2RhbCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0fSk7XHJcblxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cclxuXHR2YXIgaW1hZ2VJbmRleCA9IDA7XHJcblxyXG5cdGZ1bmN0aW9uIHNsaWRlSW1hZ2VOZXh0KCkge1xyXG5cdFx0JCgnLnNsaWRlci1saXN0JykuYW5pbWF0ZSh7XHJcblx0XHRcdGxlZnQ6IFwiLT05NjBcIlxyXG5cdFx0fSwgMjAwKTtcclxuXHRcdGltYWdlSW5kZXgrKztcclxuXHRcdGlmIChpbWFnZUluZGV4ID4gMjgpIHtcclxuXHRcdFx0aW1hZ2VJbmRleCA9IDA7XHJcblx0XHRcdCQoJy5zbGlkZXItbGlzdCcpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdGxlZnQ6IFwiKz0yNzg0MFwiXHJcblx0XHRcdH0sIDIwMCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gc2xpZGVJbWFnZVByZXYoKSB7XHJcblx0XHQkKCcuc2xpZGVyLWxpc3QnKS5hbmltYXRlKHtcclxuXHRcdFx0bGVmdDogXCIrPTk2MFwiXHJcblx0XHR9LCAyMDApO1xyXG5cdFx0aW1hZ2VJbmRleC0tO1xyXG5cdFx0aWYgKGltYWdlSW5kZXggPCAwKSB7XHJcblx0XHRcdGltYWdlSW5kZXggPSAyODtcclxuXHRcdFx0JCgnLnNsaWRlci1saXN0JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0bGVmdDogXCItPTI3ODQwXCJcclxuXHRcdFx0fSwgMjAwKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQkKCcuc2xpZGUtbmV4dCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0c2xpZGVJbWFnZU5leHQoKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLnNsaWRlLXByZXYnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdHNsaWRlSW1hZ2VQcmV2KCk7XHJcblx0fSk7XHJcblxyXG5cdHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBcclxuXHRcdHNsaWRlSW1hZ2VOZXh0KCk7XHJcblx0fSwgMTAwMDApO1xyXG5cclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHJcblx0bGV0IHNoYXJpbmcgPSAkKCcuc2hhcmUtYm94JyksXHJcblx0XHRzb2NpYWxCb3hTaGFyaW5nID0gJCgnLmZvb3Rlci1zb2Mtc2hhcmUtYm94JyksXHJcblx0XHR1cExpbmsgPSAkKCcuYmFjay1zZWN0b3ItbWFpbi1hcnRpY2xlLXVwLWxpbmsnKSxcclxuXHRcdGFydEhnaHQgPSA1MDA7XHJcblxyXG5cdHNoYXJpbmcub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c29jaWFsQm94U2hhcmluZy5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xyXG5cdH0pO1xyXG5cclxuXHR1cExpbmsub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCBpZCA9ICQodGhpcykuYXR0cignaHJlZicpLFxyXG5cdFx0XHR0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3A7XHJcblx0XHQkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDEwMDApO1xyXG5cdH0pO1xyXG5cclxuXHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblx0XHRpZiAodG9wID4gYXJ0SGdodCkge1xyXG5cdFx0XHR1cExpbmsuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR1cExpbmsuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdGxldCB0YWJzQ29udHJvbExpbmsgPSAkKCcuYmFjay1zZWN0b3ItbWFpbi1jb250cm9sLWxpc3QtbGluaycpLFxyXG5cdFx0dGFic0NvbnRlbnQgPSAkKCcuYmFjay1zZWN0b3ItbWFpbi1jb250ZW50LWxpc3QtaXRlbScpLFxyXG5cdFx0ZnJvbnRDb250ZW50ID0gJCgnLmZyb250LXNlY3RvcicpLFxyXG5cdFx0YmFja0NvbnRlbnQgPSAkKCcuYmFjay1zZWN0b3InKSxcclxuXHRcdGVudGVyTGluayA9ICQoJy5mcm9udC1zZWN0b3ItZm9vdGVyLWxpbmsnKSxcclxuXHRcdGFydGljbGVDb250cm9sTGluayA9ICQoJy5iYWNrLXNlY3Rvci1tYWluLWFydGljbGUtbGluaycpLFxyXG5cdFx0YXJ0aWNsZUNvbnRlbnQgPSAkKCcuYmFjay1zZWN0b3ItbWFpbi1hcnRpY2xlcy1jb250ZW50LWxpc3QtaXRlbScpO1xyXG5cclxuXHRlbnRlckxpbmsub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZnJvbnRDb250ZW50LmFuaW1hdGUoe1xyXG5cdFx0XHRvcGFjaXR5OiAwXHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRmcm9udENvbnRlbnQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdFx0YmFja0NvbnRlbnQuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblx0XHRcdGJhY2tDb250ZW50LmFuaW1hdGUoe1xyXG5cdFx0XHRcdG9wYWNpdHk6IDFcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdH0sIDEwMDEpO1xyXG5cdH0pO1xyXG5cclxuXHR0YWJzQ29udHJvbExpbmsub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnLmJhY2stc2VjdG9yLW1haW4tc3RhcnQtYm94JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdGxldCB0YWJzSXRlbSA9ICQodGhpcykuY2xvc2VzdCgnLmJhY2stc2VjdG9yLW1haW4tY29udHJvbC1saXN0LWl0ZW0nKSxcclxuXHRcdFx0dGFic0l0ZW1Qb3NpdGlvbiA9IHRhYnNJdGVtLmluZGV4KCk7XHJcblx0XHR0YWJzQ29udGVudC5lcSh0YWJzSXRlbVBvc2l0aW9uKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKS5zaWJsaW5ncygpLmNzcygnZGlzcGxheScsICdub25lJykuY2xvc2VzdCgnLmJhY2stc2VjdG9yLW1haW4tbGlzdC1pdGVtLXNlY29uZCcpLmNzcygnYmFja2dyb3VuZCcsICd3aGl0ZScpO1xyXG5cdFx0dGFic0NvbnRyb2xMaW5rLmVxKHRhYnNJdGVtUG9zaXRpb24pLmFkZENsYXNzKCdiYWNrLXNlY3Rvci1tYWluLWNvbnRyb2wtbGlzdC1saW5rLWhvdmVyZWQnKS5jbG9zZXN0KCcuYmFjay1zZWN0b3ItbWFpbi1jb250cm9sLWxpc3QtaXRlbScpLmFkZENsYXNzKCdiYWNrLXNlY3Rvci1tYWluLWNvbnRyb2wtbGlzdC1pdGVtLWhvdmVyZWQnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdiYWNrLXNlY3Rvci1tYWluLWNvbnRyb2wtbGlzdC1pdGVtLWhvdmVyZWQnKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdiYWNrLXNlY3Rvci1tYWluLWNvbnRyb2wtbGlzdC1saW5rLWhvdmVyZWQnKTtcclxuXHRcdGxldCBhcnRpY2xlSXRlbXMgPSAkKCcuYmFjay1zZWN0b3ItbWFpbi1hcnRpY2xlcy1jb250cm9sLWxpc3QtaXRlbScpO1xyXG5cdFx0YXJ0aWNsZUl0ZW1zLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuXHRcdGFydGljbGVDb250ZW50LmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0fSk7XHJcblxyXG5cdGFydGljbGVDb250cm9sTGluay5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgYXJ0aWNsZUl0ZW0gPSAkKHRoaXMpLmNsb3Nlc3QoJy5iYWNrLXNlY3Rvci1tYWluLWFydGljbGVzLWNvbnRyb2wtbGlzdC1pdGVtJyksXHJcblx0XHRhcnRpY2xlSXRlbVBvc2l0aW9uID0gYXJ0aWNsZUl0ZW0uaW5kZXgoKTtcclxuXHRcdGFydGljbGVDb250ZW50LmVxKGFydGljbGVJdGVtUG9zaXRpb24pLmNzcygnZGlzcGxheScsICdibG9jaycpLnNpYmxpbmdzKCkuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdGxldCBpZCA9ICQodGhpcykuYXR0cignaHJlZicpLFxyXG5cdFx0XHR0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3A7XHJcblx0XHQkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDEwMDApO1xyXG5cdFx0bGV0IGFydGljbGVJdGVtcyA9ICQoJy5iYWNrLXNlY3Rvci1tYWluLWFydGljbGVzLWNvbnRyb2wtbGlzdC1pdGVtJyk7XHJcblx0XHRhcnRpY2xlSXRlbXMuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHR9KTtcclxuXHJcbn0pOyJdfQ==
