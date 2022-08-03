<template lang="pug">
.page
	//- RenderCanvas
	Header
	//- Enter.page__enter

	Bible(
		v-if="!openBook"
		:booksResp="booksResp.data.data"
		@onClick="open($event)"
	)
	ChapterBible(
		v-if="openBook"
		:openBook="openBook"
		@clickClose="close()"
		:name="name"
		:nameLong="nameLong"
	)
	Search
</template>

<script>
// import RenderCanvas from "~/components/renderApp/renderComingSoon.vue";
import Header from "~/components/composits/Header";
// import Enter from "~/components/ui/Enter";
import Bible from "~/components/Bible";
import Search from "~/components/ui/Search";
import ChapterBible from "~/components/ChapterBible";


export default {
	name: 'IndexPage',
	async asyncData({ $api }) {
		// Отримання книжок
		const booksResp = await $api.bible.books();
		// const bookIdExample = booksResp.data.data[1].id;
		// // Отримання книг з главами
		const booksWithChaptersResp = await $api.bible.booksWithChapters();
		// // Отримання глав однієї книги
		const chaptersResp = await $api.bible.chapters('GEN');
		// const chapterIdExample = chaptersResp.data.data[0].id
		// // Отримання глави з віршами у вигляді HTML
		// const chapterResp = await $api.bible.chapter(chapterIdExample);
		// const chapterHTML = chapterResp.data.data.content;
		// // Прилад виккористання пошуку
		// const exampleQuery = 'adam';
		// const exampleSearch = await $api.bible.search(exampleQuery);
		return { booksResp, booksWithChaptersResp, chaptersResp }
	},
	data() {
		return {
			openBook: false,
			bookId: 'GEN',
			name: "",
			nameLong: "",
		};
	},
	components: {
		Header,
		Bible,
		Search,
		ChapterBible
	},
	methods: {
		open({ id, name, nameLong }) {
			this.openBook = true;
			this.bookId = id;
			this.name = name;
			this.nameLong = nameLong;
		},
		close() {
			this.openBook = false;
		}
	},
};
</script>

<style lang="scss" scope>
.page {
	background: black;
	background-size: cover;
	width: 100%;
	// height: 100vh;
	position: relative;

	// &__enter {
	// 	position: absolute;
	// 	bottom: m(24);
	// 	left: 50%;
	// 	transform: translateX(-50%);
	// }

	// &__popup {
	// 	position: absolute;
	// 	left: 50%;
	// 	top: 50%;
	// 	transform: translate(-50%, -50%);
	// }

	// &__about {
	// 	position: absolute;
	// 	left: m(80);
	// 	bottom: m(82);
	// }

	// &__soc {
	// 	position: absolute;
	// 	right: m(80);
	// 	bottom: m(82);
	// }
}

.bible {
	position: relative;

	&_hidden {
		overflow: hidden;
	}
}

.chapter {
	// transform: translateX(-100%);
	// position: absolute;
	// top: 0;
	// left: 0;

	// &_show {
	// 	transform: translateX(0);
	// }
}

@include desc{
	// .page {
	// 	&__about {
	// 		left: d(80);
	// 		bottom: d(82);
	// 	}

	// 	&__soc {
	// 		right: d(80);
	// 		bottom: d(82);
	// 	}

	// 	&__enter {
	// 		bottom: d(136);
	// 	}
	// }
}
</style>
