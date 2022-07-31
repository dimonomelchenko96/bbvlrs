<template lang="pug">
.buttons
	button.buttons__btn whtppr
	button.buttons__btn.buttons__btn_mint mint
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>

@include desc {
	.buttons {
		&__btn {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: d(18);
			line-height: d(22);
			color: #FFFFFF;
			background: #212121;
			width: d(218);
			height: d(52);

			&_mint {
				color: #0D0E0E;
				background: #76D676;
			}

			&:not(:last-of-type) {
				margin-right: d(24);
			}
		}
	}
}
</style>
