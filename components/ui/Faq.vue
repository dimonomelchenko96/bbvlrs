<template lang="pug">
.faq
	.faq__content
		h2.faq__title faq
		.faq__text Frequently asked questions
	.faq__block
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

export default {
	name: 'Faq',
	data() {
		return {
			showAnswer: null,
			questions: [
				{
					id: 1,
					title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 2,
					title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 3,
					title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 4,
					title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 5,
					title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 6,
					title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 7,
					title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				},
				{
					id: 8,
					title:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
					content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
				}
			]

		}
		},
	components: {
		Question,
	},
	methods: {
		answer(id) {
			this.showAnswer === id
				? this.showAnswer = null
				: this.showAnswer = id;
		}
	}
}
</script>

<style lang="scss" scope>
.faq {
	padding: 0 m(30);
	margin-top: m(88);

	&__title {
		font-family: "BBLVRS", sans-serif;
		font-size: m(32);
		line-height: m(32);
		font-weight: 400;
		color: #fff;

		margin-bottom: 30px;
	}

	&__text {
		font-family: "Montserrat", sans-serif;
		font-size: m(16);
		line-height: m(26);
		font-weight: 300;
		color: #90ee90;

		width: 174px;
	}
}

@include desc {
	.faq {
		// padding: 0;
		margin-top: 0;
		// margin-bottom: d(98);
		// height: 100vh;
		// height: 600px;
		// box-sizing: border-box;
		// overflow-y: auto;

		display: flex;
		justify-content: space-between;
		align-items: center;
		// gap: 300px;
		width: 100%;

		&__block {
			width: 60%;
			height: 600px;
			overflow-y: scroll;
			overflow-x: hidden;
			// overflow: hidden;
			// scroll-behavior: auto;

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
