<template lang="pug">
.pages
	button.pages__arrow(
		:disabled="item === 1"
		@click="prevPage()"
	)
		template
			include ../../assets/svg/arrow.svg
	.pages__number
		.pages__text {{ item }}
		.pages__text.pages__text--gray &nbsp/ {{ itemLength }}

	button.pages__arrow.pages__arrow--right(
		:disabled="itemLength === item"
		@click="nextPage()"
	)
		template
			include ../../assets/svg/arrow.svg
</template>

<script>

export default {
	props: ['item', 'itemLength'],

	data() {
		return {
		};
	},
	components: {

	},
	methods: {
		nextPage() {
			this.$emit('nextPage');
		},

		prevPage() {
			this.$emit('prevPage');
		},
	},
};
</script>

<style lang="scss" scoped>
.pages {
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: #000;

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

	&__text {
		font-family: "Montserrat";
		color:#fff;
		font-size: m(16);
		line-height: m(26);
		font-weight: 400;

		&--gray {
			opacity: 0.2;
		}
	}
}
</style>

