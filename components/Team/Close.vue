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
	cursor: pointer;
	display: flex;
	align-items: center;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: d(14);
	line-height: d(17);
	color: $white;
	svg {
		margin-right: d(10);
	}

	&.close_white {
		color: $black;

		svg {
			path {
				stroke: $black;
			}
		}
	}
}
</style>
