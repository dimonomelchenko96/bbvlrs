<template lang="pug">
.character
	Character(
		@showPopup='showPopup'
		:items="items")

	.popup-mob(:class="[popup ? 'active' : null]")
		Popup(@closePopup='hidePopup')
			Article

</template>

<script>


import Character from '~/components/Character/Character';
import Popup from '~/components/helpers/Popup';
import Article from '~/components/Article';


export default {

	components: {
		Character,
		Popup,
		Article
	},
	methods: {
		async showPopup(name) {
			this.currentName = name.toLowerCase();
			this.getNameData(this.currentName);
			this.popup = !this.popup;
		},
		hidePopup() {
			this.popup = !this.popup;
		},
		async getNameData(ad) {
			const result = await this.$api.bible.search(ad);
			console.log(result)
			this.nameData = result.data.data.verses;
		}
	},
	data() {
		return{
			nameData: [],
			popup: false,
			currentName: null,
			items: [
				{
					title: 'ADAM',
					number: '0008/3166'
				},
				{
					title: 'Ivan',
					number: '0009/3166'
				},
				{
					title: 'John',
					number: '0010/3166'
				},
				{
					title: 'Oleg',
					number: '0011/3166'
				},
				{
					title: 'Dima',
					number: '0012/3166'
				},
				{
					title: 'Vasya',
					number: '0013/3166'
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.popup-mob {
	opacity: 0;
	visibility: hidden;
    height: 100vh;
    position: fixed;
    top: -100%;
    left: 0;
    overflow: scroll;
	transition: all .3s ease;

	&.active {
		opacity: 1;
		visibility: visible;
		top: 0;
	}
}
</style>
