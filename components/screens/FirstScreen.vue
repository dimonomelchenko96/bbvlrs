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
		) {{ greetings.text }}
	CommingSoon.main__start-mint(
		v-if="event.active && eventShow"
		:event="event"
		@closeEvent="closeEvent($event)"
	)
	button.scrolldown(
		@click="handleShow"
		:disabled="scrollDownShow"
	)
		include ../../assets/svg/scrolldown.svg
</template>

<script>
import hand from "~/assets/img/hand.png";
import CommingSoon from "~/components/ui/CommingSoon";
import Device from "~/components/helpers/Device.vue";
import { mapState } from "vuex";

export default {
	name: "Main",

	components: { CommingSoon, Device },

	props: ["event", "greetings"],

	computed: {
		...mapState({
			scrollInitialPage: (state) => state.scrollInitialPage,
			isInitialPage: (state) => state.isInitialPage,
		}),
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
			const showroom = document.querySelector("#showroom");
			setTimeout(() => {
				this.$store.commit("notScrollInitialPage");
				if (showroom) showroom.scrollIntoView();
			}, 1200);
			this.scrollDownShow = !this.scrollDownShow;

			setTimeout(() => {
				this.scrollDownShow = !this.scrollDownShow;
			}, 2500);
		},
		handleWheel() {
			this.handleShow();
		},

		preventDefault(e) {
			e.preventDefault();
		},

		preventDefaultForScrollKeys(e) {
			if (keys[e.keyCode]) {
				this.preventDefault(e);
				return false;
			}
		},

		disableScroll() {
			const page = document.querySelector(".page");
			let supportsPassive = false;
			try {
				page.addEventListener(
					"test",
					null,
					Object.defineProperty({}, "passive", {
						get: function () {
							supportsPassive = true;
						},
					})
				);
			} catch (e) {}
			let wheelOpt = supportsPassive ? { passive: false } : false;
			let wheelEvent =
				"onwheel" in document.createElement("div")
					? "wheel"
					: "mousewheel";

			page.addEventListener("DOMMouseScroll", this.preventDefault, false);
			page.addEventListener(wheelEvent, this.preventDefault, wheelOpt);
			page.addEventListener("touchmove", this.preventDefault, wheelOpt);
			page.addEventListener(
				"keydown",
				this.preventDefaultForScrollKeys,
				false
			);
		},
		enableScroll() {
			const page = document.querySelector(".page");

			let supportsPassive = false;

			try {
				page.addEventListener(
					"test",
					null,
					Object.defineProperty({}, "passive", {
						get: function () {
							supportsPassive = true;
						},
					})
				);
			} catch (e) {}
			let wheelOpt = supportsPassive ? { passive: false } : false;
			let wheelEvent =
				"onwheel" in document.createElement("div")
					? "wheel"
					: "mousewheel";

			page.removeEventListener(
				"DOMMouseScroll",
				this.preventDefault,
				false
			);
			page.removeEventListener(wheelEvent, this.preventDefault, wheelOpt);
			page.removeEventListener(
				"touchmove",
				this.preventDefault,
				wheelOpt
			);
			page.removeEventListener(
				"keydown",
				this.preventDefaultForScrollKeys,
				false
			);
		},
	},
	watch: {
		scrollInitialPage(newProps) {
			if (newProps) this.enableScroll();
		},
		isInitialPage(newProps) {
			if (newProps) {
				this.disableScroll();
			} else this.enableScroll();
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
		cursor: pointer;
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
