<template lang="pug">
div
	Character(
		@showPopup='showPopup'
		:items="items")

	.popup-mob(:class="[popup ? 'active' : null]")
		Popup(v-if='popup'
			@closePopup='hidePopup')
			Article(
				:data='nameData'
				:nameChar='currentName'
			)

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
			this.currentName = name;
			await this.getNameData(this.currentName.toLowerCase());
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
					title: 'Adam',
					number: '0008/3166'
				},
				{
					title: 'Moses',
					number: '0009/3166'
				},
				{
					title: 'John',
					number: '0010/3166'
				},
				{
					title: 'Lev',
					number: '0011/3166'
				},
				{
					title: 'Joshua',
					number: '0012/3166'
				},
				{
					title: 'Ruth',
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
	right: 0;
	z-index: 103;
    overflow: scroll;
	transition: all .3s ease;

	&.active {
		opacity: 1;
		visibility: visible;
		top: 0;
	}
}
</style>
