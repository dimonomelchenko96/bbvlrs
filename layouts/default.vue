<template lang="pug">
.layout(
	:class="[theme === 'white' && 'layout_white' ]"
)
	.content
		.content__screen
			Header.content__header
			Footer.content__footer(
				:textAbout="textAbout"
			)
			SearchScreen
			ModalVideo(
				v-if="iframeVideo"
			)
			transition(
			:name="transitionName"
			)
				Nuxt.content__page
</template>

<script>
import Header from "~/components/ui/Header";
import Footer from "~/components/ui/Footer";
import SearchScreen from "~/components/screens/SearchScreen";
import ModalVideo from "~/components/ui/ModalVideo";

import { mapState } from "vuex";

export default {
	components: {
		Header,
		Footer,
		SearchScreen,
		ModalVideo,
	},

	computed: {
		...mapState({
			iframeVideo: (state) => state.modalVideo.iframeVideo,
			theme: (state) => state.theme,
		}),
	},

	data() {
		return {
			textAbout: "About Project",
			transitionName: "",
		};
	},
	watch: {
		$route(to, from) {
			const routeDeep = [
				"/",
				"/showroom",
				"/team",
				"/roadmap",
				"/source",
				"/collaboration",
				"/faq",
			];

			const toDepth = routeDeep.indexOf(to.path);
			const fromDepth = routeDeep.indexOf(from.path);
			this.transitionName =
				toDepth > fromDepth ? "slide-left" : "slide-right";

			if (to.path === "/") {
				this.textAbout = "About Project";
				this.$store.commit("themeToggle", "black");
			} else if (to.path === "/showroom") {
				this.textAbout = "About Collection";
				this.$store.commit("themeToggle", "black");
			} else if (to.path === "/team") {
				this.textAbout = "All members";
				this.$store.commit("themeToggle", "white");
			} else if (to.path === "/source") {
				this.textAbout = "none";
				this.$store.commit("themeToggle", "white");
			} else if (to.path === "/roadmap") {
				this.textAbout = "roadmap";
				this.$store.commit("themeToggle", "black");
			} else if (to.path === "/collaboration") {
				this.textAbout = "Watch full video";
				this.$store.commit("themeToggle", "black");
			} else if (to.path === "/faq") {
				this.textAbout = "none";
				this.$store.commit("themeToggle", "white");
			}
		},
	},

	mounted() {
		if (this.$route.path === "/") {
			this.textAbout = "About Project";
			this.$store.commit("themeToggle", "black");
		}
		if (this.$route.path === "/showroom") {
			this.textAbout = "About Collection";
			this.$store.commit("themeToggle", "black");
		}
		if (this.$route.path === "/team") {
			this.textAbout = "All members";
			this.$store.commit("themeToggle", "white");
		}
		if (this.$route.path === "/source") {
			this.textAbout = "none";
			this.$store.commit("themeToggle", "white");
		}
		if (this.$route.path === "/roadmap") {
			this.textAbout = "roadmap";
			this.$store.commit("themeToggle", "black");
		}
		if (this.$route.path === "/collaboration") {
			this.textAbout = "Watch full video";
			this.$store.commit("themeToggle", "black");
		}
		if (this.$route.path === "/faq") {
			this.textAbout = "none";
			this.$store.commit("themeToggle", "white");
		}
	},
};
</script>

<style lang="scss" scoped>
.layout {
	overflow: hidden;
	background-color: $black;

	&_white {
		background-color: $backgroundThemeWhite;
	}
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

.slide-left-enter-active {
	animation-name: slide-left-in;
	animation-duration: 0.3s;
}
.slide-left-leave-active {
	animation-name: slide-left-out;
	animation-duration: 0.3s;
}
.slide-right-enter-active {
	animation-name: slide-right-in;
	animation-duration: 0.3s;
}
.slide-right-leave-active {
	animation-name: slide-right-out;
	animation-duration: 0.3s;
}

@keyframes slide-left-in {
	0% {
		transform: translateY(100%);
	}
	100% {
		transform: translateY(0);
	}
}

@keyframes slide-left-out {
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(-100%);
	}
}

@keyframes slide-right-in {
	0% {
		transform: translateY(-100%);
	}
	100% {
		transform: translateY(0);
	}
}
@keyframes slide-right-out {
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(100%);
	}
}
</style>
