<template lang="pug">
.faq
	.faq__content
		h2.faq__title {{ page.faq.title }}
		.faq__text {{ page.faq.text }}
	CustomScroller.faq__block
		Question(
			v-for="(question, ind) in page.faq.qa"
			:key="question.ind"
			:title="question.question"
			:content="question.answer"
			:id="ind"
			:showAnswer="showAnswer"
			@answer="answer($event)"
		)
</template>

<script>
import Question from "~/components/ui/Question";
import CustomScroller from "~/components/helpers/CustomScroller";
import { mapState } from "vuex";
export default {
	name: "FaqPage",
	data() {
		return {
			showAnswer: null,
		};
	},
	components: {
		Question,
		CustomScroller,
	},
	computed: {
		...mapState({
			page: (state) => state.page,
		}),
	},
	methods: {
		answer(id) {
			this.showAnswer !== id
				? (this.showAnswer = id)
				: (this.showAnswer = null);
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
.layout_white {
	.faq {
		&__title {
			color: $black;
		}

		&__text {
			color: $lilac;
		}
	}
}

.faq {
	padding: m(80) m(10) 0 m(30);
	height: calc(var(--vh) * 100);

	::v-deep {
		.ps__thumb-y {
			background-color: $lilac;
		}
	}

	&__title {
		font-family: "BBLVRS", sans-serif;
		font-size: m(32);
		line-height: m(32);
		font-weight: 400;
		color: $white;

		margin-bottom: m(30);
	}

	&__block {
		height: calc(var(--vh) * 65);
		padding-right: m(30);
	}

	&__text {
		font-family: "Montserrat", sans-serif;
		font-size: m(16);
		line-height: m(26);
		font-weight: 300;
		color: $green;

		width: m(174);
		margin-bottom: m(30);
	}
}

@include desc {
	.faq {
		padding: d(200) d(120) d(150) d(230);
		height: 100vh;

		display: flex;
		justify-content: space-between;
		align-items: center;

		&__block {
			width: 60%;
			height: 100%;
			overflow: hidden;

			padding-right: d(30);
		}

		&__content {
			padding-left: d(50);
			width: d(447);
		}

		&__title {
			font-size: d(70);
			line-height: d(70);
			margin-bottom: d(30);
		}

		&__text {
			font-size: d(25);
			line-height: d(30);
			margin-bottom: 0;
			width: 100%;
		}
	}
}
</style>
