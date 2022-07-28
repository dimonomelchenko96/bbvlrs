<template lang="pug">
.question
	.question__block
		.question__title.text {{ title }}
		img.question__icon(
			:src="Fag_icon"
		)
	.question__content.text {{ content }}
</template>

<script>
import SlideUpDown from 'vue-slide-up-down';
import Fag_icon from "~/assets/img/faq_icon.png";

export default {
	props: ["id", "title", "content"],
	name: 'Question',
	data() {
		return {
			Fag_icon
		}
	},
	components: {
		SlideUpDown,
	},
	methods: {
	}
}
</script>

<style lang="scss" scoped>
.question {
	&__block {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	&__icon {
		transform: rotate(45deg);
		width: 40px;
	}

	&::before {
		content: '';
		display: block;
		height: 1px;
		background-color: #fff;
		opacity: 0.1;
		margin-bottom: 32px;
	}

	&__content {

	}
}

.text {
	font-family: "Montserrat", sans-serif;
	font-size: m(16);
	font-weight: 400;
	line-height: m(26);
	color: #fff;
}
</style>
