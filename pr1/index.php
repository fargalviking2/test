<!DOCTYPE html>
<html lang="ru">
	<head>
		<title>«Привычки» — книга Кристины Акименко</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
		<link rel="manifest" href="/site.webmanifest">
		<link rel="stylesheet" href="main.css?v=<?=time()?>">
	</head>
	<body>
		<div class="scroll">
			<img src="images/scroll.svg" />
		</div>
		<div class="morph-wrap">
			<svg class="morph" width="1400" height="770" viewBox="0 0 1400 770">
				<path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"/>
			</svg>
		</div>
		<div class="main-wrapper">
			<div class="main-container">
				<div class="left-side">
					<?/*
					<a class="telegram" href="#">
						Напишите мне <br>в Telegram
					</a>
					*/?>
					<div id="textblock1" class="text-block">
						<h2><span>Книга «Привычки. Лучшая версия тебя»</span><ins></ins></h2>
						Меня зовут Кристина Акименко. В&nbsp;своей книге я&nbsp;делюсь своим опытом и&nbsp;рассказываю, как шаг за&nbsp;шагом можно изменить жизнь, добавляя в&nbsp;свой распорядок простые, но&nbsp;эффективные привычки. Книга содержит большое количество практического материала, поданного не&nbsp;сухим языком учебника, а&nbsp;в&nbsp;художественной форме, что делает усвоение легким и&nbsp;увлекательным.
					</div>
					<div id="textblock3" class="text-block">
						<h2><span>Обо мне</span><ins></ins></h2>
						Я&nbsp;бизнесвумен, бизнес-ангел, основатель и&nbsp;генеральный директор IT-компании «Евротехнолоджи», писательница и&nbsp;мать троих детей. Я&nbsp;смогла добиться поставленных перед собой целей и&nbsp;воплотить в&nbsp;жизнь свои проекты благодаря новому стилю жизни, которым делюсь с&nbsp;вами в&nbsp;книге.
					</div>
				</div>
				<div class="cover-wrapper">
					<div class="cover">
						<img class="bg" src="images/cover-bg.svg?v=3" alt="" />
						<img id="author" class="author" src="images/cover-author.svg" alt="" />
						<img id="title" class="title" src="images/cover-name.svg" alt="" />
						<img id="woman" class="woman" src="images/cover-woman.svg" alt="" />
						<img id="slogan" class="slogan" src="images/cover-slogan.svg" alt="" />
						<img id="animate" class="stair" src="images/cover-stairway.svg" alt="" />
						<span class="shade1"></span>
						<span class="shade2"></span>
					</div>
					<div class="button-bar">
						<button id="btn" class="btn-order btn-animate">Заказать</button>
					</div>
				</div>
				<div class="right-side">
					<div id="textblock2" class="text-block">
						<h2><ins></ins><span>О&nbsp;книге</span></h2>
						В&nbsp;конце каждой главы я&nbsp;адресую моему читателю вопросы. Таким образом, чтение книги дает развитие с&nbsp;получением глубокого инсайта на&nbsp;постоянной основе. Эта книга&nbsp;— тренажер, ты&nbsp;работаешь с&nbsp;книгой, будто общаешься с&nbsp;ней напрямую.
					</div>
					<div id="textblock4" class="text-block">
						<h2><ins></ins><span>Зачем тебе эта книга</span></h2>
						Книга будет интересна людям, которые хотят разобраться в&nbsp;себе и&nbsp;том, что их&nbsp;окружает, хотят понять взаимосвязи между событиями и&nbsp;их&nbsp;последствиями, хотят научиться черпать информацию из&nbsp;окружающего пространства и&nbsp;получать подсказки, как и&nbsp;в&nbsp;каком направлении развиваться.
						<br>
						Закажи мою книгу прямо сейчас и&nbsp;давай достигать поставленных целей вместе!
					</div>
				</div>
			</div>
			<div class="button-bar1">
				<button id="btn1" class="btn-order btn-animate">Заказать</button>
			</div>
			<div class="contacts-block">
				<div class="line">
					<span class="label">Напиши мне:</span>
					<a class="icon icon-tg" href="#"><img src="/images/tg.svg" alt=""></a>
					<a class="icon" href="https://wa.me/79857733745"><img src="/images/whatsapp.svg" alt=""></a>
				</div>
				<div class="line">
					<span class="label">Позвони:</span>
					<a class="phone" href="tel:+79857733745">+7 985 773 37 45</a>
				</div>
			</div>
		</div>

		<div id="overlay" class="overlay"></div>
		<div id="win" class="form-window">
			<form id="form" class="" action="/send.php" method="post">
				<div class="caption">Заказать книгу</div>
				<div class="text">
					Стоимость книги&nbsp;— 1700&nbsp;рублей.<br/>
					PDF-версия книги&nbsp;— 500&nbsp;рублей.<br/>
					Также доступна для предзаказа аудио-книга.<br/>
					Для заказа напишите мне в&nbsp;удобный для вас мессенджер или в&nbsp;форме ниже. Не&nbsp;забудьте в&nbsp;сообщении указать выбранную версию книги.
				</div>
				<div class="contacts-block">
					<div class="line">
						<a class="icon icon-tg" href="#"><img src="/images/tg.svg" alt=""></a>
						<a class="icon" href="https://wa.me/79857733745"><img src="/images/whatsapp.svg" alt=""></a>
					</div>
				</div>
				<input class="field input-check" type="text" name="name" value="" placeholder="Ваше имя">
				<input class="field" type="email" name="email" value="" placeholder="Email" style="position: absolute; left:-10000px; top: -10000px;">
				<input class="field input-check" type="email" name="banana" value="" placeholder="Email">
				<?/*<input class="field" type="text" name="shipping" value="" placeholder="Предпочитаемый способ доставки">*/?>
				<textarea class="field" name="address" placeholder="Ваше сообщение"></textarea>
				<button id="form-submit" type="submit">Отправить</button>
				<div class="notify1">Не заполнены обязательные поля</div>
				<div class="notify2">Заявка успешно отправлена, мы свяжемся с Вами в ближайшее время!</div>
			</form>
			<button id="win-hide" type="button" class="close">
				<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M284.286 256.002L506.143 34.144C513.954 26.333 513.954 13.669 506.143 5.85898C498.332 -1.95102 485.668 -1.95202 477.858 5.85898L256 227.717L34.143 5.85898C26.332 -1.95202 13.668 -1.95202 5.85801 5.85898C-1.95199 13.67 -1.95299 26.334 5.85801 34.144L227.715 256.001L5.85801 477.859C-1.95299 485.67 -1.95299 498.334 5.85801 506.144C9.76301 510.049 14.882 512.001 20.001 512.001C25.12 512.001 30.238 510.049 34.144 506.144L256 284.287L477.857 506.144C481.762 510.049 486.881 512.001 492 512.001C497.119 512.001 502.237 510.049 506.143 506.144C513.954 498.333 513.954 485.669 506.143 477.859L284.286 256.002Z" fill="#3c3c3c"></path>
			    </svg>
			</button>
		</div>

		<div class="nomobile" style="height:800px;"></div>

		<div id="step1" class="nomobile"></div>

		<div class="content-wrap nomobile">
			<div style="height:800px;" class="content content--layout content--layout-1"></div>
		</div>

		<div id="step2" class="nomobile"></div>

		<div class="content-wrap nomobile">
			<div style="height:800px;" class="content content--layout content--layout-2"></div>
		</div>

		<div id="step3" class="nomobile"></div>

		<div class="content-wrap nomobile">
			<div style="height:800px;" class="content content--layout content--layout-3"></div>
		</div>

		<div id="step4" class="nomobile"></div>

		<div id="step6" class="nomobile"></div>

		<div class="content-wrap nomobile">
			<div style="height:800px;" class="content content--layout content--layout-4"></div>
		</div>

		<div id="step5" class="nomobile"></div>

		<div class="content-wrap nomobile">
			<div style="height:1800px;" class="content content--layout content--layout-5"></div>
		</div>

		<div class="detector"></div>

		<script src="js/jquery-3.6.0.min.js"></script>
		<script src="js/tweenmax.min.js"></script>
		<script src="js/scrollmagic.min.js"></script>
		<script src="js/animation.gsap.min.js"></script>

		<script src="js/imagesloaded.pkgd.min.js"></script>
		<script src="js/anime.min.js"></script>
		<script src="js/scrollMonitor.js"></script>
		<script src="js/a.js"></script>

		<script>
			if ($('.detector').is(":hidden")) {
				$('body').removeClass('ismobile');
				var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
				var tween1 = TweenMax.to("#animate", 1, {scaleX:1,scaleY:1, y:0});
				var scene = new ScrollMagic.Scene({triggerElement: "#step1", duration: 200, offset: 0})
					.setTween(tween1)
					.addTo(controller);

				var tween4 = TweenMax.to("#slogan", 1, {scaleX:1,scaleY:1, y:0, x:'0'});
				var scene = new ScrollMagic.Scene({triggerElement: "#step1", duration: 200, offset: 0})
					.setTween(tween4)
					.addTo(controller);

				var tween5 = TweenMax.to("#woman", 1, {scaleX:1,scaleY:1, y:0, x:'0'});
				var scene = new ScrollMagic.Scene({triggerElement: "#step1", duration: 200, offset: 0})
					.setTween(tween5)
					.addTo(controller);

				var tween6 = TweenMax.to("#textblock1", 1, {opacity:1});
				var scene = new ScrollMagic.Scene({triggerElement: "#step2", duration: 200, offset: 0})
					.setTween(tween6)
					.addTo(controller);

				var tween7 = TweenMax.to("#textblock2", 1, {opacity:1});
				var scene = new ScrollMagic.Scene({triggerElement: "#step3", duration: 200, offset: 0})
					.setTween(tween7)
					.addTo(controller);

				var tween8 = TweenMax.to("#textblock3", 1, {opacity:1});
				var scene = new ScrollMagic.Scene({triggerElement: "#step4", duration: 200, offset: 0})
					.setTween(tween8)
					.addTo(controller);

				var tween9 = TweenMax.to("#textblock4", 1, {opacity:1});
				var scene = new ScrollMagic.Scene({triggerElement: "#step5", duration: 200, offset: 0})
					.setTween(tween9)
					.addTo(controller);

				var tween10 = TweenMax.to("#btn", 1, {y:0});
				var scene = new ScrollMagic.Scene({triggerElement: "#step6", duration: 200, offset: 0})
					.setTween(tween10)
					.addTo(controller);

				function parallax() {
					var parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
					$('.parallax').each(function() {
						var trig = this.parentNode, speed = 100 + '%';
						new ScrollMagic.Scene({triggerElement: trig})
							.setTween(this, {y: speed, ease: Linear.easeNone})
							.addTo(parallaxController);
					});
				}
			} else {
				$('body').addClass('ismobile');
			}

			$(window).resize(function() {
				if ($('.detector').is(":hidden")) {
					$('body').removeClass('ismobile');
				} else {
					$('body').addClass('ismobile');
				}
			});

			$(function() {
				$('#btn').click(function(){
					$('#overlay').show();
					$('#win').addClass('active');
				});
				$('#btn1').click(function(){
					$('#overlay').show();
					$('#win').addClass('active');
				});
				$('#overlay').click(function(){
					$('#overlay').hide();
					$('#win').removeClass('active');
					$(".notify1").hide();
					$(".notify2").hide();
					$("#form .field").val('');
				});
				$('#win-hide').click(function(){
					$('#overlay').hide();
					$('#win').removeClass('active');
					$(".notify1").hide();
					$(".notify2").hide();
					$("#form .field").val('');
				});

				$("#form-submit").click(function (event) {
					event.preventDefault();
					var form_data = $('#form').serialize();
					var $prnt = $("#form");
					var flag = true;
					$prnt.find(".input-check").each(function () {
						if ($(this).val() == "") {
							$(this).addClass("empty");
							flag = false;
							$(".notify1").show();
						} else {
							$(this).removeClass("empty");
							$(".notify1").hide();
						}
					});
					if (flag) {
						$("#form-submit").prop('disabled', true);
						$.ajax({
							type: "POST",
							url: "/send.php",
							data: form_data,
							success: function() {
								$("#form-submit").prop('disabled', false);
								$(".notify2").show();
							}
						});
					}
				});
			});
		</script>
	</body>
</html>
