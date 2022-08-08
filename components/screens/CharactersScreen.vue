<template lang="pug">
div
	Character(
		@bindName='showPopup'
		:items="characters")

	.popup-mob(:class="[popupShow ? 'active' : null]")
		Popup(v-if='popup'
			@closePopup='hidePopup')
			Article(
				:data='nameSearchData'
				:nameChar='currentName'
			)

</template>

<script>
import Character from "~/components/Character/Character";
import Popup from "~/components/helpers/Popup";
import Article from "~/components/Article";

export default {
	components: {
		Character,
		Popup,
		Article,
	},
	methods: {
		async showPopup(name) {
			this.currentName = name;
			await this.getNameData(this.currentName.toLowerCase());
			this.popupShow = !this.popupShow;
			this.popup = !this.popup;
		},
		hidePopup() {
			this.popupShow = !this.popupShow;
			setTimeout(() => {
				this.popup = !this.popup;
			}, 300);
		},
		async getNameData(ad) {
			const result = await this.$api.bible.search(ad, 0, 50);

			this.nameSearchData = result.data.data.verses;
		},
	},
	props: ["characters"],
	data() {
		return {
			nameSearchData: [],
			popup: false,
			popupShow: false,
			currentName: null,
		};
	},
};
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
	transition: all 0.3s ease;

	&.active {
		opacity: 1;
		visibility: visible;
		top: 0;
	}
}
</style>
