<template lang="pug">
.main
	div(
		:class="[scrollDownShow ? 'hidden' : '']"
	)
		h1.main__title(
			:class="[scrollDownShow ? 'show-title' : '']"
		) {{ title }}
		h2.main__content(
			:class="[scrollDownShow ? 'show-content' : '']"
		) {{ content }}
	button.scrolldown(
		@click="handleShow"
		:disabled="scrollDownShow"
	)
		include ../../assets/svg/scrolldown.svg

	.box
		div.about-project
			include ../../assets/svg/i.svg
			p About Project
		SocialLinksMenu.links
</template>

<script>
import SocialLinksMenu from "~/components/ui/SocialLinksMenu.vue";
export default {
	name: "Main",
	data() {
		return {
			title: "Welcome to the Bibleverse!",
			content: "The first meta version of the most influential story",
			scrollDownShow: false,
		};
	},
	components: {
		SocialLinksMenu,
	},
	methods: {
		handleShow() {
			this.scrollDownShow = !this.scrollDownShow;
		},
		handleWheel() {
			this.handleShow();
		},
	},
	mounted() {
		window.addEventListener("wheel", this.handleWheel, { once: true });

		let y;

		window.addEventListener(
			"touchstart",
			(e) => (y = e.changedTouches[0].clientY),
			{ once: true }
		);

		window.addEventListener(
			"touchend",
			(e) => e.changedTouches[0].clientY - y < -50 && this.handleShow(),
			{ once: true }
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
	height: 80vh;

	div {
		align-self: center;

		&.hidden {
			overflow: hidden;
		}
	}

	&__title {
		font-family: "BBLVRS", sans-serif;
		font-size: m(42);
		line-height: m(57);
		font-weight: 400;
		text-transform: uppercase;
		margin: 0;
		margin-bottom: m(8);
		transition: transform 0.8s cubic-bezier(1, 0.5, 0.8, 1);

		&.show-title {
			transform: translateX(-100vw);
		}
	}

	&__content {
		font-family: "Montserrat", sans-serif;
		font-size: m(16);
		font-weight: 300;
		line-height: m(20);
		padding: 0 m(15);
		margin: 0 auto;
		transition: transform 0.8s cubic-bezier(1, 0.5, 0.8, 1);

		&.show-content {
			transform: translateX(100vw);
		}
	}
	.scrolldown {
		display: block;
		position: absolute;
		bottom: 9%;
		left: 50%;
		transform: translate(-50%, -50%);
		cursor: pointer;
	}

	.box {
		position: absolute;
		bottom: 3%;
		left: 50%;
		transform: translate(-50%, -50%);

		.about-project {
			display: flex;
			font-family: "Montserrat";
			font-style: normal;
			font-weight: 400;
			font-size: m(16);
			color: #fff;
			cursor: pointer;

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
}

@include desc {
	.main {
		&__title {
			font-size: d(84);
			line-height: d(84);

			margin-bottom: m(6);
		}

		&__content {
			font-size: d(32);
			line-height: d(39);
		}

		.scrolldown {
			bottom: 3%;
		}
		.box {
			padding: 0 d(80);
			width: 100%;
			display: flex;
			justify-content: space-between;

			.about-project {
				font-size: d(16);

				svg {
					width: d(20);
					height: d(20);
					margin-right: d(10);
				}
			}

			.links {
				display: block;
			}
		}
	}
}
</style>
