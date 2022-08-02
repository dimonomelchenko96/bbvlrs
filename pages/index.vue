<template lang="pug">
.page
	//- RenderCanvas
	//- Header.page__header
	//- Enter.page__enter
	Collaborations
</template>

<script>
import RenderCanvas from "~/components/renderApp/renderComingSoon.vue";
import Header from "~/components/composits/Header";
import Enter from "~/components/ui/Enter";
import Collaborations from "~/components/ui/Collaborations";

export default {
	name: "IndexPage",
	data() {
		return {};
	},
	components: {
		Header,
		Enter,
		RenderCanvas,
		Collaborations,
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
.page {
	//background-image: url('../assets/img/back.png');
	background: black;
	background-size: cover;
	width: 100%;
	height: 100vh;
	position: relative;

	&__popup {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	&__about {
		position: absolute;
		left: d(80);
		bottom: d(82);
	}

	&__soc {
		position: absolute;
		right: d(80);
		bottom: d(82);
	}

	&__enter {
		position: absolute;
		bottom: d(136);
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>
