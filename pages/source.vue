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
						@onClick="isOpen($event)"
					)

			Search(
				v-if="!searchPopup && !openNavMenu"
				@closePopup="closePopup"
			)

		template(#desc)
			.container
				Bible(
					:booksResp="books"
					@onClick="isOpen($event)"
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
	name: "SourcePage",
	computed: {
		...mapState({
			searchPopup: (state) => state.search.popup,
			openNavMenu: (state) => state.openNavMenu,
			booksResp: (state) => state.booksResp,
			firstName: (state) => state.firstName,
			firstChapterText: (state) => state.firstChapterText,
			firstNameLong: (state) => state.firstNameLong,
			firstChaptersLength: (state) => state.firstChaptersLength,
			firstChapters: (state) => state.firstChapters,
		}),
	},
	data() {
		return {
			popup: false,
			popupShow: false,
			input: "",
			searchHidden: false,
			books: null,
			name: null,
			chapterText: null,
			nameLong: null,
			chaptersLength: null,
			chapters: null,
			chapter: 1,
			chapterId: "GEN.1",
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
		async isOpen({ id, name, nameLong, chapters }) {
			await this.textShow(chapters[1].id);
			this.bookId = id;
			this.name = name;
			this.nameLong = nameLong;
			this.chapters = chapters;
			this.chapter = 1;
			this.chaptersLength = chapters.length - 1;
			this.popup = !this.popup;
			this.popupShow = !this.popupShow;
		},

		async textShow(id) {
			this.$store.commit("search/showPreloaderChapter");
			const chapterResp = await this.$api.bible.chapter(id);
			const chapterHTML = chapterResp.data.data.content;
			this.chapterText = chapterHTML;
			this.chapterId = id;
			this.$store.commit("search/showPreloaderChapter");
		},

		openBook() {
			this.popup = !this.popup;
			this.popupShow = !this.popupShow;
		},

		closePopup() {
			this.popupShow = false;
			this.popup = false;
		},

		hidePopup() {
			this.popupShow = !this.popupShow;
		},

		async showNextPage() {
			this.chapter += 1;
			await this.textShow(this.chapters[this.chapter].id);
			this.chapterId = this.chapters[this.chapter].id;
		},

		async showPrevPage() {
			this.chapter -= 1;
			await this.textShow(this.chapters[this.chapter].id);
			this.chapterId = this.chapters[this.chapter].id;
		},

		async showPageGo(page) {
			if (page < 1) {
				this.chapter = 1;
			} else if (page > this.chaptersLength) {
				this.chapter = this.chaptersLength;
			} else {
				this.chapter = page;
			}

			await this.textShow(this.chapters[this.chapter].id);
			this.chapterId = this.chapters[this.chapter].id;
		},

		hiddenSearch(item) {
			this.searchHidden = item;
		},
	},
	mounted() {
		this.books = this.booksResp;
		this.name = this.booksResp[0].name;
		this.chapterText = this.firstChapterText;
		this.nameLong = this.booksResp[0].name.nameLong;
		this.chaptersLength = this.firstChapters.length - 1;
		this.chapters = this.firstChapters;
	},

	async asyncData({ $api, store }) {
		if (store.state.page) {
			return;
		} else {
			const mainResp = await $api.page.main();
			store.commit("addPage", mainResp.acf);
			store.commit("socialLinks/addSocialStore", mainResp.acf.socials);
			store.commit(
				"modalVideo/iframeAddStore",
				mainResp.acf.collaboration.full_video
			);

			const booksResp = await $api.bible.booksWithChapters();
			store.commit("addBooksResp", booksResp.data.data);
			const firstBookId = booksResp.data.data[0].id;
			const firstBookChapters = await $api.bible.chapters(firstBookId);

			store.commit("addFirstChapters", firstBookChapters.data.data);
			const firstBookchapter = firstBookChapters.data.data[1].id;

			const firstChapter = await $api.bible.chapter(firstBookchapter);

			store.commit("addFirstChapterText", firstChapter.data.data.content);

			const charactersResp = await $api.collections.characters();
			store.commit("addCharacters", charactersResp.data);
		}
	},
};
</script>

<style lang="scss" scoped>
.source {
	background-size: cover;
	width: 100%;
	position: relative;
	height: calc(var(--vh) * 100);
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
		height: 80vh;
		width: 100%;
	}
}
</style>
