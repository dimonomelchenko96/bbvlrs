<template lang="pug">
.logo(
	:class="[theme === 'white' && 'logo_white']"
)
	nuxt-link(
		to="/"
	)
		include ../../assets/svg/logo-full.svg
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
.logo {
	width: m(20);
	height: m(32);
	position: relative;
	overflow: hidden;

	a {
		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;
	}

	&_white {
		svg {
			path {
				fill: $black;
			}
		}
	}

	svg {
		width: m(132);
		height: auto;
	}
}

@include desc {
	.logo {
		width: d(36);
		height: d(52);
		svg {
			width: d(215);
			height: auto;
		}
	}
}

@include hover {
	.logo {
		transition: width 0.25s linear;
		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;
		will-change: width;

		&:hover {
			width: d(215);
		}
	}
}
</style>
