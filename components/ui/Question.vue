<template lang="pug">
.question
	.question__block(
		:class="[showAnswer !== null && showAnswer !== id && 'question__block--opacity']"
		@click="contentShow"
	)
		.text(
			:class="{ 'text--purple': showAnswer === id }"
		) {{ title }}

		.question__icon(
			:class="{ 'question__icon--close': showAnswer === id }"
		)
			include ../../assets/svg/arrow-left.svg

	SlideUpDown.text(
		:active="showAnswer === id"
		:duration="500"
	) {{ content }}
</template>

<script>
import SlideUpDown from "vue-slide-up-down";
import Fag_icon from "../../assets/svg/x-green.svg";

export default {
	props: ["showAnswer", "id", "title", "content", "show"],

	name: "Question",
	data() {
		return {
			Fag_icon,
			active: false,
		};
	},
	components: {
		SlideUpDown,
	},
	methods: {
		contentShow() {
			this.$emit("answer", this.id);
		},
	},
};
</script>

<style lang="scss" scoped>
.layout_white {
	.question {
		.text {
			color: $black;
		}

		&::before {
			background: rgba(#000000, 0.6);
		}
	}
}

.question {
	&__block {
		display: flex;
		justify-content: space-between;
		align-items: center;

		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;
		padding: m(30) 0;

		overflow-x: hidden;

		&--opacity {
			opacity: 0.4;
		}
	}

	&__icon {
		width: m(24);
		height: m(24);
		transition-duration: 500ms;

		svg {
			width: 100%;
			height: 100%;
			transform: rotate(-90deg);

			path {
				stroke: rgba(#000000, 0.6);
			}
		}

		&--close {
			transform: rotate(180deg);
		}
	}

	&::before {
		content: "";
		display: block;
		height: m(1);
		background-color: $white;
		opacity: 0.1;
		width: 100%;
	}
}

.text {
	font-family: "Montserrat", sans-serif;
	font-size: m(16);
	line-height: m(26);
	font-weight: 400;
	color: $white;

	&--purple {
		color: $lilac !important;
		font-weight: 700;
	}
}

@include desc {
	.question {
		&__icon {
			width: d(40);
			height: d(40);
		}

		&:first-child {
			margin-top: 0;
		}

		&__block {
			align-items: center;
			padding: d(50) 0;
		}

		&::before {
			height: d(1);
		}

		&:last-child::after {
			content: "";
			display: block;
			height: d(1);
			background-color: $white;
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
