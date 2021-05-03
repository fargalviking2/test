$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__2row,.header__block2').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.footer__title').click(function (event) {
		if ($('.block').hasClass('one')) {
			$('.footer__title').not($(this)).removeClass('active');
			$('.footer__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});