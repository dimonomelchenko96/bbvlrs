<template lang="pug">
Device
	template(#mob)
		.box
			div.about-project(
				v-if = "$route.path === '/' && mainShow"
			)
				include ../../assets/svg/i.svg
				p About Project
			SocialLinksMenu.links
	template(#desc)
		.box
			div.about-project
				include ../../assets/svg/i.svg
				p About Project
			SocialLinksMenu.links
</template>

<script>
import SocialLinksMenu from "~/components/ui/SocialLinksMenu.vue";
import Device from "~/components/helpers/Device";
import { mapState } from "vuex";
export default {
	data() {
		return {};
	},
	components: {
		SocialLinksMenu,
		Device,
	},
	computed: {
		...mapState({
			mainShow: (state) => state.mainShow,
		}),
	},
	mounted() {
		console.log(this.$route.path);
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

	.links {
		display: none;
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
