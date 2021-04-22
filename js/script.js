$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 2,
				}
			},
		]
	});
	$('.block2__slider2').slick({
		arrows: true,
		dots: false,
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$('.header__burger').click(function (event) {
		$('.header__burger,.sidebar').toggleClass('active');
	});
});
//arrows:(true п.у/false)- наличие и отсутствие стрелок
//dots:(true/false)- точки переключения слайдов
//adaptiveHeight:true-чтобы заработалобнадо задать align-items:flex-start для stick-track