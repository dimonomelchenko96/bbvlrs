<template lang="pug">
.page
	RenderCanvas
	Header.page__header
	Enter.page__enter
	//- MenuList
	p {{ booksResp }}
</template>

<script>
import RenderCanvas from "~/components/renderApp/renderComingSoon.vue";
import Header from "~/components/composits/Header";
import Enter from "~/components/ui/Enter";
// import MenuList from "~/components/ui/MenuList";

export default {
	name: 'IndexPage',
	async asyncData({ $api }) {
	// 	// Отримання книжок
		const booksResp = await $api.bible.books();
		return booksResp;
	// 	const bookIdExample = booksResp.data.data[1].id;
	// 	// Отримання книг з главами
	// 	const booksWithChaptersResp = await $api.bible.booksWithChapters();
	// 	// Отримання глав однієї книги
	// 	const chaptersResp = await $api.bible.chapters(bookIdExample);
	// 	const chapterIdExample = chaptersResp.data.data[0].id
	// 	// Отримання глави з віршами у вигляді HTML
	// 	const chapterResp = await $api.bible.chapter(chapterIdExample);
	// 	const chapterHTML = chapterResp.data.data.content;
	// 	// Прилад виккористання пошуку
	// 	const exampleQuery = 'adam';
	// 	const exampleSearch = await $api.bible.search(exampleQuery);

	},
	data() {
		return {};
	},
	components: {
		Header,
		Enter,
		RenderCanvas,
		// MenuList,
	},
	methods: {},
};
</script>

<style lang="scss" >
.page {
	background: black;
	background-size: cover;
	width: 100%;
	height: 100vh;
	position: relative;

	&__enter {
		position: absolute;
		bottom: m(24);
		left: 50%;
		transform: translateX(-50%);
	}

	&__popup {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	&__about {
		position: absolute;
		left: m(80);
		bottom: m(82);
	}

	&__soc {
		position: absolute;
		right: m(80);
		bottom: m(82);
	}
}

@include desc{
	.page {
		&__about {
			left: d(80);
			bottom: d(82);
		}

		&__soc {
			right: d(80);
			bottom: d(82);
		}

		&__enter {
			bottom: d(136);
		}
	}
}
</style>
