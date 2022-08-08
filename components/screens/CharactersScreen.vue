<template lang="pug">
div#showroom
	Character(
		@bindName='showPopup'
		:items="characters"
		:popupOpen='popup'
		)

	.popup-mob(:class="[popupShow ? 'active' : null]")
		Popup(v-if='popup'
			@closePopup='hidePopup')
			Article(
				:data='nameSearchData'
				:nameChar='currentName'
				:offset='offset'
				:pages='allPages'
				@resetOffset='resetOffset'
				@bindName='showPopup'
				@prevPage='prevPageData'
				@nextPage='nextPageData'
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
			await this.getNameData(this.currentName.toLowerCase(), 1);
			this.popupShow = true;
			this.popup = true;
		},
		hidePopup() {
			this.resetOffset();
			this.popupShow = false;
			setTimeout(() => {
				this.popup = !this.popup;
			}, 300);
		},
		resetOffset() {
			console.log('dsfds')
			this.offset = 1;
		},
		async getNameData(ad) {
			const result = await this.$api.bible.search(ad,this.offset);
			this.allPages = Math.ceil(result.data.data.total / result.data.data.limit);
			this.nameSearchData = result.data.data.verses;
		},
		async prevPageData() {
			this.offset += -1;
			await this.getNameData(this.currentName.toLowerCase());
		},
		async nextPageData() {
			this.offset += 1;
			await this.getNameData(this.currentName.toLowerCase());
		}
	},
	props: ["characters"],
	data() {
		return {
			nameSearchData: [],
			allPages: 0,
			offset: 1,
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

@include desc {
	#showroom{
		position: relative;
		overflow: hidden;
	}
	.popup-mob {
		position: absolute;
		top: 0;
		right: -100%;
		width: d(413);
		left: unset;

		&.active {
			right: 0;
		}
	}
}
</style>
