<template lang="pug">
.page
	CharactersScreen.page__screen(
		id="showroom"
		:characters="characters"
	)
	TeamScreen.page__screen(
		id="team"
		:team='page.team'
	)
	SourceScreen.page__screen(
		id="source"
		:books="books"
	)
	CollaborationScreen.page__screen(
		id="collaboration"
	)
	FaqScreen.page__screen(
		id="faq"
	)
</template>

<script>
import CharactersScreen from "~/components/screens/CharactersScreen";
import TeamScreen from '~/components/screens/TeamScreen';
import SourceScreen from '~/components/screens/SourceScreen';
import CollaborationScreen from '~/components/screens/CollaborationScreen';
import FaqScreen from '~/components/screens/FaqScreen';

export default {
	name: "IndexPage",
	components: {
		CharactersScreen,
		TeamScreen,
		SourceScreen,
		CollaborationScreen,
		FaqScreen
	},
	async asyncData({ $api }) {
		const mainResp = await $api.page.main();
		const charactersResp = await $api.collections.characters();
		const booksResp = await $api.bible.booksWithChapters();

		return {
			books: booksResp.data.data,
			page: mainResp.acf,
			characters: charactersResp.data
		};
	}
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
