<template lang="pug">
.faq
	h2.faq__title faq
	.faq__text Frequently asked questions
	Question
	Question
	Question
	Question
	Question
</template>

<script>
import Question from "./Question.vue";

export default {
	name: 'Faq',
	data() {
		return {
			// title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
			// content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?",
		}
		},
	components: {
		Question,
	},
	methods: {
	}
}
</script>

<style lang="scss" scope>
.faq {
	background-image: url('../assets/img/Background.png');
	padding: 100px 30px 30px;

	display: grid;
	gap: 30px;

	&__title {
		font-family: "BBLVRS", sans-serif;
		font-size: m(32);
		line-height: m(32);
		font-weight: 400;

		color: #fff;
	}

	&__text {
		font-family: "Montserrat", sans-serif;
		font-size: m(16);
		font-weight: 300;
		line-height: m(26);
		color: #90EE90;

		width: 174px;
	}
}
</style>
