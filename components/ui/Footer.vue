<template lang="pug">
div
	Device
		template(#mob)
			.box
				.about-project(
					v-if = "textAbout === 'About Project'"
					@click ="showAboutProject"
				)
					include ../../assets/svg/i.svg
					p {{textAbout}}
				.about-project(
					v-if = "textAbout === 'All members'"
					@click ="showAllMembers"
				)
					include ../../assets/svg/i.svg
					p {{textAbout}}
				.about-project(
					v-if = "textAbout === 'About Collection'"
					@click ="aboutCollection"
				)
					include ../../assets/svg/i.svg

		template(#desc)
			.box
				.about-project(
					v-if="textAbout === 'About Project'"
					@click="showAboutProject"
				)
					include ../../assets/svg/i.svg
					p {{textAbout}}
				.about-project(
					v-if="textAbout === 'All members'"
					@click="showAllMembers"
				)
					include ../../assets/svg/i.svg
					p {{textAbout}}
				.about-project(
					v-if="textAbout === 'About Collection'"
					@click="aboutCollection"
				)
					include ../../assets/svg/i.svg
					p {{textAbout}}
				.about-project(
					v-if="textAbout === 'Watch full video'"
					@click="watchFullVideo"
				)
					.svg
						include ../../assets/svg/play.svg
					p.green {{textAbout}}
				SocialLinksMenu.links

	About(
		v-if="showAbout || collaborations"
		@closePopup="togglePopup($event)"
	)
</template>

<script>
import SocialLinksMenu from "~/components/ui/SocialLinksMenu.vue";
import Device from "~/components/helpers/Device";
import About from "~/components/ui/About";

import { mapState } from "vuex";
export default {
	data() {
		return {
			showAbout: false,
		};
	},
	props: ["textAbout"],
	components: {
		SocialLinksMenu,
		Device,
		About,
	},
	computed: {
		...mapState({
			mainShow: (state) => state.mainShow,
			collaborations: (state) => state.collaborations,
		}),
	},

	methods: {
		togglePopup(event) {
			if (this.textAbout === "About Project") this.showAbout = event;
			if (this.textAbout === "Watch full video")
				this.$store.commit("fullVideoCollaborationsToggle");
		},
		showAboutProject() {
			this.showAbout = !this.showAbout;
		},
		showAllMembers() {},
		aboutCollection() {},
		watchFullVideo() {
			this.$store.commit("fullVideoCollaborationsToggle");
		},
	},
};
</script>

<style lang="scss" scoped>
.box {
	.about-project {
		display: flex;
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		font-size: m(16);
		color: #fff;
		cursor: pointer;

		position: absolute;
		bottom: 3%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 100;

		svg {
			width: m(20);
			height: m(20);
			margin-right: m(10);
		}
	}
}

@include desc {
	.box {
		.about-project {
			padding-left: d(80);
			font-size: d(16);
			left: 0;
			transform: translate(0%, -50%);
			bottom: 2%;
			.green {
				color: #90ec90;
			}
			.svg {
				display: flex;
				justify-content: center;
				align-items: center;
				width: d(20);
				height: d(20);
				margin-right: d(16);
				border: d(1) solid #90ec90;
				border-radius: 50%;

				svg {
					margin: 0;
					width: d(6);
					height: d(8);
				}
			}
			svg {
				width: d(20);
				height: d(20);
				margin-right: d(10);
			}
		}

		.links {
			padding-right: d(80);
			display: block;
			position: absolute;
			bottom: 3%;
			right: 0;
			z-index: 102;
		}
	}
}
</style>
