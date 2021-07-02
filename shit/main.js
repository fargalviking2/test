"use strict"

const questionButtons = document.querySelectorAll('.question__button');
const returnButton = document.querySelector('.return-button');

for (let index = 0; index < questionButtons.length; index++) {
	const questionButton = questionButtons[index];
	questionButton.addEventListener("click", function (e) {
		questionButton.parentElement.parentElement.classList.add('hidden');
	});
	if (returnButton) {
		returnButton.addEventListener("click", function (e) {
			result = 0;
			questionButton.parentElement.parentElement.classList.remove('hidden');
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"
			});
		});
	}
}




// if (questionButtons) {
// 	questionButtons.addEventListener("click", function (e) {

// 		console.log('yes');
// 	});
// }

const alertButtons = document.querySelectorAll('.alert');
for (let index = 0; index < alertButtons.length; index++) {
	const alertButton = alertButtons[index];
	alertButton.addEventListener("click", function (e) {
		alertButton.parentElement.classList.add('hidden');
		alert('Это шутка?');
	});
}

let result = 0;

const popupTitle = document.querySelector('.popup__title');

const fight = document.querySelector('.fight');
if (fight) {
	fight.addEventListener("click", function (e) {
		popupTitle.textContent = 'Драка? Не-а. Шанс получить травму или разборку с полицией. В большинстве случаев я попытаюсь её избежать. "Вне ринга" последний раз дрался в 14, и то, это были "разборки" тупых подростков.'
	});
}

const pizza = document.querySelector('.pizza');
if (pizza) {
	pizza.addEventListener("click", function (e) {
		popupTitle.textContent = 'YES OF COURSE'
		result++;
	});
}

const cake = document.querySelector('.cake');
if (cake) {
	cake.addEventListener("click", function (e) {
		popupTitle.textContent = 'Неплохо, но нет, пицца выигрывает по полезности.'
	});
}

const iceCream = document.querySelector('.ice-cream');
if (iceCream) {
	iceCream.addEventListener("click", function (e) {
		popupTitle.textContent = 'Вкусно, но пицца всё равно the best.'
	});
}

const jump = document.querySelector('.jump');
if (jump) {
	jump.addEventListener("click", function (e) {
		popupTitle.textContent = 'Да, на солнечном пляже, додумался спрыгнуть с одного отрезка пирса на другой, с человеком на руках. До сих пор вспоминаю этот идиотизм, падение с пирса вправо, на мелководье, могло быть очень опасным. К счастью, спрыгнул удачно, удержался на ногах.';
		result++;
	});
}

const sea = document.querySelector('.sea');
if (sea) {
	sea.addEventListener("click", function (e) {
		popupTitle.textContent = 'Ледяной её назвать некорректно, но согреться за счёт энергичного плаванья не удалось, и спустя минут 5, я довольно замерз. Однако, далеко не отплывал, вернулся без проблем. Так что этот вариант на самый опасный не тянет.'
	});
}

const sport = document.querySelector('.sport');
if (sport) {
	sport.addEventListener("click", function (e) {
		result++;
		popupTitle.textContent = 'Спорт мне довольно хорошо давался, но перспективы в карьере проф-спортсмена или тренера такие себе,так что я передумал посвящать этому жизнь. Однако, этот ответ тоже правильный.'
	});
}

const brain = document.querySelector('.brain');
if (brain) {
	brain.addEventListener("click", function (e) {
		result++;
		popupTitle.textContent = 'Шахматы, олимпиады по математике, программирование и прочее.Судя по всему этому, я довольно умён. Но я весьма "рассеян" и нередко умудряюсь терять вещи в собственной квартире 😅'
	});
}

const fiol = document.querySelector('.fiol');
if (fiol) {
	fiol.addEventListener("click", function (e) {
		result++;
		popupTitle.textContent = 'Наверное он, даже не знаю, почему.'
	});
}

const green = document.querySelector('.green');
if (green) {
	green.addEventListener("click", function (e) {
		popupTitle.textContent = 'Цвет моих глаз, мне он довольно нравится (голубые линзы думал носить в основном потому, что глаза были красные от недосыпа тогда 👌). Но правильный ответ-фиолетовый.'
	});
}

const red = document.querySelector('.red');
if (red) {
	red.addEventListener("click", function (e) {
		popupTitle.textContent = 'Красный классно смотрится, у меня довольно много красных вещей, но ты не угадала)'
	});
}

