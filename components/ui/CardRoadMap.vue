<template lang="pug">
.card
	template(v-for="content in roadmapData")
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
				.card-overlay(
					@click="playVideoToggle(content.video.filename)"
				)
					.card-overlay__text(
						v-if="idRefsTextShow !== content.video.filename"
					)
						.card-overlay__svg
							include ../../assets/svg/play.svg
						p Watch full video
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
			idRefsTextShow: "",
		};
	},

	components: {
		Device,
	},

	methods: {
		playVideoToggle(idRef) {
			if (!this.playsVideos[idRef]) {
				this.playsVideos[idRef] = true;
				this.$refs[idRef][0].play();
				this.idRefsTextShow = idRef;
			} else {
				this.playsVideos[idRef] = false;
				this.$refs[idRef][0].pause();
				this.idRefsTextShow = "";
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
	color: $white;
	width: m(244);
	text-align: left;

	&__video {
		width: 100%;
		position: relative;

		video {
			width: 100%;
		}
	}

	&-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;

		&__text {
			display: flex;
			font-size: m(16);
			color: $green;
		}

		&__svg {
			display: flex;
			justify-content: center;
			align-items: center;
			width: m(20);
			height: m(20);
			margin-right: m(16);
			border: m(1) solid $green;
			border-radius: 50%;

			svg {
				padding-left: m(1);
				margin: 0;
				width: m(8);
				height: m(8);
			}
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

		&-overlay {
			cursor: pointer;
			&__text {
				font-size: d(16);
			}
			&__svg {
				width: d(20);
				height: d(20);
				margin-right: d(16);
				border: d(1) solid $green;

				svg {
					padding-left: d(1);

					width: d(8);
					height: d(8);
				}
			}
		}

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
		}
	}
}
</style>
