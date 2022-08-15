<template lang="pug">
div
	.card(
		v-for="card in roadmapData"
	)
		template(v-for="content in card.content")
			template(v-if="content.acf_fc_layout === 'image'")
				Device
					template(#mob)
						.card__img
							img(:src="content.image.sizes.medium")
					template(#desc)
						.card__img
							img(:src="content.image.sizes.large")
			template(
				v-if="content.acf_fc_layout === 'video'"
				)
				.card__video
					.card__video__overlay(
						@click="playVideoToggle(content.video.filename)"
					)
					video(
						playsinline
						:src='content.video.url'
						:ref="content.video.filename"
					)
			h3.card__title(
				v-if="content.acf_fc_layout === 'title'"
			) {{ content.title }}
			p.card__text(
				v-if="content.acf_fc_layout === 'text'"
			) {{ content.text }}


</template>

<script>
import Device from "~/components/helpers/Device";

export default {
	props: ["roadmapData"],
	data() {
		return {
			playsVideos: {},
		};
	},
	components: {
		Device,
	},
	methods: {
		playVideoToggle(idRef) {
			if (!this.playsVideos[idRef]) {
				console.log("dsf");
				this.playsVideos[idRef] = true;
				this.$refs[idRef][0].play();
			} else {
				this.playsVideos[idRef] = false;
				this.$refs[idRef][0].pause();
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	color: #ffffff;
	width: m(244);
	text-align: left;

	&__video {
		width: 100%;
		position: relative;

		video {
			width: 100%;
		}

		&__overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 999;
		}
	}

	&__img {
		margin-bottom: m(16);

		img {
			width: m(244);
			height: m(150);
			display: block;
		}
	}

	&__title {
		font-size: m(20);
		margin-bottom: m(16);
	}

	&__text {
		line-height: m(16);
		font-size: m(14);
	}
}
@include desc {
	.card {
		width: d(408);

		&__img {
			margin-bottom: d(16);

			img {
				width: d(408);
				height: d(253);
				display: block;
			}
		}

		&__title {
			font-size: d(20);
			margin-bottom: d(16);
		}

		&__text {
			width: d(318);
			line-height: d(16);
			font-size: d(14);

			&.left-text {
				margin-left: auto;
			}
		}
	}
}
</style>
