<template lang="pug">
.page
	FirstScreen.page__screen(
		id="initialPage"
		:event="page.event"
		:greetings="page.greetings"
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
		:firstdata="firstdata"
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

	async asyncData({ $api, store }) {
		const mainResp = await $api.page.main();
		const charactersResp = await $api.collections.characters();
		const booksResp = await $api.bible.booksWithChapters();
		const firstBookId = booksResp.data.data[0].id;
		const firstBookName = booksResp.data.data[0].name;
		const firstBookLongName = booksResp.data.data[0].nameLong;
		const firstBookChapters = await $api.bible.chapters(firstBookId);
		const firstBookchapter = firstBookChapters.data.data[1].id;
		const firstChapter = await $api.bible.chapter(firstBookchapter);
		const firstChapterHTML = firstChapter.data.data.content;
		store.commit("socialLinks/addSocialStore", mainResp.acf.socials);
		store.commit(
			"modalVideo/iframeAddStore",
			mainResp.acf.collaboration.full_video
		);
		return {
			page: mainResp.acf,
			characters: charactersResp.data,
			firstdata: {
				booksResp: booksResp.data.data,
				firstName: firstBookName,
				firstChapterText: firstChapterHTML,
				firstNameLong: firstBookLongName,
				firstChaptersLength: firstBookChapters.data.data.length - 1,
				firstChapters: firstBookChapters.data.data,
				firstChapter: 1,
				firstChapterId: 'GEN.1',
			}

		};
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

	::v-deep {
		.ps {
			padding-right: 3vw;
		}
	}
}
</style>
