<template lang="pug">
.page
	RenderCanvas
	Header.page__header
	Enter.page__enter
</template>

<script>
import RenderCanvas from "~/components/renderApp/renderComingSoon.vue";
import Header from "~/components/composits/Header";
import Enter from "~/components/ui/Enter";

export default {
	name: "IndexPage",
	async asyncData({ $api }) {
		// const book = await $api.bible.book();
		const chaptersResp = await $api.bible.chapters();

		const chapterIdExample = chaptersResp.data.data[0].id;
		const chapterResp = await $api.bible.chapter(chapterIdExample);
		const chapterHTML = chapterResp.data.data.content;
	},
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

<style lang="scss">
.page {
	background: black;
	background-size: cover;
	width: 100%;
	height: 100vh;
	position: relative;

	&__enter {
		position: absolute;
		bottom: m(24);
		left: 50%;
		transform: translateX(-50%);
	}

	&__popup {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	&__about {
		position: absolute;
		left: m(80);
		bottom: m(82);
	}

	&__soc {
		position: absolute;
		right: m(80);
		bottom: m(82);
	}
}

@include desc {
	.page {
		&__about {
			left: d(80);
			bottom: d(82);
		}

		&__soc {
			right: d(80);
			bottom: d(82);
		}

		&__enter {
			bottom: d(136);
		}
	}
}
</style>
