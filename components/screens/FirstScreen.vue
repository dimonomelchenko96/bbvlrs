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
		h1.main__text-title(
			:class="{'main__text-title--show-title': scrollDownShow}"
		) {{ title }}
		h2.main__text-content(
			:class="{'main__text-content--show-content': scrollDownShow}"
		) {{ content }}
	button.scrolldown(
		@click="handleShow"
		:disabled="scrollDownShow"
	)
		include ../../assets/svg/scrolldown.svg
</template>

<script>
import hand from "~/assets/img/hand.png";
import { mapState } from "vuex";
export default {
	name: "Main",
	computed: {
		...mapState({
			scrollInitialPage: (state) => state.scrollInitialPage,
			isInitialPage: (state) => state.isInitialPage,
		}),
	},
	data() {
		return {
			title: "Welcome to the Bibleverse!",
			content: "The first meta version of the most influential story",
			scrollDownShow: false,
			hand,
		};
	},

	methods: {
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

			page.addEventListener("DOMMouseScroll", this.preventDefault, false); // older FF
			page.addEventListener(wheelEvent, this.preventDefault, wheelOpt); // modern desktop
			page.addEventListener("touchmove", this.preventDefault, wheelOpt); // mobile
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
		this.$refs.mainScroll.addEventListener("wheel", this.handleWheel, {
			// once: true,
		});

		let y;

		this.$refs.mainScroll.addEventListener(
			"touchstart",
			(e) => (y = e.changedTouches[0].clientY)
			// { once: true }
		);

		this.$refs.mainScroll.addEventListener(
			"touchend",
			(e) => e.changedTouches[0].clientY - y < -50 && this.handleShow()
			// { once: true }
		);
	},
};
</script>

<style lang="scss" scoped>
.main {
	color: #fff;
	text-align: center;
	display: grid;
	grid-template-rows: 1fr;
	height: 100vh;
	background: #000;
	position: relative;

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
			margin: 0;
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
		bottom: 9%;
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
			&_hidden {
			}

			&-title {
				font-size: d(84);
				line-height: d(84);
				margin-bottom: m(6);

				&--show-title {
				}
			}

			&-content {
				font-size: d(32);
				line-height: d(39);

				&--show-content {
				}
			}
		}

		.scrolldown {
			bottom: 3%;
		}
	}
}
</style>
