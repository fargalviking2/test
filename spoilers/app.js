Vue.createApp({
	data() {
		return {
			courses: [
				{ id: 1 },
				{ id: 2 },
				{ id: 3 },
				{ id: 4 },
				{ id: 5 },
				{ id: 6 },
			],
			coursesCounter: 1,
		};
	},
	methods: {
		spoiler(idx) {
			if (this.coursesCounter == this.courses[idx].id) {
				this.coursesCounter = 0
			}
			else { this.coursesCounter = this.courses[idx].id }
			console.log(this.courses[idx].id);
		}
	}
}).mount('#app');