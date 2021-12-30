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
	breakpoints: {
		100: {
			slidesPerView: 1,
		},
		1200: {
			slidesPerView: 2,
		},
	}
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
	menu.classList.remove('active');
			burger.classList.remove('active');
});
linkAboutBook.addEventListener("click", function (e) {
	document.getElementById("about-book").scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
	menu.classList.remove('active');
	burger.classList.remove('active');
});
linkBookContent.addEventListener("click", function (e) {
	document.getElementById("book-content").scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
	menu.classList.remove('active');
	burger.classList.remove('active');
});
linkReviews.addEventListener("click", function (e) {
	document.getElementById("reviews").scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
	menu.classList.remove('active');
	burger.classList.remove('active');
});
linkBuy.addEventListener("click", function (e) {
	document.getElementById("buy").scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
	menu.classList.remove('active');
	burger.classList.remove('active');
});
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const wrapper = document.querySelector('.wrapper');
console.log(wrapper);
burger.addEventListener("click", function (e) {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	wrapper.classList.toggle('ov-hidden');
});

menu.addEventListener('touchstart', handleTouchStart, false);
menu.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
	xDown = evt.touches[0].clientX;
	yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
	if (!xDown || !yDown) {
		return;
	}
	var xUp = evt.touches[0].clientX;
	var yUp = evt.touches[0].clientY;
	var xDiff = xDown - xUp;
	var yDiff = yDown - yUp;

	if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
		if (xDiff > 0) {
			/* left swipe */
			menu.classList.remove('active');
			burger.classList.remove('active');
		} else {
			/* right swipe */
			menu.classList.remove('active');
			burger.classList.remove('active');
		}
	} else {
		if (yDiff > 0) {
			/* up swipe */
		} else {
			/* down swipe */
		}
	}
	/* reset values */
	xDown = null;
	yDown = null;
};