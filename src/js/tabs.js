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