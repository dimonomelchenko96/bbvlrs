<template lang="pug">
.layout
	.content
		.content__screen
			Header.content__header
			Footer.content__footer(
				:textAbout="textAbout"
			)
			//- FirstScreen.content__first(
			//- 	v-if="mainShow"
			//- )
			Nuxt.content__page
</template>

<script>
import FirstScreen from "~/components/screens/FirstScreen";
import Header from "~/components/ui/Header";
import Footer from "~/components/ui/Footer";

import { mapState } from "vuex";

export default {
	components: {
		Header,
		Footer,
		FirstScreen,
	},
	data() {
		return {
			textAbout: "About Project",
		};
	},
	computed: {
		...mapState({
			mainShow: (state) => state.mainShow,
		}),
	},
	methods: {
		aboutSearch(entries) {
			entries.forEach((entry) => {
				if (entry.target.id === "initialPage" && entry.isIntersecting)
					this.textAbout = "About Project";
				// if (entry.target.id === "showroom" && entry.isIntersecting)
				// 	this.textAbout = "About Collection";
				if (entry.target.id === "team" && entry.isIntersecting)
					this.textAbout = "All members";
				// if (entry.target.id === "source" && entry.isIntersecting)
				// 	this.textAbout = "none";
				if (entry.target.id === "roadmap" && entry.isIntersecting)
					this.textAbout = "roadmap";
				if (entry.target.id === "collaboration" && entry.isIntersecting)
					this.textAbout = "Watch full video";
				if (entry.target.id === "faq" && entry.isIntersecting)
					this.textAbout = "none";
			});
		},
	},
	mounted() {
		// window.addEventListener("touchend", this.visiblePage);
		let options = {
			rootMargin: "10px",
			threshold: 0.5,
		};

		// Создаем новый observer (наблюдатель)
		let observer = new IntersectionObserver(this.aboutSearch, options);

		const initialPage = document.querySelector("#initialPage");
		const showroom = document.querySelector("#showroom");
		const team = document.querySelector("#team");
		const source = document.querySelector("#source");
		const roadmap = document.querySelector("#roadmap");
		const collaboration = document.querySelector("#collaboration");
		const faq = document.querySelector("#faq");
		observer.observe(initialPage);
		// observer.observe(showroom);
		observer.observe(team);
		// observer.observe(source);
		observer.observe(roadmap);
		observer.observe(collaboration);
		observer.observe(faq);
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
