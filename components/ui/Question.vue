<template lang="pug">
.question
	.question__block(
		:class="[showAnswer !== null && showAnswer !== id && 'question__block--opacity']"
		@click="contentShow"
	)
		.text(
			:class="{'text--green': showAnswer === id}"
		) {{ title }}
		img.question__icon(
			:src="Fag_icon"
			:class="{'question__icon--close': showAnswer === id}"
		)
	SlideUpDown.text(
		:active="showAnswer === id"
		:duration="500"
	) {{ content }}
</template>

<script>
import SlideUpDown from 'vue-slide-up-down';
import Fag_icon from "~/assets/img/faq_icon.png";

export default {
	props: ["showAnswer", "id", "title", "content", "show"],

	name: 'Question',
	data() {
		return {
			Fag_icon,
			active: false,
		}
	},
	components: {
		SlideUpDown
	},
	methods: {
		contentShow() {
			this.$emit('answer', this.id);
		}
	}
}
</script>

<style lang="scss" scoped>
.question {

	&__block {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		cursor: pointer;
		padding: m(30) 0;

		&--opacity {
			opacity: 0.4;
		}
	}

	&__icon {
		transform: rotate(45deg);
		transition-duration: 500ms;
		width: m(40);

		&--close {
			transition-duration: 500ms;
			transform: rotate(0);
		}
	}

	&::before {
		content: '';
		display: block;
		height: m(1);
		background-color: #fff;
		opacity: 0.1;
		width: 100%;
	}
}

.text {
	font-family: "Montserrat", sans-serif;
	font-size: m(16);
	line-height: m(26);
	font-weight: 400;
	color: #fff;

	&--green {
		color: #90ED91;
	}
}

@include desc {
	.question {
		&__icon {
			width: d(40);
		}

		&:first-child {
			margin-top: 0;
		}

		&__block {
			align-items: center;
			padding: d(50) 0;
			padding-right: d(50);
		}

		&::before {
			height: d(1);
		}

		&:last-child::after {
			content: '';
			display: block;
			height: d(1);
			background-color: #fff;
			opacity: 0.1;
			width: 100%;
		}
	}
	.text {
		font-size: d(20);
		line-height: d(24);
	}
}
</style>
