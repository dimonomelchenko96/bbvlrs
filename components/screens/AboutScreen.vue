<template lang="pug">
Device(
	v-if="aboutProject"
)
	template(#mob)
		Popup.popup-menu(
			@closePopup="closeAbout"
		)
			.about
				.about__title {{ about.title }}
				.about__content {{ about.text }}
				.about__images
					.about__block
						img.about__img(
							:src="about.image1.sizes.medium"
						)
					.about__block
						img.about__img(
							:src="about.image2.sizes.medium"
						)
	template(#desc)
		.popup-menu
			.about.page-about__content
					.about__title {{ about.title }}
					.about__content {{ about.text }}
					.about__images
						.about__block
							img.about__img(
								:src="about.image1.sizes.medium_large"
							)
						.about__block
							img.about__img(
								:src="about.image2.sizes.medium_large"
							)
			Close.about__close-button(
				@click.native="closeAbout"
			)
</template>

<script>
import Close from "~/components/Team/Close";
import Popup from "~/components/helpers/Popup.vue";
import Device from "~/components/helpers/Device";
import { mapState } from "vuex";

export default {
	name: "About",
	props: ["about"],
	computed: {
		...mapState({
			aboutProject: (state) => state.aboutProject,
		}),
	},

	components: {
		Close,
		Popup,
		Device,
	},

	methods: {
		closeAbout() {
			this.$store.commit("aboutProjectToggle");
		},
	},
};
</script>

<style lang="scss" scoped>
.popup-menu {
	background: #000;
	position: fixed;
	top: 0;
	height: calc(var(--vh) * 100);
	width: 100vw;
	z-index: 150;

	.about {
		padding: m(17) m(30);
		color: #fff;

		display: grid;
		gap: m(32);

		&__title {
			font-family: "BBLVRS", sans-serif;
			font-size: m(32);
			line-height: m(32);
			font-weight: 400;
			text-transform: uppercase;
		}

		&__images {
			display: grid;
			gap: m(30);
		}

		&__block {
			position: relative;
			overflow: hidden;
			width: 100%;

			&::before {
				content: "";
				display: block;
				padding-top: 100%;
			}
		}

		&__img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&__content {
			font-family: "Montserrat", sans-serif;
			font-size: m(16);
			line-height: m(26);
			font-weight: 400;
		}
	}
}

@include desc {
	.popup-menu {
		left: 0;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 100%;
		.about {
			margin: 0 auto;
			width: d(894);
			padding: 0;
			display: flex;
			flex-direction: column;
			gap: 0;

			&__title {
				font-size: d(62);
				line-height: d(62);
				text-align: center;
				margin-bottom: d(33);
			}

			&__images {
				display: flex;
				gap: 0;
				order: 1;
				margin-bottom: d(60);
			}

			&__block {
				margin-right: d(30);

				&:last-child {
					margin-right: 0;
				}
			}

			&__content {
				font-size: d(14);
				line-height: d(17);
				order: 2;
			}

			&__close-button {
				position: absolute;
				bottom: d(82);
				left: d(80);
			}
		}
	}
}
</style>
