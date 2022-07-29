<template lang="pug">
.enter(:class="{'enter_active': active, 'enter_active2': active2}")
	.enter__text What do you believe in?
	InputForm.enter__input(
		placeholder="Type max 2 words"
		@onEnter="enter($event)"
	)
	.enter__green {{ text }}
</template>

<script>
import  InputForm from '~/components/ui/InputForm'
export default {
	data() {
		return {
			text: '',
			active: false,
			active2: false
		}
	},
	components: {
		InputForm
	},
	methods: {
		enter(val) {
			this.text = val;
			this.active = true;

			setTimeout(() => {
				this.active2 = true
				this.text ='Your belief has entered the BBLVRS, be patient, the universe will reveal itself soon'
			}, 3000)
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

	&__text {
		margin-bottom: d(32);

	}

	&_active {
		.enter__input, .enter__text {
			display: none;
		}

		.enter__green {
			display: block;
			height: d(40);
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: d(16);
			line-height: d(26);

			color: #90EE90;
		}
	}
	&_active2 {
		.enter__input {
			display: none;
		}

		.enter__green {
			display: block;
			height: d(40);
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: d(16);
			line-height: d(26);
			max-width: d(400);
			text-align: center;
			color: #90EE90;
		}
	}

}
</style>
