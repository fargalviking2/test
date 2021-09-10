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
		};
	},
	methods: {
		onSpoiler(idx, it) {
			if (this.coursesCounter == this.courses[idx][it.position].id) {
				this.coursesCounter = 0
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
	// props: ['actualCost', 'needCost',],
	template: `
	<div class="grid-template__card">
		<div class="grid-template__block">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
		<button @click="spoiler" type="submit" class="grid-template__spoiler">show document</button>
	</div>
`
})
app.mount('#app')