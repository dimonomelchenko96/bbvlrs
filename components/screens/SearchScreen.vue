<template lang="pug">
.popup__overlay(
	:class="[popup ? 'active' : null]"
	@click='overlayClickClose'
	)
	.popup__search
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
		overlayClickClose(e) {
			if(e.target.classList.value && e.target.className.includes('popup__overlay')) {
				this.hidePopup();
			}
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

.popup {
	&__overlay {
		position: fixed;
		width: 100vw;
		height: calc(var(--vh) * 100);
		background-color: rgba(10, 10, 10, 0.702);
		transform: translateY(-100%);
		z-index: 103;
		transition: all 0.3s ease;

		&.active {
			transform: translateY(0);
		}
	}

	&__search {
		height: 100%;
		position: absolute;
		right: 0;
		width: 100%;
		z-index: 104;
	}
}

@include desc {

	.popup {
		&__overlay {
			width: 100%;
			opacity: 0;
			visibility: hidden;
			transform: unset;
			&.active {
				opacity: 1;
				visibility: visible;
				.popup__search {
					transform: translateX(0);
				}
			}
		}

		&__search {
			transform: translateX(100%);
			width: d(420);
			left: unset;
			transition: all 0.3s ease;
		}
	}

}
</style>
