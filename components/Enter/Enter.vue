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
import  InputForm from '~/components/ui/InputForm'
export default {
	data() {
		return {
			text: '',
			arrowActive: false,
			words: ['Money', 'Jesus', 'One', 'Two'],
			status: 'input'
		}
	},
	components: {
		InputForm
	},
	methods: {
		enter() {
			this.status = 'train';
			this.wordsTrain();
			this.$nuxt.$emit('bblvrts-start');
		},
		wordsTrain() {
			console.log(this.words)
			if (this.words.length) {
				setTimeout(() => {
					this.text = this.words.shift();
					this.wordsTrain()
				}, 500);
			} else {
				this.status = 'end';
			}
		}
	},
	watch: {
		text(val) {
			if (val && val.length > 1) this.arrowActive = true;
		}
	}

}
</script>

<style lang="scss" scoped>

.enter {
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: d(16);
	line-height: d(20);
	letter-spacing: -0.01em;
	color: #FFFFFF;
	display: flex;
	flex-direction: column;
	align-items: center;

	&__title {
		margin-bottom: d(32);

	}

	&__form {
		background: rgba(255, 255, 255, 0.05);
		border: d(1) solid rgba(255, 255, 255, 0.05);
		border-radius: d(4);
		display: flex;
		align-items: center;
		height: d(40);
		width: d(327);
		padding: 0 d(16);
	}

	&__input {
		flex-grow: 1;
		background: transparent;
		border: none;
		outline: none;
		height: 100%;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: d(16);
		line-height: d(26);
		color: #FFFFFF;

		&::placeholder {
			color: #FFFFFF;
			opacity: 0.3;
		}
	}

	&__arrow {
		cursor: pointer;

		&:disabled {
			opacity: 0.15;
		}
	}

	&__text, &__end {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		color: #87E087;
		text-align: center;
	}

	&__end {
		font-size: d(13);
		line-height: d(16);
		letter-spacing: -0.02em;
	}

	&__text {
		height: d(40);
		line-height: d(40);
		font-size: d(16);
	}

	&__end {
		span {
			display: block;
		}
	}
}
</style>
