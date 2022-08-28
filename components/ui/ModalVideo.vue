<template lang="pug">
.modal-video(
	@click="closeFormClickModal"
	:class="{'modal-video_active' : iframeVideo}"
)
    .modal-video__inner
        .modal-video__video(
			v-html="iframeVideo"
		)
    .modal-video__close(
		@click="closeVideo"
	)
        include ../../assets/svg/x.svg
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState({
			iframeVideo: (state) => state.modalVideo.iframeVideo,
		}),
	},

	methods: {
		closeVideo() {
			this.$store.commit("modalVideo/closeVideo");
		},

		closeFormClickModal(e) {
			if (e.target.className === "modal-video modal-video_active") {
				this.closeVideo();
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.modal-video {
	position: fixed;
	z-index: 2000;
	background-color: rgba(0, 0, 0, 0.9);
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	pointer-events: none;
	opacity: 0;
	transition: opacity 0.5s ease, visibility 0.5s step-end;
	visibility: hidden;
	display: flex;
	padding: 50px;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	overflow: auto;

	&_active {
		opacity: 1;
		visibility: visible;
		pointer-events: all;
		transition: opacity 0.5s ease, visibility 0s step-start;
	}

	&__inner {
		position: relative;
		width: 80%;

		&::before {
			content: "";
			display: block;
			padding-top: 56.25%;
		}
	}

	&__video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		::v-deep iframe {
			height: 100%;
			width: 100%;
		}
	}

	&__close {
		cursor: pointer;
		position: absolute;
		top: 40px;
		right: 40px;

		svg {
			path {
				fill: $white;
			}
		}
	}
}

@media screen and (max-width: 760px) {
	.modal-video {
		padding: 0;

		&__inner {
			width: 100%;
		}
	}
}
</style>
