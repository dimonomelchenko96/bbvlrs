<template lang="pug">
.chapter
	.audio
		.audio__img
			template
				include ../assets/svg/audio.svg
		.text Audio play

	.chapter__title {{ name }}

	button.chapter__button.button(
		@click="closeBook()"
	)
		.button__text {{ name }}
		.button__arrow
			template
				include ../assets/svg/arrow.svg

	.chapter__desc.text.text_green {{ nameLong }}
	CustomScroller.chapter__scroll
		.chapter__text.text(
			v-html="chapterText"
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
		.page-to-go
			.page-to-go__text Page to go
			.page-to-go__text.page-to-go__text--input
				input(
					type="number"
					v-model="text"
					:placeholder="chapter"
				)
			button.page-to-go__button(
				type="button"
				@click="pageGo()"
			) Go

		button.pages__arrow.pages__arrow--right(
			:disabled="chaptersLength === chapter"
			@click="nextPage()"
		)
			template
				include ../assets/svg/arrow.svg
</template>

<script>
import CustomScroller from "~/components/helpers/CustomScroller";
export default {
	props: [
		"openBook",
		"name",
		"nameLong",
		"chaptersLength",
		"chapterText",
		"chapter"
	],

	name: 'chapterBible',

	data() {
		return {
			text: "",
		}
	},

	components: {
		CustomScroller,
	},

	methods: {
		closeBook() {
			this.$emit('clickClose');
		},

		nextPage() {
			this.$emit('nextPage');
		},

		prevPage() {
			this.$emit('prevPage');
		},

		pageGo() {
			this.$emit('pageGo', +this.text);
			this.text = '';
		}
  }
}
</script>

<style lang="scss" scoped>
.chapter {
	padding: m(88) m(32) m(0);

	background-color: #000;
	position: relative;

	&__scroll {
		height: calc(var(--var) * 60);
	}

	&__title {
		display: none;
	}

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
		height: calc(var(--vh) * 50);
		overflow: scroll;

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

.audio {
	display: none;
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
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: m(56);
	background-color: #000;

	// position: fixed;
	bottom: m(0);
	left: 0;

	// padding: m(8) m(24);

	&__number {
		display: flex;
	}

	&__arrow {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 40px;
		width: 40px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.05);

		&--right {
			transform: rotate(180deg);
		}
	}
}

.page-to-go {
	display: none;
}

@include desc {
	.chapter {
		padding-top: d(112);
		padding-bottom: 0;
		height: 100%;

		display: flex;
		flex-direction: column;

		&__title {
			display: block;

			font-family: "BBLVRS";
			font-size: d(70);
			line-height: d(70);
			font-weight: 400;
			color: #fff;
		}

		&__desc{
			margin: 0 0 d(29) 0;

		}

		&__text {
			height: 100%;
			overflow-y: scroll;

			::v-deep {
				.c {
					display: none;
				}

				.v {
					font-size: d(16);
					line-height: d(26);
					margin: d(6) 0;
					margin-right: d(20);

				}

				.verse-span {
					font-size: d(16);
					line-height: d(26);
				}

				.fr {
					font-size: d(16);
					line-height: d(26);

					margin: d(6) 0 d(6) d(20);
				}

				.ft {
					font-size: d(16);
					line-height: d(26);

					margin: d(6) 0 d(6) d(20);
				}
			}
		}

		button {
			cursor: pointer;
		}
	}

	.audio {
		display: flex;
		align-items: center;

		margin-bottom: d(84);

		&__img {
			margin-right: d(10);
		}
	}

	.button {
		display: none;
	}

	.pages {
		position: relative;
		bottom: 0;
		padding: d(20) 0 0;

		&__number {
			// display: none;
		}
	}

	.text {
		font-size: d(16);
		line-height: d(26);
	}

	.page-to-go {
		display: flex;
		align-items: center;

		&__text {
			font-family: "Montserrat";
			font-style: italic;
			font-weight: 400;
			font-size: d(12);
			line-height: d(15);
			color: rgba(255, 255, 255, 0.5);

			margin-right: d(8);

			&--input {
				font-size: d(14);
			}
		}

		&__button {
			font-family: "Montserrat";
			font-weight: 400;
			font-size: d(16);
			line-height: d(26);
			text-transform: uppercase;
			color: #90ee90;
		}

		input {
			width: d(35);
			border: none;
			background-color: rgba(255, 255, 255, 0.05);
			color: rgba(255, 255, 255, 0.5);
		text-align: center;
		}
	}
}

</style>
