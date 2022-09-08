<template lang="pug">
div
	Character(
		:items="characters"
	)

	AboutScreen.page__screen(
		id="about"
		:about="page.about"
	)
</template>

<script>
import Character from "~/components/Character/Character";
import AboutScreen from "~/components/screens/AboutScreen";
import { mapState } from "vuex";
export default {
	name: "ShowroomPage",
	components: {
		Character,
		AboutScreen,
	},
	computed: {
		...mapState({
			page: (state) => state.page,
			characters: (state) => state.characters,
		}),
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
.popup-mob {
	opacity: 0;
	visibility: hidden;
	height: calc(var(--vh) * 100);
	position: fixed;
	top: -100%;
	left: 0;
	right: 0;
	z-index: 103;
	transition: all 0.3s ease;

	&.active {
		opacity: 1;
		visibility: visible;
		top: 0;
	}
}

@include desc {
	#showroom {
		position: relative;
		overflow: hidden;
	}
	.popup-mob {
		position: absolute;
		top: 0;
		right: -100%;
		width: d(413);
		left: unset;

		&.active {
			right: 0;
		}
	}
}
</style>