const wasp = document.querySelector('.wasp');
const wasp2 = document.querySelector('.wasp2');
const wasp3 = document.querySelector('.wasp3');
if (wasp) {
	wasp.addEventListener("click", function (e) {
		popupTitle.textContent = 'Я подумал, комары всё же бесят больше'
	});
}
if (wasp2) {
	wasp2.addEventListener("click", function (e) {
		popupTitle.textContent = ' ';
		result++;
		popupTitle.innerHTML = `<img class="wasp-img" src="wasp.jpg" alt="">`
	});
}
if (wasp3) {
	wasp3.addEventListener("click", function (e) {
		result++;
		popupTitle.textContent = 'Я подумал, комары всё же бесят больше. Ну да ладно, ответ засчитаем как верный :)'
	});
}

const q6 = document.querySelectorAll('.strategy, .shooters, .role-playing');
console.log(q6);
if (q6.length > 0) {
	for (let index = 0; index < q6.length; index++) {
		const q6button = q6[index];
		q6button.addEventListener("click", function (e) {
			result++;
			popupTitle.textContent = 'Последние годы в игры почти не играю, но до 16 обожал стратегии. Намного реже играл в шутеры или ролевые. В "постельные" ролевые ещё не играл 😄'
		});
	}
}

const like = document.querySelector('.like');
if (like) {
	like.addEventListener("click", function (e) {
		result++;
		popupTitle.textContent = 'Ты точно посмотришь, этот вариант, надо придумать что-то пооригинальнее. Или просто уйду от темы, да и я уже в автобусе домой еду, кажется мне в телефон пяляться.'
	});
}

const practice = document.querySelector('.practice');
if (practice) {
	practice.addEventListener("click", function (e) {
		result++;
		popupTitle.textContent = 'Верно, техническая реализация этого теста довольно интересна. Это несложно, но мне подобное ещё не попадалось.'
	});
}

const boring = document.querySelector('.boring');
if (boring) {
	boring.addEventListener("click", function (e) {
		result++;
		popupTitle.textContent = 'И этот вариант тоже верный.'
	});
}

const came = document.querySelector('.came');
if (came) {
	came.addEventListener("click", function (e) {
		result++;
		popupTitle.textContent = 'Нас 4 человека на практике, и я единственный пришедший до начала, без опоздания. Повезло-повезло)'
	});
}

const eyes = document.querySelector('.eyes');
if (eyes) {
	eyes.addEventListener("click", function (e) {
		popupTitle.textContent = 'Я, конечно, красивый, но препод мужского пола, так что этот вариант точно отметается. Надеюсь)'
	});
}

const axaxa = document.querySelector('.axaxa');
if (axaxa) {
	axaxa.addEventListener("click", function (e) {
		axaxa.parentElement.classList.add('hidden');
		alert('Ты серьёзно? 🙃')
	});
}

const write = document.querySelector('.write');
if (write) {
	write.addEventListener("click", function (e) {
		popupTitle.textContent = 'Вообще мимо'
	});
}

const notCame = document.querySelector('.not-came');
if (notCame) {
	notCame.addEventListener("click", function (e) {
		result++;
		popupTitle.textContent = '2 из 3 моих друзей - однокурсников не пришли, так что это тоже верно)'
	});
}

const watch = document.querySelector('.watch');
if (watch) {
	watch.addEventListener("click", function (e) {
		result++;
		popupTitle.textContent = '🙃🙃🙃'
	});
}

const dark = document.querySelector('.dark');
if (dark) {
	dark.addEventListener("click", function (e) {
		result++;
		popupTitle.textContent = 'Чёрные, как моя душа, ха-ха. Ты угадала, но вообще я белый и пушистый.'
	});
}

const white = document.querySelector('.white');
if (white) {
	white.addEventListener("click", function (e) {
		popupTitle.textContent = 'Не сегодня'
	});
}

const greenEyes = document.querySelector('.green-eyes');
if (greenEyes) {
	greenEyes.addEventListener("click", function (e) {
		popupTitle.textContent = 'Не сегодня'
	});
}


const results = document.querySelector('.res');


if (results) {
	results.addEventListener("click", function (e) {
		if (result < 1) {
			popupTitle.textContent = `${result} правильных ответов,серьезно?`;
		}
		else if (result < 2) {
			popupTitle.textContent = `${result} ответ оказался правильным`;
		}
		else if (result < 5) {
			popupTitle.textContent = `${result} ответа оказались правильными`;
		}
		else if (result < 10) {
			popupTitle.textContent = `${result} ответов оказались правильными`;
		}
		else {
			popupTitle.textContent = `Поздравляю, ни одной ошибки`;
		}
	});
}
