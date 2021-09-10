const App = {
	data() {
		return {
			courses: [
				[
					{ id: 1 },
					{ id: 2 },
					{ id: 3 },
				],
				[
					{ id: 4 },
					{ id: 5 },
					{ id: 6 },
				],
				[
					{ id: 7 },
					{ id: 8 },
					{ id: 9 },
				],
			],
			coursesCounter: 0,
			//если документы будут приходить с бэка,не как выше,массивами в массиве, а обычным массивом вот 2-й способ,смотри то,что закомменторовано. я проверял, работает
			// documents: [
			// 	{ src: 1 },
			// 	{ src: 2 },
			// 	{ src: 3 },
			// 	{ src: 4 },
			// 	{ src: 5 },
			// 	{ src: 6 },
			// 	{ src: 7 },
			// 	{ src: 8 },
			// 	{ src: 9 },
			// ],
			// documentsСounter: 0,
		};
	},
	methods: {
		onSpoiler(idx, it) {
			if (this.coursesCounter == this.courses[idx][it.position].id) {
				this.coursesCounter = 0
				//ищем нужный документ в массиве и получаем его src. В свойстве укажем реальный путь к файлу и подставим в html. нет, в выражении нет ошибки, хотя смотрится криво
				// this.documentsСounter = ++it.position + idx * 3 - 1;
				// console.log(this.documents[this.documentsСounter].src);
			}
			else { this.coursesCounter = this.courses[idx][it.position].id }
		}
	},
}
const app = Vue.createApp(App)
app.component('type-block', {
	props: ['position'],
	methods: {
		spoiler() {
			this.$emit('spoiler', {
				position: this.position,
			});
		}
	},
	template: `
	<div class="grid-template__card">
		<div class="grid-template__block">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
		<button @click="spoiler" type="submit" class="grid-template__spoiler">show document</button>
	</div>
`
})
app.mount('#app')