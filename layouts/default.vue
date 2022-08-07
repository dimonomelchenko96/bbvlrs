<template lang="pug">
.layout
	.content
		.content__screen
			Header.content__header
			Footer.content__footer
		FirstScreen.content__first(
			v-if="mainShow"
		)
		Nuxt.content__page
</template>

<script>
import FirstScreen from "~/components/screens/FirstScreen";
import Header from "~/components/ui/Header";
import Footer from "~/components/ui/Footer";

import { mapState } from 'vuex'
export default {
	components: {
		Header,
		Footer,
		FirstScreen
	},
	computed: {
		...mapState({
			mainShow: (state) => state.mainShow,
		}),
	},
};
</script>

<style lang="scss" scoped>
.layout {
	overflow: hidden;
	background-color: $black;
}

.content {
	max-width: $max-width;
	margin: 0 auto;
	position: relative;

	&__first {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 50;
		width: 100%;
	}

	&__screen {
		position: relative;
	}

	&__header {
		position: absolute;
		top: 0;
	}
}
</style>
