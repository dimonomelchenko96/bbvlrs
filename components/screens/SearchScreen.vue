<template lang="pug">

.popup-mob(:class="[popup ? 'active' : null]")
	Popup(
		@closePopup='hidePopup')
		Article(
			:data='nameSearchData'
			:nameChar='searchName'
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
import { mapState } from "vuex";

export default {
	computed: {
		...mapState({
			searchName: (state) => state.search.searchName,
			popup: (state) => state.search.popup,
			loading: (state) => state.search.loading,
		}),
	},
	watch: {
		searchName(current, prev) {
			if (current !== prev) {
				this.showPopup(this.searchName);
			}
		},
	},
	components: {
		Popup,
		Article,
	},
	methods: {
		async showPopup(name) {
			console.log('search');
			if (name.length > 0 && this.currentName !== name) {
				this.currentName = name;
				await this.getNameData(this.currentName.toLowerCase(), 1);
			}
		},
		hidePopup() {
			this.resetOffset();
			this.$store.commit("search/showPopup", false);
			this.$emit("hiddenSearch", false);
			this.$store.commit("search/bindName", "");
		},
		resetOffset(name) {
			if (this.currentName !== name) {
				this.offset = 0;
			}
		},
		replaceToGreen(arr) {
			arr.forEach((item, i) => {
				let str = item.text;

				const upOrLow = (l, sl) =>
					l
						? l === l.toUpperCase()
							? sl.toUpperCase()
							: sl.toLowerCase()
						: sl;
				const replaceObject = (str, target, replacer) =>
					str.replace(
						new RegExp(`\\b${target}[a-z]*\\b`, "gi"),
						($0) =>
							`<span style='color: #90EE90' class='green'>${replacer
								.split("")
								.map((e, i) => upOrLow($0[i], e))
								.join("")}</span>`
					);
				item.text = replaceObject(
					str,
					this.currentName,
					this.currentName
				);
			});
			return arr;
		},
		async getNameData(name) {
			this.$store.commit('search/showPreloader');
			const result = await this.$api.bible.search(name,this.offset + 1);
			this.allPages = result.data.data.verses.length > 0 ? Math.ceil(result.data.data.total / result.data.data.limit) : 0;
			this.nameSearchData = this.replaceToGreen(result.data.data.verses);
			this.$store.commit("search/showPreloader");
		},
		async prevPageData() {
			this.offset += -1;
			await this.getNameData(this.currentName.toLowerCase());
		},
		async nextPageData() {
			this.offset += 1;
			await this.getNameData(this.currentName.toLowerCase());
		},
	},

	data() {
		return {
			nameSearchData: [],
			allPages: 0,
			offset: 0,
			currentName: null,
		};
	},
};
</script>

<style lang="scss" scoped>
.popup-mob {
	opacity: 0;
	visibility: hidden;
	height: calc(var(--vh) * 100);
	position: fixed;
	transform: translateY(-100%);
	right: 0;
	z-index: 103;
	transition: all 0.3s ease;

	&.active {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}
}

@include desc {
	#showroom {
		position: relative;
		overflow: hidden;
	}
	.popup-mob {
		position: absolute;
		transform: translateX(100%);
		width: d(420);
		left: unset;

		&.active {
			transform: translateX(0);
		}
	}
}
</style>
