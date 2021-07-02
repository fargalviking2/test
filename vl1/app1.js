
const App = {
	data() {
		return {
			placeholderString: 'Введите название заметки',
			title: 'Список заметок',
			inputValue: '',
			notes: ['Заметка 1', 'Заметка 2']
		}
	},
	methods: {
		inputChangeHandler(event) {
			this.inputValue = event.target.value
		},
		addNewNote() {
			if (this.inputValue !== '') {
				this.notes.push(this.inputValue);
				this.inputValue = '';
				if (this.notes.length > 7) {
					this.notes.splice(0, 1);
				}
			}
		},
		toUpperCase(item) {
			return item.toUpperCase()
		},
		removeNote(idx) {
			this.notes.splice(idx, 1)
		},
		removeAllNote() {
			this.notes.splice(0, 7);
		},
		orderChange() { }
	},
	computed: {
		doubleCountComputed() {
			return this.notes.length * 2
		},
	},
	watch: {
		inputValue(value) {
			if (value.length > 10) {
				this.inputValue = ''
			}
		}
	}
}

Vue.createApp(App).mount('#app')