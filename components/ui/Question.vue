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
		SlideUpDown,
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
	margin-top: 30px;

	&__block {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		cursor: pointer;
		margin: 30px 0;

		&--opacity {
			opacity: 0.4;
		}
	}

	&__icon {
		transform: rotate(45deg);
		transition-duration: 500ms;
		width: 40px;

		&--close {
			transition-duration: 500ms;
			transform: rotate(0);
		}
	}

	&::before {
		content: '';
		display: block;
		height: 1px;
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
		margin-top: 50px;

		&:first-child {
			margin-top: 0;
		}

		&__block {
			align-items: center;
			margin: 50px 0;
			padding-right: d(50);
		}

		&::before {
			width: 100vh;
		}

		&:last-child::after {
			content: '';
			display: block;
			height: 1px;
			background-color: #fff;
			opacity: 0.1;
			width: 100vh;
		}
	}
	.text {
		font-size: d(20);
		line-height: d(24);
	}
}
</style>
