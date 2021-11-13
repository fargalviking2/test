// let yourName = document.getElementById('your-name');
// console.log(yourName);
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
btn.onclick = function () {
	let number = getRandomInt(1, 1000);
	console.log(number);
	if (number < 50) {
		text = "нанимо";
	} else if (number < 150) { text = "н2"; }
	else if (number < 200) { text = "н3"; }
	else if (number < 350) { text = "н4"; }
	else if (number < 475) { text = "н5"; }
	else {
		text = "текста нет";
	}
	if (number < 500) {
		btn.classList.toggle("rotate-full");
		btn.classList.remove("rotate")
	} else {
		btn.classList.toggle("rotate"); btn.classList.remove("rotate-full")
	}
	result.innerHTML = text;
}