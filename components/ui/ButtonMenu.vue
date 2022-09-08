<template lang="pug">
.buttons
	button.buttons__btn whtppr
	button.buttons__btn.buttons__btn_mint(
		:class="[theme === 'white' && 'buttons__btn_white' ]"
	) mint
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "ButtonMenu",

	computed: {
		...mapState({
			theme: (state) => state.theme,
		}),
	},
};
</script>

<style lang="scss" scoped>
.buttons {
	&__btn {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		font-size: m(18);
		background: #212121;
		width: m(147);
		height: m(52);
		border: none;
		color: $white;

		&_mint {
			color: #0d0e0e;
			background: $green;
		}

		&:not(:last-of-type) {
			margin-right: m(16);
		}
	}
}

@include desc {
	.buttons {
		&__btn {
			font-size: d(18);
			line-height: d(22);
			width: d(218);
			height: d(52);
			margin-bottom: 0;
			cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;

			&:not(:last-of-type) {
				margin-right: d(24);
			}

			&_mint {
				text-transform: uppercase;
			}

			&.buttons__btn_white {
				background: $lilac;
			}
		}
	}
}
</style>
