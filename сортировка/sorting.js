"use strict"

const redBlocks = document.getElementsByClassName('grid-element__red');
const greenBlocks = document.getElementsByClassName('grid-element__green');
const purpleBlocks = document.getElementsByClassName('grid-element__purple');

const redButton = document.querySelector('.red');
const greenButton = document.querySelector('.green');
const purpleButton = document.querySelector('.purple');
const summButton = document.querySelector('.summ');

const redButtonX2 = document.querySelector('.red-x2');
const greenButtonX2 = document.querySelector('.green-x2');
const purpleButtonX2 = document.querySelector('.purple-x2');

const redButtonAmmount = document.querySelector('.red-ammount');
const greenButtonAmmount = document.querySelector('.green-ammount');
const purpleButtonAmmount = document.querySelector('.purple-ammount');

let redBlocksAmmount = redBlocks.length;
let greenBlocksAmmount = greenBlocks.length;
let purpleBlocksAmmount = purpleBlocks.length;
let summButtonAmmount = redBlocks.length + greenBlocks.length + purpleBlocks.length;

redButtonAmmount.textContent = `Красных: ${redBlocksAmmount}`;
greenButtonAmmount.textContent = `Зелёных: ${greenBlocksAmmount}`;
purpleButtonAmmount.textContent = `Фиолетовых: ${purpleBlocksAmmount}`
summButton.textContent = `Всего: ${summButtonAmmount}`
// if (redButton) {
// 	redButton.addEventListener("click", function (e) {
// 		redBlocks.classList.add('_active');

// 	});
// }

// for (let index = 0; index < greenBlocks.length; index++) {
// 	const redButtonI = redButton[index];
// 	redButton.addEventListener("click", function (e) {
// 		console.log('dsds');
// 		redBlocks[i].classList.remove('_active');
// 	});
// }
redButton.addEventListener("click", function (e) {
	for (var i = 0; i < redBlocks.length; i++) {
		redBlocks[i].classList.toggle('_active');
		if (redBlocks[i].classList.contains('_active')) {
			redBlocksAmmount = redBlocks.length;
			summButtonAmmount += 1;
			summButton.textContent = `Всего: ${summButtonAmmount}`
		} else {
			redBlocksAmmount = 0;
			summButtonAmmount -= 1;
			summButton.textContent = `Всего: ${summButtonAmmount}`
		}
		redButtonAmmount.textContent = `Красных: ${redBlocksAmmount}`
	}
});

greenButton.addEventListener("click", function (e) {
	for (var i = 0; i < greenBlocks.length; i++) {
		greenBlocks[i].classList.toggle('_active');
		if (greenBlocks[i].classList.contains('_active')) {
			greenBlocksAmmount = greenBlocks.length;
			summButtonAmmount += 1;
			summButton.textContent = `Всего: ${summButtonAmmount}`
		} else {
			greenBlocksAmmount = 0;
			summButtonAmmount -= 1;
			summButton.textContent = `Всего: ${summButtonAmmount}`
		}
		greenButtonAmmount.textContent = `Зелёных: ${greenBlocksAmmount}`
	}
});
purpleButton.addEventListener("click", function (e) {
	for (var i = 0; i < purpleBlocks.length; i++) {
		purpleBlocks[i].classList.toggle('_active');
		if (purpleBlocks[i].classList.contains('_active')) {
			purpleBlocksAmmount = purpleBlocks.length;
			summButtonAmmount += 1;
			summButton.textContent = `Всего: ${summButtonAmmount}`
		} else {
			purpleBlocksAmmount = 0;
			summButtonAmmount -= 1;
			summButton.textContent = `Всего: ${summButtonAmmount}`
		}
		purpleButtonAmmount.textContent = `Фиолетовых: ${purpleBlocksAmmount}`
	}
});
// redButtonAmmount.addEventListener('click', () => {
// 	redButtonAmmount.textContent = `Красных: ${redBlocksAmmount}`
// });


redButtonX2.addEventListener('click', () => {
	let redBlocksLength = redBlocks.length;
	for (var i = 0; i < redBlocksLength; i++) {
		console.log('yes');
		const cloneRedblock = redBlocks[i].cloneNode(true);
		redBlocks[i].after(cloneRedblock);
		redBlocksAmmount = redBlocks.length;
		redButtonAmmount.textContent = `Красных: ${redBlocksAmmount}`;
		summButtonAmmount += 1;
		summButton.textContent = `Всего: ${summButtonAmmount}`;
	}
});
greenButtonX2.addEventListener('click', () => {
	let greenBlocksLength = greenBlocks.length;
	for (var i = 0; i < greenBlocksLength; i++) {
		console.log('yes');
		const cloneGreenblock = greenBlocks[i].cloneNode(true);
		greenBlocks[i].after(cloneGreenblock);
		greenBlocksAmmount = greenBlocks.length;
		greenButtonAmmount.textContent = `Зелёных: ${greenBlocksAmmount}`;
		summButtonAmmount += 1;
		summButton.textContent = `Всего: ${summButtonAmmount}`;
	}
});
purpleButtonX2.addEventListener('click', () => {
	let purpleBlocksLength = purpleBlocks.length;
	for (var i = 0; i < purpleBlocksLength; i++) {
		console.log('yes');
		const clonePurpleblock = purpleBlocks[i].cloneNode(true);
		purpleBlocks[i].after(clonePurpleblock);
		purpleBlocksAmmount = purpleBlocks.length;
		purpleButtonAmmount.textContent = `Фиолетовых: ${purpleBlocksAmmount}`;
		summButtonAmmount += 1;
		summButton.textContent = `Всего: ${summButtonAmmount}`;
	}
});
