
// new Swiper('image-slider');
new Swiper('.image-slider', {
	speed: 400,
	spaceBetween: 100,
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
new Swiper('.image-slider2', {
	speed: 400,
	spaceBetween: 20,
	grabCursor: true,
	slidesPerView: 4.2,
	loop: true,
	autoplay: {
		delay: 1500,
		stopOnLastSlide: false,
		disabledOnInteraction: false
	},
	breakpoints: {
		100: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1100: {
			slidesPerView: 3,
		},
		1330: {
			slidesPerView: 4.2,
		},

	}
});
new Swiper('.slider3', {
	speed: 400,
	spaceBetween: 100,
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
	loop: true,
	autoHeight: true,
	slidesPerView: 1,
});
new Swiper('.image-slider4', {
	speed: 400,
	spaceBetween: 20,
	grabCursor: true,
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 1500,
		stopOnLastSlide: false,
		disabledOnInteraction: false
	},
	navigation: {
		nextEl: '.swiper-button-next4',

	},
});
new Swiper('.slider5', {
	speed: 400,
	spaceBetween: 20,
	grabCursor: true,
	slidesPerView: 1.3,
	loop: true,
	autoplay: {
		delay: 1500,
		stopOnLastSlide: false,
		disabledOnInteraction: false
	},
	breakpoints: {
		100: {
			slidesPerView: 1,
		},
		450: {
			slidesPerView: 1.3,
		},
		477: {
			slidesPerView: 1,
		},
	}
});
const burger = document.querySelector('.header__burger');
const right = document.querySelector('.header__right');
const wrapper = document.querySelector('.wrapper');
burger.addEventListener("click", function (e) {
	burger.classList.toggle('active');
	right.classList.toggle('active');
	wrapper.classList.toggle('hidden');
});
