<template lang="pug">
.chapter
	button.chapter__button.button(
		@click="closeBook()"
	)
		.button__text {{ name }}
		.button__arrow
			template
				include ../assets/svg/arrow.svg

	.chapter__desc.text.text_green {{ nameLong }}
	.chapter__text.text(
		v-html="chapterText.replaceAll('¶ ', '')"
	)

	.pages
		button.pages__arrow(
			:disabled="chapter === 1"
			@click="prevPage()"
		)
			template
				include ../assets/svg/arrow.svg
		.pages__number
			.text {{ chapter }}
			.text.text_gray &nbsp/ {{ chaptersLength }}
		button.pages__arrow.pages__arrow--right(
			:disabled="chaptersLength === chapter"
			@click="nextPage()"
		)
			template
				include ../assets/svg/arrow.svg
</template>

<script>
export default {
	props: ["openBook", "name", "nameLong", "chaptersLength", "chapterText", "chapter"],
	name: 'chapterBible',
	data() {
		return {
		}
	},
	components: {},
	methods: {
		closeBook() {
			this.$emit('clickClose');
		},

		nextPage() {
			this.$emit('nextPage');
		},
		prevPage() {
			this.$emit('prevPage');
		}
  	}
}
</script>

<style lang="scss" scoped>
.chapter {
	padding: 0 m(32) m(140);
	background-color: #000;
	position: relative;

	&__desc{
		margin: m(32) 0;
		width: 75%;
	}

	&__content {
		display: grid;
		gap: 32px;

		&::before {
			content: "";
			height: 1px;
			display: block;
			background-color: #fff;
			opacity: 0.1;
			width: 100%;
		}
	}

	&__text {
		::v-deep {
			.c {
				display: none;
			}

			.v {
				font-family: "Montserrat";
				font-size: m(16);
				line-height: m(26);
				color: #90ee90;
				font-weight: 700;

				display: block;
				margin: m(12) 0;
			}

			.verse-span {
				font-family: "Montserrat";
				font-size: m(16);
				line-height: m(26);
				color: #fff;
				font-weight: 400;
			}

			.fr {
				font-family: "Montserrat";
				font-size: m(16);
				line-height: m(26);
				color: #90ee90;
				font-weight: 400;

				display: block;
				margin: m(6) 0 m(6) m(20);
			}

			.ft {
				font-family: "Montserrat";
				font-size: m(16);
				line-height: m(26);
				color: #fff;
				font-weight: 400;

				display: block;
				margin: m(6) 0 m(6) m(20);
			}
		}
	}
}

.button {
	box-sizing: border-box;
	background-color: rgba(255, 255, 255, 0.05);
	width: 100%;
	border: 1px solid rgba(255, 255, 255, 0.05);
	border-radius: 4px;

	padding: 8px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	&__item {
		display: flex;
		flex-direction: column;

		&::after {
			content: "";
			height: 1px;
			display: block;
			background-color: #fff;
			opacity: 0.1;
			width: 100%;

			margin-top: 8px;
		}
	}

	&__link {
		width: 100%;
	}

	&__text {
		font-family: "BBLVRS";
		font-size: m(32);
		line-height: m(32);
		font-weight: 400;
		color: #fff;
	}

	&__arrow {
		transform: rotate(-90deg);
		width: 40px;
		height: 40px;

		display: flex;
		justify-content: center;
		align-items: center;
	}
}

.text {
	font-family: "Montserrat";
	color:#fff;
	font-size: m(16);
	line-height: m(26);
	font-weight: 400;

	&_green {
		color: #90ee90;
		font-weight: 300;
	}

	&_width {
		font-weight: 700;
	}

	&_gray {
		opacity: 0.2;
	}
}

.pages {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	background-color: #000;

	position: fixed;
	bottom: m(70);
	left: 0;

	padding: m(8) m(24);

	&__arrow {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.05);
	}

	&__number {
		display: flex;
	}

	&__arrow {
		display: flex;
		justify-content: center;
		align-items: center;

		&--right {
			transform: rotate(180deg);
		}
	}
}
.par {


}
</style>
