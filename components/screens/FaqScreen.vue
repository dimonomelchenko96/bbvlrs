<template lang="pug">
.faq
	.faq__content
		h2.faq__title {{ faq.title }}
		.faq__text {{ faq.text }}
	CustomScroller.faq__block
		Question(
			v-for="(question, ind) in questions"
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

export default {
	props: ["faq"],
	name: "Faq",
	data() {
		return {
			showAnswer: null,
			questions: this.faq.qa,
		};
	},
	components: {
		Question,
		CustomScroller,
	},
	methods: {
		answer(id) {
			this.showAnswer !== id
				? (this.showAnswer = id)
				: (this.showAnswer = null);
		},
	},
};
</script>

<style lang="scss" scoped>
.layout_white {
	.faq {
		&__title {
			color: #000;
		}
		&__text {
			color: #b8a2fa;
		}
	}
}

.faq {
	padding: m(80) m(30) 0;

	&__title {
		font-family: "BBLVRS", sans-serif;
		font-size: m(32);
		line-height: m(32);
		font-weight: 400;
		color: #fff;

		margin-bottom: m(30);
	}

	&__block {
		height: calc(var(--vh) * 65);
	}

	&__text {
		font-family: "Montserrat", sans-serif;
		font-size: m(16);
		line-height: m(26);
		font-weight: 300;
		color: #90ee90;

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
