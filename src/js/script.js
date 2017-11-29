'use strict';


$(function() {

let tabsControlLink = $('.tabs-control-link'),
	tabsContent = $('.tabs-content-item'),
	frontContent = $('.front-sector'),
	backContent = $('.back-sector');

	frontContent.on('click', function(e) {
		e.preventDefault();
		$(this).animate({
			opacity: 0
		}, 1000);
		setTimeout(function(){
  			frontContent.css('display', 'none');
		}, 1001);
		setTimeout(function(){
		backContent.css('display', 'block');
		backContent.animate({
			opacity: 1
		}, 1000);
		}, 802);
	});

	tabsControlLink.on('click', function(e) {
			e.preventDefault();
			let tabsItem = $(this).closest('.tabs-control-item'),
				tabsItemPosition = tabsItem.index();
				tabsContent.eq(tabsItemPosition).css('display', 'block').siblings().css('display', 'none').closest('.second').css('background', 'white');
				tabsControlLink.eq(tabsItemPosition).addClass('tabs-control-link-hovered').closest('.tabs-control-item').addClass('tabs-control-item-hovered').siblings().removeClass('tabs-control-item-hovered').children().removeClass('tabs-control-link-hovered');
			let articleItems = $('.article-control-item');
				articleItems.css('display', 'inline-block');
				articleContent.css('display', 'none');
				console.log('qweqwqwe');
	});

let articleControlLink = $('.article-control-link'),
	articleContent = $('.article-content-item');


	articleControlLink.on('click', function(e) {
		e.preventDefault();
		let articleItem = $(this).closest('.article-control-item'),
			articleItemPosition = articleItem.index();
			articleContent.eq(articleItemPosition).css('display', 'block').siblings().css('display', 'none');
		let articleItems = $('.article-control-item');
			articleItems.css('display', 'none');
			console.log('hgdgkj');
	});

$('.tabs-content-honours-pic').on('click', function(e) {

		e.preventDefault();
		$('.tabs-content-modal').css('display', 'block');
	let honoursItem = $(this).closest('.tabs-content-honours-item'),
		honoursItemPosition = honoursItem.index();
		$('.tabs-content-honours-pic-large').eq(honoursItemPosition).css('display', 'block');

	});

$('.tabs-content-honours-pic-large').on('click', function(e) {

		e.preventDefault();
	$(this).css('display', 'none');
	$('.tabs-content-modal').css('display', 'none');

	});

$('.tabs-content-article-pic').on('click', function(e) {

		e.preventDefault();
		$('.tabs-content-modal').css('display', 'block');
		$('.tabs-content-article-pic-large').css('display', 'block');
		console.log('asdfd');

	});

$('.tabs-content-article-pic-large').on('click', function(e) {

		e.preventDefault();
	$(this).css('display', 'none');
	$('.tabs-content-modal').css('display', 'none');
	console.log('uoio');

	});

$('.tabs-content-literature').hover(
  function() {
    $(this).children('.tabs-content-literature-cover').css('width', '102%');
    $(this).children().children('.tabs-content-literature-cover-text').css('display', 'block');
  }, function() {
    $('.tabs-content-literature-cover').css('width', '0');
    $(this).children().children('.tabs-content-literature-cover-text').css('display', 'none');
  }
);


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

	$('.slider-next').click(function() {

slideImageNext();

	});

		$('.slider-prev').click(function() {

slideImagePrev();

	});

setInterval(function() { 
	slideImageNext();
}, 10000);


let sharing = $('.footer-social-item:nth-child(2)'),
	socialBoxSharing = $('.footer-social-box-sharing');

	sharing.on('click', function(e) {
		e.preventDefault();
		socialBoxSharing.slideToggle('fast');
	});


	$('.article-content-up-link').on('click', function (e) {
		e.preventDefault();
		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

		let artHght = 500;

	$(window).scroll(function(){

		let top = $(this).scrollTop();
		let upLink = $('.article-content-up-link');

		if (top > artHght) {
			upLink.css('display', 'block');
		} else {
			upLink.css('display', 'none');
		}

	});

});