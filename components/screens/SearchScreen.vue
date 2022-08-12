<template lang="pug">
div
	.popup-mob(:class="[popupShow ? 'active' : null]")
		Popup(v-if='popup'
			@closePopup='hidePopup')
			Article(
				:data='nameSearchData'
				:nameChar='input'
				:offset='offset'
				:pages='allPages'
				@resetOffset='resetOffset'
				@bindName='showPopup'
				@prevPage='prevPageData'
				@nextPage='nextPageData'
			)
</template>

<script>
import Popup from "~/components/helpers/Popup";
import Article from "~/components/Article";

export default {
	props: ['input'],
	watch: {
		input(new1, prev) {
			if (new1 !== prev) {
				this.showPopup(new1);
			}
		}
	},
	components: {
		Popup,
		Article,
	},
	methods: {
		async showPopup(name) {
			if (name.length > 0) {
				this.currentName = name;
				await this.getNameData(this.currentName.toLowerCase(), 1);
				this.popupShow = true;
				this.popup = true;
			}
		},
		hidePopup() {
			this.resetOffset();
			this.popupShow = false;
			setTimeout(() => {
				this.popup = !this.popup;
			}, 300);
			this.$emit('hiddenSearch', false)
		},
		resetOffset() {
			this.offset = 1;
		},
		replaceToGreen(arr) {
			arr.forEach((item, i) => {
				let str = item.text;
				if(str.length > 2 && str.toLowerCase().indexOf(this.currentName.toLowerCase()) >= 0) {
					const upOrLow = (l, sl) => l ? l === l.toUpperCase() ? sl.toUpperCase() : sl.toLowerCase() : sl;
					const replaceObject = (str, target, replacer) => str.replace(new RegExp(`\\b${target}[a-z]*\\b`, "gi"), ($0) => `<span style='color: #90EE90' class='green'>${replacer.split('').map((e, i) => upOrLow($0[i], e)).join("")}</span>` );
					item.text = replaceObject(str, this.currentName, this.currentName);
				}
			})
			return arr;
		},
		async getNameData(ad) {
			const result = await this.$api.bible.search(ad,this.offset);
			this.allPages = Math.ceil(result.data.data.total / result.data.data.limit);
			this.nameSearchData = this.replaceToGreen(result.data.data.verses);
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
		width: d(420);
		left: unset;

		&.active {
			right: 0;
		}
	}
}
</style>
