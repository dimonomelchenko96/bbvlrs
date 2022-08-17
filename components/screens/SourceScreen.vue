<template lang="pug">
.source
	Device
		template(#mob)
			ChapterBible(
				@clickOpen="openBook"
				@nextPage="showNextPage"
				@prevPage="showPrevPage"
				:name="name"
				:nameLong="nameLong"
				:chaptersLength="chaptersLength"
				:chapterText="chapterText"
				:chapter="chapter"
			)

			.popup-mob(:class="[popupShow ? 'active' : null]")
				Popup(
					v-if="popupShow"
					@closePopup="hidePopup()"
				)
					Bible(
						:booksResp="books"
						@onClick="open($event)"
					)

			Search(
				v-if="!searchPopup && !openNavMenu"
				@closePopup="closePopup"
			)

		template(#desc)
			.container
				Bible(
					:booksResp="books"
					@onClick="open($event)"
				)
				ChapterBible.page__chapterBible(
					:openBook="openBook"
					@clickClose="close()"
					@nextPage="showNextPage()"
					@prevPage="showPrevPage()"
					@pageGo="showPageGo($event)"
					:name="name"
					:nameLong="nameLong"
					:chaptersLength="chaptersLength"
					:chapterText="chapterText"
					:chapter="chapter"
					:chapterId="chapterId"
				)
</template>

<script>
import Bible from "~/components/Bible";
import Search from "~/components/ui/Search";
import ChapterBible from "~/components/ChapterBible";
import Device from "~/components/helpers/Device";
import Article from "~/components/Article.vue";
import Popup from "~/components/helpers/Popup";
import SearchScreen from "~/components/screens/SearchScreen";

import { mapState } from "vuex";
export default {
	props: [
		"books",
		"name",
		"chapterText",
		"nameLong",
		"chaptersLength",
		"chapters",
		"chapter",
		"chapterId",
	],
	computed: {
		...mapState({
			searchPopup: (state) => state.search.popup,
			openNavMenu: (state) => state.openNavMenu,
		}),
	},
	data() {
		return {
			popup: false,
			popupShow: false,
			input: "",
			searchHidden: false,
		};
	},
	components: {
		Bible,
		Search,
		ChapterBible,
		Device,
		Article,
		Popup,
		SearchScreen,
	},
	methods: {
		async open({ id, name, nameLong, chapters }) {
			this.$emit("open", { id, name, nameLong, chapters });
			this.popup = !this.popup;
			this.popupShow = !this.popupShow;
		},

		openBook() {
			this.popup = !this.popup;
			this.popupShow = !this.popupShow;
			console.log('111');
		},

		closePopup() {
			this.popupShow = false;
			this.popup = false;
		},

		hidePopup() {
			this.popupShow = !this.popupShow;
			this.$store.commit("closeBibleToggle", false);
		},

		showNextPage() {
			this.$emit("showNextPage");
		},

		showPrevPage() {
			this.$emit("showPrevPage");
		},

		showPageGo(page) {
			this.$emit("showPageGo", page);
		},

		hiddenSearch(item) {
			this.searchHidden = item;
		},
	},
};
</script>

<style lang="scss" scoped>
.source {
	background: black;
	background-size: cover;
	width: 100%;
	position: relative;
}

.bible {
	position: relative;

	&_hidden {
		overflow: hidden;
	}
}

.search {
	position: absolute;
	z-index: 104;
}

.popup-mob {
	opacity: 0;
	visibility: hidden;
	height: calc(var(--vh) * 100);
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
	.source {
		position: relative;
		height: calc(var(--vh) * 100);

		&__search {
			display: none;
		}
	}

	.container {
		display: flex;
		flex-direction: row-reverse;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 75vh;
		width: 100%;
	}
}
</style>
