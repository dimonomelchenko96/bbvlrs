<template lang="pug">
.layout
	.content
		.content__screen
			Header.content__header
			Footer.content__footer(
				:textAbout="textAbout"
			)
			SearchScreen
			Nuxt.content__page
</template>

<script>
import Header from "~/components/ui/Header";
import Footer from "~/components/ui/Footer";
import SearchScreen from '~/components/screens/SearchScreen'

export default {
	components: {
		Header,
		Footer,
		SearchScreen
	},
	data() {
		return {
			textAbout: "About Project",
		};
	},

	methods: {
		aboutSearch(entries) {
			entries.forEach((entry) => {
				console.log(entry.target.id)
				if (entry.target.id === "initialPage" && entry.isIntersecting) {
					this.textAbout = "About Project";
					this.$store.commit("isInitialPage");
				}
				if (entry.target.id === "showroom" && entry.isIntersecting) {
					this.textAbout = "About Collection";
					this.$store.commit("scrollInitialPage");
					this.$store.commit("isNotInitialPage");
				}
				if (entry.target.id === "team-member" && entry.isIntersecting) {
					this.textAbout = "All members";
					this.scrollDownShow = !this.scrollDownShow;
				}
				if (entry.target.id === "source" && entry.isIntersecting) {
					this.textAbout = "none";
					this.scrollDownShow = !this.scrollDownShow;
				}
				if (entry.target.id === "roadmap" && entry.isIntersecting) {
					this.textAbout = "roadmap";
					this.scrollDownShow = !this.scrollDownShow;
				}
				if (entry.target.id === "collaboration" && entry.isIntersecting)
					this.textAbout = "Watch full video";
				if (entry.target.id === "faq" && entry.isIntersecting) {
					{
						this.textAbout = "none";
						this.$store.commit("isNotInitialPage");
					}
				}
			});
		},
	},
	mounted() {
		let options = {
			rootMargin: "10px",
			threshold: 0.5,
		};

		let observer = new IntersectionObserver(this.aboutSearch, options);

		const initialPage = document.querySelector("#initialPage");
		const showroom = document.querySelector("#showroom");
		const teamMember = document.querySelector("#team-member");
		const source = document.querySelector("#source");
		const roadmap = document.querySelector("#roadmap");
		const collaboration = document.querySelector("#collaboration");
		const faq = document.querySelector("#faq");

		if (initialPage) observer.observe(initialPage);
		if (showroom) observer.observe(showroom);
		if (teamMember) observer.observe(teamMember);
		if (source) observer.observe(source);
		if (roadmap) observer.observe(roadmap);
		if (collaboration) observer.observe(collaboration);
		if (faq) observer.observe(faq);
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
