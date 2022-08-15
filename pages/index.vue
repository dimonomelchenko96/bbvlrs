<template lang="pug">
.page
	FirstScreen.page__screen(
		id="initialPage"
		:event="page.event"
	)

	CharactersScreen.page__screen(
		id="showroom"
		:characters="characters"
	)

	HeadScreen.page__screen(
		id="team-member"
		:team="page.team"
		:members="page.team.members"
	)
	SourceScreen.page__screen(
		id="source"
		@open="isOpen($event)"
		@showNextPage="nextPage()"
		@showPrevPage="prevPage()"
		@showPageGo="pageGo($event)"
		:books="books"
		:name="name"
		:chapterText="chapterText"
		:nameLong="nameLong"
		:chaptersLength="chaptersLength"
		:chapters="chapters"
		:chapter="chapter"
	)
	RoadMapScreen.page__screen(
		id="roadmap"
		:roadmapData="page.roadmap"
	)
	CollaborationScreen.page__screen(
		id="collaboration"
		:collaboration='page.collaboration'
	)

	FaqScreen.page__screen(
		id="faq"
		:faq="page.faq"
	)
	AboutScreen.page__screen(
		id="about"
		:about="page.about"
	)
</template>

<script>
import FirstScreen from "~/components/screens/FirstScreen";
import CharactersScreen from "~/components/screens/CharactersScreen";
import TeamScreen from "~/components/screens/TeamScreen";
import SourceScreen from "~/components/screens/SourceScreen";
import RoadMapScreen from "~/components/screens/RoadMapScreen";
import CollaborationScreen from "~/components/screens/CollaborationScreen";
import FaqScreen from "~/components/screens/FaqScreen";
import HeadScreen from "~/components/screens/HeadScreen";
import AboutScreen from "~/components/screens/AboutScreen";

export default {
	name: "IndexPage",

	components: {
		FirstScreen,
		CharactersScreen,
		TeamScreen,
		SourceScreen,
		RoadMapScreen,
		CollaborationScreen,
		FaqScreen,
		HeadScreen,
		AboutScreen,
	},

	async asyncData({ $api }) {
		const mainResp = await $api.page.main();
		const charactersResp = await $api.collections.characters();

		const booksResp = await $api.bible.booksWithChapters();
		const firstBookId = booksResp.data.data[1].id;
		const firstBookName = booksResp.data.data[1].name;
		const firstBookLongName = booksResp.data.data[1].nameLong;

		const firstBookChapters = await $api.bible.chapters(firstBookId);
		const firstBookchapter = firstBookChapters.data.data[1].id;
		const firstChapter = await $api.bible.chapter(firstBookchapter);
		const firstChapterHTML = firstChapter.data.data.content;

		return {
			page: mainResp.acf,
			characters: charactersResp.data,

			books: booksResp.data.data,
			name: firstBookName,
			chapterText: firstChapterHTML,
			nameLong: firstBookLongName,
			chaptersLength: firstBookChapters.data.data.length - 1,
			chapters: firstBookChapters.data.data,
			chapter: 1,
		};
	},
	methods: {
		async isOpen({ id, name, nameLong, chapters }) {
			this.bookId = id;
			this.name = name;
			this.nameLong = nameLong;
			this.chapters = chapters;
			this.chaptersLength = chapters.length - 1;
			await this.textShow(chapters[this.chapter].id);
		},

		async textShow(id) {
			const chapterResp = await this.$api.bible.chapter(id);
			const chapterHTML = chapterResp.data.data.content;
			this.chapterText = chapterHTML;
		},

		async nextPage() {
			this.chapter += 1;
			await this.textShow(this.chapters[this.chapter].id);
		},

		async prevPage() {
			this.chapter -= 1;
			await this.textShow(this.chapters[this.chapter].id);
		},

		async pageGo(page) {
			if (page < 1) {
				this.chapter = 1;
			} else if (page > this.chaptersLength) {
				this.chapter = this.chaptersLength;
			} else {
				this.chapter = page;
			}

			await this.textShow(this.chapters[this.chapter].id);
		},
	},
};
</script>

<style lang="scss" scoped>
.page {
	height: calc(var(--vh) * 100);
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	scroll-behavior: smooth;

	&__screen {
		scroll-snap-align: start;
		scroll-snap-stop: always;
		min-height: calc(var(--vh) * 100);
	}
}
</style>
