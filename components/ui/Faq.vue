<template lang="pug">
.faq
	.faq__content
		h2.faq__title faq
		.faq__text Frequently asked questions
	CustomScroller.faq__block
		Question(
			v-for="question in questions"
			:key="question.id"
			:title="question.title"
			:content="question.content"
			:id="question.id"
			:showAnswer="showAnswer"
			@answer="answer"
		)
</template>

<script>
import Question from "~/components/ui/Question.vue";

import CustomScroller from "~/components/helpers/CustomScroller";

export default {
	name: "Faq",
	data() {
		return {
			showAnswer: null,
			questions: [
				{
					id: 1,
					title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content:
						"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 2,
					title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content:
						"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 3,
					title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content:
						"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 4,
					title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content:
						"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 5,
					title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content:
						"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 6,
					title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content:
						"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 7,
					title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content:
						"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 8,
					title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content:
						"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
			],
		};
	},
	components: {
		Question,
		CustomScroller,
	},
	methods: {
		answer(id) {
			this.showAnswer === id
				? (this.showAnswer = null)
				: (this.showAnswer = id);
		},
	},
};
</script>

<style lang="scss" scoped>
.faq {
	padding: 0 m(30);
	margin-top: m(88);

	&__title {
		font-family: "BBLVRS", sans-serif;
		font-size: m(32);
		line-height: m(32);
		font-weight: 400;
		color: $white;

		margin-bottom: m(30);
	}

	&__text {
		font-family: "Montserrat", sans-serif;
		font-size: m(16);
		line-height: m(26);
		font-weight: 300;
		color: $green;

		width: m(174);
	}
}

@include desc {
	.faq {
		margin-top: 0;

		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		&__block {
			width: 60%;
			height: 50vh;
			overflow: hidden;
		}

		&__content {
			padding-left: d(50);
		}

		&__title {
			font-size: d(70);
			line-height: d(70);
		}

		&__text {
			font-size: d(25);
			line-height: d(30);

			width: 100%;
		}
	}
}
</style>
