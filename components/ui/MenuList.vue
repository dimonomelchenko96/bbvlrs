<template lang="pug">
ul.menu-list
	li.menu-list__item(
		v-for="(book, ind) in books"
		:key="ind"
	) {{ book }}
</template>

<script>
import api from "~/plugins/$api.js";

// async function asyncData({ $api }) {
// // 	// Отримання книжок
// 	const booksResp = await $api.bible.books();
// 	// return booksResp;
// // 	const bookIdExample = booksResp.data.data[1].id;
// // 	// Отримання книг з главами
// // 	const booksWithChaptersResp = await $api.bible.booksWithChapters();
// // 	// Отримання глав однієї книги
// // 	const chaptersResp = await $api.bible.chapters(bookIdExample);
// // 	const chapterIdExample = chaptersResp.data.data[0].id
// // 	// Отримання глави з віршами у вигляді HTML
// // 	const chapterResp = await $api.bible.chapter(chapterIdExample);
// // 	const chapterHTML = chapterResp.data.data.content;
// // 	// Прилад виккористання пошуку
// // 	const exampleQuery = 'adam';
// // 	const exampleSearch = await $api.bible.search(exampleQuery);
// };

export default {
	name: "menuList",

	async asyncData({ $api }) {
	// 	// Отримання книжок
		// this.booksResp = await $api.bible.books();
		// return booksResp;
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
		return{
			booksResp,
			books: [
				"Deuteronomy",
				"Joshua",
				"Judges",
				"Ruth",
				"1 Samuel",
				"2 Samuel",
				"1 Kings",
				"2 Kings",
				"1 Chronicles",
				"2 Chronicles",
				"Ezra",
				"Nehemiah",
				"Tobit",
				"Judith",
				"Esther",
				"1 Maccabees",
				"2 Maccabees",
				"Job",
				"Psalms",
				"Genesis",
				"Exodus",
				"Leviticus",
				"Numbers",
				"Deuteronomy",
				"Joshua",
				"Judges",
				"Ruth",
				"1 Samuel",
				"2 Samuel",
				"1 Kings",
				"2 Kings",
				"1 Chronicles",
				"2 Chronicles",
				"Ezra",
				"Nehemiah",
				"Tobit",
				"Judith",
				"Esther",
				"1 Maccabees",
				"2 Maccabees",
				"Job",
			],
		}
	},

	// created() {
	// 	console.log(this.booksResp);
	// 	// this.books = asyncData({ $api });
	// 	// console.log(this.books);
	// }
}
</script>

<style lang="scss" scope>
.menu-list {
	overflow-y: scroll;
	height: 623px;

	&__item {
		font-family: "Montserrat";
		font-size: d(16);
		line-height: d(26);
		font-weight: 300;
		color: #6e6e6e;
		text-transform: uppercase;

		display: flex;

		&::before {
			content: "";
			height: 100%;
			display: block;
			background-color: #fff;
			opacity: 0.1;
			width: 1px;
		}
	}
}
</style>
