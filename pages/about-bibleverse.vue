<template lang="pug">
.page-about
	Header
	About.page-about__content
	Close.page-about__close-button
</template>

<script>
import About from "~/components/ui/About";
import Header from "~/components/composits/Header";
import Close from "~/components/Team/Close";

export default {
	name: "AboutPage",

	data() {
		return {};
	},

	components: {
		About,
		Header,
		Close,
	},

	methods: {},
};
</script>

<style lang="scss">
.page-about {
	position: relative;
}

@include desc {
	.page-about {
		height: 100vh;

		&__content {
			position: absolute;
			top: 50%;
			left: 50%;

			transform: translate(-50%, -50%);
		}

		&__close-button {
			position: absolute;
			bottom: d(80);
			left: d(80);
		}
	}
}
</style>
