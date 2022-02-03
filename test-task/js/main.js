const App = {
	data() {
		return {
			playCounter: 0,
			roundCounter: 1,
			winCounter: 0,
			element1: 0,
			element2: 0,
			e1TargetIndex: 0,
			e2TargetIndex: 0,
			tiles: [
				{
					color: '#666',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#446',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#123',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#321',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#987',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#123',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#446',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#226',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#666',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#226',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#987',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#321',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#391',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#726',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#726',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#391',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#415',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#398',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#415',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#398',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#567',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#723',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#723',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#567',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#871',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#382',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#382',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#512',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#871',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
				{
					color: '#512',
					condition: 1,
					blanketOpacity: 1,
					display: 'block',
					hidden: false,
				},
			],

		}
	},
	methods: {
		play(e) {
			let targetItem = e.target;
			if (targetItem.closest('.element-content')) {
				this.playCounter++;

				if (this.playCounter === 1) {
					this.element1 = e.target.style.backgroundColor;
					this.tiles[this.e1TargetIndex].blanketOpacity = 0;
				}
				if (this.playCounter === 2) {
					this.element2 = e.target.style.backgroundColor;

					this.tiles[this.e2TargetIndex].blanketOpacity = 0;
					if (this.element1 == this.element2) {
						this.roundCounter++;
						this.tiles[this.e1TargetIndex].hidden = true;
						this.tiles[this.e2TargetIndex].hidden = true;
						setTimeout(() =>
							this.tiles[this.e1TargetIndex].display = 'none'
							, 1000);
						setTimeout(() =>
							this.tiles[this.e2TargetIndex].display = 'none'
							, 1000);
						setTimeout(() =>
							this.winCounter++
							, 1000);
					}
					else {
						this.roundCounter++;
						setTimeout(() =>
							this.tiles[this.e1TargetIndex].blanketOpacity = 1
							, 1000);
						setTimeout(() =>
							this.tiles[this.e2TargetIndex].blanketOpacity = 1
							, 1000);
					}
					setTimeout(() =>
						this.playCounter = 0
						, 1000);
				}
			}
		},
		sendIndex(idx) {
			if (this.playCounter === 0) {
				this.e1TargetIndex = idx
			}
			if (this.playCounter === 1) {
				this.e2TargetIndex = idx
			}
		}
	},


}
const app = Vue.createApp(App)
app.mount('#app')


