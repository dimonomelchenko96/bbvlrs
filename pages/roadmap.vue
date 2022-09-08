<template lang="pug">
.roadmap
	h2.roadmap__headline Roadmap
	CardRoadMap(
		v-if="roadmap"
		v-for="(card, ind) in page.roadmap.card"
		:key="ind"
		:roadmapData="card.content"
	)
	.roadmap__button(
		v-if="!roadmap"
		@click="handleShowCards"
	)
		include ../assets/svg/RoadMap/openRoadMap.svg
	.roadmap__button.close-roadmap(
		v-else
		@click="handleShowCards"
	)
		include ../assets/svg/RoadMap/closeRoadMap.svg

</template>

<script>
import CardRoadMap from "~/components/ui/CardRoadMap.vue";
import { mapState } from "vuex";

export default {
	name: "RoadmapPage",
	data() {
		return {};
	},

	computed: {
		...mapState({
			roadmap: (state) => state.roadmap,
			page: (state) => state.page,
		}),
	},
	components: {
		CardRoadMap,
	},
	methods: {
		handleShowCards() {
			this.$store.commit("roadMapToggle");
		},
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
.roadmap {
	position: relative;
	padding: m(88) m(32) m(72);
	height: calc(var(--vh) * 100);

	&__headline {
		font-family: "BBLVRS";
		font-style: normal;
		font-weight: 400;
		font-size: m(32);
		line-height: m(32);
		text-align: left;
		color: $white;
		margin-bottom: m(72);
	}

	&__button {
		width: m(40);
		height: m(40);
		position: absolute;
		bottom: m(16);
		left: m(16);
		background: rgba(255, 255, 255, 0.15);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;
		z-index: 75;

		svg {
			width: m(13);
			height: m(13);
		}

		&.close-roadmap {
			background: $white;
		}
	}
}

@include desc {
	.roadmap {
		padding: d(152) 0 d(121);

		&__headline {
			font-size: d(70);
			line-height: d(70);
			margin-left: d(70);
			margin-bottom: d(40);
		}

		&__button {
			width: d(90);
			height: d(90);
			bottom: d(60);
			left: d(60);

			svg {
				width: d(30);
				height: d(30);
			}
		}
	}
}
</style>
