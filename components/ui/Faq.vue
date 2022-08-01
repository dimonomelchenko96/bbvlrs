<template lang="pug">
.faq
	h2.faq__title faq
	.faq__text Frequently asked questions
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
import Question from "~/components/Question.vue";

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
	background-image: url("../../assets/img/Background.jpg");
	padding: 100px 30px 30px;



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
		font-weight: 300;
		line-height: m(26);
		color: #90ee90;

		width: 174px;
	}
}
</style>
