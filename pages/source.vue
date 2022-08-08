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
					@pageGo="showPageGo($event)"
					:name="name"
					:nameLong="nameLong"
					:chaptersLength="chaptersLength"
					:chapterText="chapterText"
					:chapter="chapter"
				)
</template>

<script>

import Header from "~/components/ui/Header";
import Bible from "~/components/Bible";
import Search from "~/components/ui/Search";
import ChapterBible from "~/components/ChapterBible";


export default {
	name: 'IndexPage',
	async asyncData({ $api }) {
		// Отримання книжок
		const booksResp = await $api.bible.booksWithChapters();
		// await $api.bible.books();
		// const bookIdExample = booksResp.data.data[1].id;
		// // Отримання книг з главами
		// const booksWithChaptersResp = await $api.bible.booksWithChapters();
		// // Отримання глав однієї книги
		// const chaptersResp = await $api.bible.chapters('GEN');
		// const chapterIdExample = chaptersResp.data.data[0].id
		// // Отримання глави з віршами у вигляді HTML
		// const chapterResp = await $api.bible.chapter("GEN.1");
		// const chapterHTML = chapterResp.data.data.content;
		// // Прилад виккористання пошуку
		const exampleQuery = 'adam';
		const exampleSearch = await $api.bible.search(exampleQuery);
		return { booksResp, exampleSearch }
	},
	data() {
		return {
			openBook: false,
			chaptersLength: 1,
			chapterText: "",
			name: "",
			nameLong: "",
			chapter: 1,
			chapters:[]
		};
	},
	components: {
		Header,
		Bible,
		Search,
		ChapterBible
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
			await this.textShow(this.chapters[this.chapter].id);
		},

		async showPrevPage() {
			this.chapter -= 1;
			await this.textShow(this.chapters[this.chapter].id);
		},

		async showPageGo() {
			this
		}
	},
};
</script>

<style lang="scss" scoped>
.page {
	background: black;
	background-size: cover;
	width: 100%;
	position: relative;
	// margin-top: m(88);
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
		position: relative;
		height: 100vh;

		&__search {
			display: none;
		}
		// margin-top: d(112);
	}
	.search {

	}
	.container {
		display: flex;
		flex-direction: row-reverse;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 75vh;
	}
}
</style>
