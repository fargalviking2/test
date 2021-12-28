new Swiper('.image-slider', {
	speed: 400,
	spaceBetween: 300,
	loop: true, autoHeight: true,
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
});
new Swiper('.image-slider2', {
	speed: 400,
	spaceBetween: 200,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
	},

});
new Swiper('.image-slider3', {
	speed: 400,
	spaceBetween: 00,
	slidesPerView: 2,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3',
	},

});
linkMain.addEventListener("click", function (e) {
	document.getElementById("main").scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});
linkAboutMe.addEventListener("click", function (e) {
	document.getElementById("about-me").scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});
linkAboutBook.addEventListener("click", function (e) {
	document.getElementById("about-book").scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});
linkBookContent.addEventListener("click", function (e) {
	document.getElementById("book-content").scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});
linkReviews.addEventListener("click", function (e) {
	document.getElementById("reviews").scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});
linkBuy.addEventListener("click", function (e) {
	document.getElementById("buy").scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});
