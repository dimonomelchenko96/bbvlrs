<template lang="pug">
.page
//- 	CharactersScreen.page__screen(
//- 		id="showroom"
//- 		:characters="showroom.characters"
//- 	)
//- 	TeamScreen.page__screen(
//- 		id="team"
//- 	)
//- 	SourceScreen.page__screen(
//- 		id="source"
//- 		:books="books"
//- 	)
//- 	CollaborationScreen.page__screen(
//- 		id="collaboration"
//- 	)
//- 	FaqScreen.page__screen(
//- 		id="faq"
//- 	)
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
		// const showroomResp = await $api.page.showroom();

		const booksResp = await $api.bible.booksWithChapters();

		return {
			showroom: showroomResp.acf,
			books: booksResp.data.data
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
