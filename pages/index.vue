<template lang="pug">
.main(

	ref="mainScroll"
)
	.main__img
		img(
			:src="hand"
			alt="red hand"
		)
	.main__text
		Device
			template(#mob)
				h2.main__text-title(
					:class="{'main__text-title--show-title': scrollDownShow}"
				) Welcome to #[br] the Bibleverse!
			template(#desc)
				h2.main__text-title(
					:class="{'main__text-title--show-title': scrollDownShow}"
				) Welcome to the Bibleverse!
		h3.main__text-content(
			:class="{'main__text-content--show-content': scrollDownShow}"
		) {{ page.greetings.text }}
	CommingSoon.main__start-mint(
		v-if="page.event.active && eventShow"
		:event="page.event"
		@closeEvent="closeEvent($event)"
	)
	button.scrolldown(
		@click="handleShow"
		:disabled="scrollDownShow"
	)
		include ../assets/svg/scrolldown.svg

	AboutScreen.page__screen(
		id="about"
		:about="page.about"
	)

</template>

<script>
import hand from "~/assets/img/hand.png";
import CommingSoon from "~/components/ui/CommingSoon";
import Device from "~/components/helpers/Device.vue";
import AboutScreen from "~/components/screens/AboutScreen";
import CircleProgressBar from "../components/CircleProgressBar.vue";
export default {
	name: "IndexPage",

	components: {
		CommingSoon,
		Device,
		AboutScreen,
		CircleProgressBar,
	},

	data() {
		return {
			scrollDownShow: false,
			hand,
			eventShow: true,
		};
	},

	methods: {
		closeEvent(e) {
			this.eventShow = e;
		},
		handleShow() {
			if (this.scrollDownShow) return;
			setTimeout(() => {
				this.$router.push("/showroom");
			}, 800);
			this.scrollDownShow = !this.scrollDownShow;
		},
		handleWheel() {
			this.handleShow();
		},
	},

	mounted() {
		this.$refs.mainScroll.addEventListener("wheel", this.handleWheel);

		let y;

		this.$refs.mainScroll.addEventListener(
			"touchstart",
			(e) => (y = e.changedTouches[0].clientY)
		);

		this.$refs.mainScroll.addEventListener(
			"touchend",
			(e) => e.changedTouches[0].clientY - y < -50 && this.handleShow()
		);
	},
	async asyncData({ $api, store }) {
		const mainResp = await $api.page.main();

		store.commit("socialLinks/addSocialStore", mainResp.acf.socials);
		store.commit(
			"modalVideo/iframeAddStore",
			mainResp.acf.collaboration.full_video
		);

		return {
			page: mainResp.acf,
		};
	},
};
</script>

<style lang="scss" scoped>
.main {
	color: $white;
	text-align: center;
	display: grid;
	grid-template-rows: 1fr;
	height: calc(var(--vh) * 100);
	background: $black;
	position: relative;

	&__start-mint {
		position: absolute;
		z-index: 4;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	&__img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
			margin: 0 auto;
		}
	}

	&__text {
		align-self: center;
		z-index: 2;
		overflow: hidden;

		&-title {
			font-family: "BBLVRS", sans-serif;
			font-size: m(42);
			line-height: m(57);
			font-weight: 400;
			text-transform: uppercase;
			margin: 0 auto;
			margin-bottom: m(8);
			transition: transform 0.8s cubic-bezier(1, 0.5, 0.8, 1);

			&--show-title {
				transform: translateX(-100vw);
			}
		}

		&-content {
			font-family: "Montserrat", sans-serif;
			font-size: m(16);
			font-weight: 300;
			line-height: m(20);
			padding: 0 m(15);
			margin: 0 auto;
			transition: transform 0.8s cubic-bezier(1, 0.5, 0.8, 1);

			&--show-content {
				transform: translateX(100vw);
			}
		}
	}

	.scrolldown {
		display: block;
		position: absolute;
		bottom: m(82);
		left: 50%;
		transform: translate(-50%, -50%);
		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;
		z-index: 100;
	}
}

@include desc {
	.main {
		&__img {
			img {
				width: auto;
			}
		}

		&__text {
			&-title {
				font-size: d(84);
				line-height: d(84);
				margin-bottom: m(6);
			}

			&-content {
				font-size: d(32);
				line-height: d(39);
			}
		}

		.scrolldown {
			svg {
				width: d(26);
				height: d(26);
			}

			bottom: d(80);
		}
	}
}
</style>
