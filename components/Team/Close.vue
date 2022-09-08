<template lang="pug">
.close(
	:class="[theme === 'white' && 'close_white' ]"
)
	include ../../assets/svg/x.svg
	span Close
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState({
			theme: (state) => state.theme,
		}),
	},
};
</script>

<style lang="scss" scoped>
.close {
	cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;
	display: flex;
	align-items: baseline;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: m(14);
	line-height: m(17);
	color: $white;

	svg {
		width: m(12);
		height: m(12);
		margin-right: m(10);
	}

	&.close_white {
		color: $black;

		svg {
			path {
				fill: #000;
				stroke: #000;
			}
		}
	}
}

@include desc {
	.close {
		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;
		display: flex;
		align-items: baseline;
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		font-size: d(14);
		line-height: d(17);
		color: $white;

		svg {
			width: d(12);
			height: d(12);
			margin-right: d(10);
		}

		&.close_white {
			color: $black;

			svg {
				path {
					fill: #000;
					stroke: #000;
				}
			}
		}
	}
}
</style>
