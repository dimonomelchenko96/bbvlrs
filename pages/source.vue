<template lang="pug">
.page
	//- Bible(
	//- 	v-if="!openBook"
	//- 	:booksResp="booksResp.data.data"
	//- 	@onClick="open($event)"
	//- )
	//- ChapterBible(
	//- 	v-if="openBook"
	//- 	:openBook="openBook"
	//- 	@clickClose="close()"
	//- 	@nextPage="showNextPage()"
	//- 	@prevPage="showPrevPage()"
	//- 	:name="name"
	//- 	:nameLong="nameLong"
	//- 	:chaptersLength="chaptersLength"
	//- 	:chapterText="chapterText"
	//- 	:chapter="chapter"
	//- )
	Device
		template(#mob)
			Bible(
				v-if="!openBook"
				:booksResp="booksResp.data.data"
				@onClick="open($event)"
			)
			ChapterBible(
				v-if="openBook"
				:openBook="openBook"
				@clickClose="close()"
				@nextPage="showNextPage()"
				@prevPage="showPrevPage()"
				:name="name"
				:nameLong="nameLong"
				:chaptersLength="chaptersLength"
				:chapterText="chapterText"
				:chapter="chapter"
			)
			Search
		template(#desc)
			.container
				Bible(
					:booksResp="booksResp.data.data"
					@onClick="open($event)"
				)
				ChapterBible.page__chapterBible(
					:openBook="openBook"
					@clickClose="close()"
					@nextPage="showNextPage()"
					@prevPage="showPrevPage()"
					:name="name"
					:nameLong="nameLong"
					:chaptersLength="chaptersLength"
					:chapterText="chapterText"
					:chapter="chapter"
				)
</template>

<script>

import Header from "~/components/composits/Header";
import Bible from "~/components/Bible";
import Search from "~/components/ui/Search";
import ChapterBible from "~/components/ChapterBible";
import Device from "../components/helpers/Device.vue";


export default {
	name: 'IndexPage',
	async asyncData({ $api }) {
		// Отримання книжок
		const booksResp = await $api.bible.booksWithChapters();
		// await $api.bible.books();
		const firstBookId = booksResp.data.data[1].id;
		const firstBookName = booksResp.data.data[1].name;
		const firstBookLongName = booksResp.data.data[1].nameLong
		// // Отримання книг з главами
		// const booksWithChaptersResp = await $api.bible.booksWithChapters();
		// // Отримання глав однієї книги
		const firstBookChapters = await $api.bible.chapters(firstBookId);
		const firstBookchapter = firstBookChapters.data.data[1].id
		// // Отримання глави з віршами у вигляді HTML
		const firstChapter = await $api.bible.chapter(firstBookchapter);
		const firstChapterHTML = firstChapter.data.data.content;

		// this.name = firstBookName;
		// // Прилад виккористання пошуку
		const exampleQuery = 'adam';
		const exampleSearch = await $api.bible.search(exampleQuery);
		return {
			name: firstBookName,
			chapterText: firstChapterHTML,
			nameLong: firstBookLongName,
			chaptersLength: firstBookChapters.data.data.length - 1,
			chapters: firstBookChapters.data.data,
			booksResp,
			exampleSearch,
		}
	},

	data() {
		return {
			openBook: false,
			// chaptersLength: 1,
			// chapterText: this.firstChapterHTML,
			// name: "",
			// nameLong: this.firstBookLongName,
			chapter: 1,
			// chapters:[]
		};
	},
	components: {
		Header,
		Bible,
		Search,
		ChapterBible,
		Device,
	},
	methods: {
		async open({id, name, nameLong, chapters}) {
			this.bookId = id;
			this.name = name;
			this.nameLong = nameLong;
			this.chapters = chapters;
			this.chaptersLength = chapters.length - 1;
			await this.textShow(chapters[this.chapter].id)
			this.openBook = true;
		},
		close() {
			this.openBook = false;
		},
		async textShow (id) {
			const chapterResp = await this.$api.bible.chapter(id);
			const chapterHTML = chapterResp.data.data.content;
			this.chapterText = chapterHTML;
		},

		async showNextPage() {
			this.chapter += 1;
			window.scrollTo(0, 0);
			await this.textShow(this.chapters[this.chapter].id);
		},
		async showPrevPage() {
			this.chapter -= 1;
			window.scrollTo(0, 0);
			await this.textShow(this.chapters[this.chapter].id);
		},
	},
};
</script>

<style lang="scss" scope>
html, body {
	scroll-behavior: smooth;
}

.page {
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

.chapter {
}

@include desc{
	.page {
		height: 100vh;
		display: flex;
		flex-direction: row-reverse;
	}

	.container {
		display: flex;
		flex-direction: row-reverse;
		margin-top: d(33);
		height: d(830);
	}
}
</style>
