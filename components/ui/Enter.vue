<template lang="pug">
.enter(
	:class="status"
)
	.enter__title(
		v-if="status !== 'end'"
	) What do you believe in?
	form.enter__form(
		v-if="status === 'input'"
		@submit.prevent="enter"
	)
		input.enter__input(
			placeholder="Type max 2 words"
			v-model="text"
		)
		button.enter__arrow(
			type="submit"
			:disabled="!arrowActive"
		)
			include ../../assets/svg/arrow-icon.svg
	.enter__text(
		v-if="status === 'train'"
	) {{ text }}
	.enter__end(
		v-if="status === 'end'"
	)
		span Your belief has entered the BBLVRS,
		span be patient, the universe will reveal itself soon
</template>

<script>
export default {
	data() {
		return {
			text: "",
			arrowActive: false,
			words: ["Money", "Jesus", "One", "Two"],
			status: "input",
		};
	},
	methods: {
		enter() {
			this.status = "train";
			this.wordsTrain();
			this.$nuxt.$emit("bblvrts-start");
		},
		wordsTrain() {
			if (this.words.length) {
				setTimeout(() => {
					this.text = this.words.shift();
					this.wordsTrain();
				}, 700);
			} else {
				this.status = "end";
				this.$nuxt.$emit("bblvrts-end");
			}
		},
	},
	watch: {
		text(val) {
			this.arrowActive = val.length > 1;
		},
	},
};
</script>

<style lang="scss" scoped>
.enter {
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: m(16);
	line-height: m(20);
	letter-spacing: -0.01em;
	color: $white;
	display: flex;
	flex-direction: column;
	align-items: center;

	&__title {
		white-space: nowrap;
		margin-bottom: m(20);
	}

	&__form {
		background: rgba(255, 255, 255, 0.05);
		border: m(1) solid rgba(255, 255, 255, 0.05);
		border-radius: m(4);
		display: flex;
		align-items: center;
		height: m(40);
		width: m(327);
		padding: 0 m(16);
	}

	&__input {
		flex-grow: 1;
		background: transparent;
		border: none;
		outline: none;
		height: 100%;
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		font-size: m(16);
		line-height: m(26);
		color: $white;

		&::placeholder {
			color: $white;
			opacity: 0.3;
		}
	}

	&__arrow {
		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;

		&:disabled {
			cursor: default;
			opacity: 0.15;
		}
	}

	&__text,
	&__end {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		color: $green;
		text-align: center;
	}

	&__end {
		margin-bottom: m(20);
		font-size: m(13);
		line-height: m(16);
		letter-spacing: -0.02em;
	}

	&__text {
		height: m(40);
		line-height: m(40);
		font-size: m(16);
	}

	&__end {
		width: m(290);
		span {
			display: block;
		}
	}
}
@include desc {
	.enter {
		font-size: d(16);
		line-height: d(20);
		&__title {
			margin-bottom: d(32);
		}
		&__form {
			border: d(1) solid rgba(255, 255, 255, 0.05);
			border-radius: d(4);
			height: d(40);
			width: d(327);
			padding: 0 d(16);
		}

		&__input {
			font-size: d(16);
			line-height: d(26);
		}

		&__end {
			margin-bottom: 0;
			font-size: d(13);
			line-height: d(16);
		}

		&__text {
			height: d(40);
			line-height: d(40);
			font-size: d(16);
		}
	}
}
</style>
