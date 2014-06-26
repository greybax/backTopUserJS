// ==UserScript==
// @name backTopUserJS
// @author Aleksandr Filatov
// @license MIT
// @version 1.0
// ==/UserScript==

function main() {
	var disp = $(window).scrollTop() > 400 ? 'block' : 'none';
	var $upButton = $('<div class="up-button" title="Наверх" style="display:' + disp + '">Наверх</div>');

	$(document).find('body').append($upButton);
	$upButton.click(function () {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 400) $upButton.fadeIn('slow');
		else $upButton.fadeOut('slow');
	});
};

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ main +')();'));
(document.body || document.head || document.documentElement).appendChild(script);