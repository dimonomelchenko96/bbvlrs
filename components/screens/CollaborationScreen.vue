<template lang="pug">
.collaborations
	.collaborations__base
		div
			h3.collaborations__headline.text {{collaboration.title}}
			p.collaborations__text {{collaboration.description}}
	.collaborations__item(
		v-for="(collaboration, index) in collaboration.collaborations"
		:key="index"
		ref="item"
		@click="formOpen(collaboration.name)"
	)
		.collaborations__item-background(
			:class='[videoClicked && indexActive === index ? "active" : null]'
		)
		video(:class='[videoClicked && indexActive === index ? "active" : null]'
			:src='collaboration.video.url'
			muted
			loop
			ref='video'
			playsinline
		)
		p.item__text.text {{collaboration.name}}
		.arrow-container
			.arrow-container__arrow
	Form(
		v-if="modalForm"
		@closeForm="closeForm($event)"
		:subject="subject"
	)
</template>

<script>
import Form from "~/components/ui/Form";

export default {
	props: ["collaboration"],
	data() {
		return {
			modalForm: false,
			subject: "",
			videoClicked: false,
			indexActive: 0,
		};
	},
	methods: {
		formOpen(e) {
			this.modalForm = true;
			this.subject = e;
		},
		closeForm(e) {
			this.modalForm = e.closeForm;
			this.subject = e.subject;
		},
		videoOpen(e) {
			this.videoClicked = true;
			this.indexActive = e;
			this.$refs.video[this.indexActive].play();
		},
		videoClose(e) {
			this.videoClicked = false;
			this.$refs.video[this.indexActive].pause();
		},
	},
	components: {
		Form,
	},
	mounted() {
		let onInEvent = "touchstart";
		let onOutEvent = "touchend";

		if (window.matchMedia("(min-width: 768px)").matches) {
			onInEvent = "mouseover";
			onOutEvent = "mouseout";
		}
		this.$refs.item.forEach((item, i) => {
			item.addEventListener(onInEvent, () => this.videoOpen(i));
			item.addEventListener(onOutEvent, () => this.videoClose(i));
		});
	},
	// beforeDestroy() {
	// 	this.$refs.item.forEach((item, i) => {
	// 		item.removeEventListener(onInEvent, () => this.videoOpen(i));
	// 		item.removeEventListener(onOutEvent, () => this.videoClose(i));
	// 	});
	// },
};
</script>

<style lang="scss" scoped>
.text {
	font-family: "BBLVRS";
	font-style: normal;
	font-weight: 400;
	color: $white;
}
.collaborations {
	padding: m(88) m(32) m(72);
	overflow: hidden;

	&__headline {
		font-size: m(32);
		margin-bottom: m(40);
	}

	&__text {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 300;
		font-size: m(16);
		color: $green;
		margin-bottom: m(40);
	}

	&__item {
		position: relative;
		padding: m(32) m(10);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		display: flex;
		justify-content: space-between;
		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;

		&-background {
			position: absolute;
			opacity: 0;
			visibility: hidden;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(#000000, 0.7);
			z-index: 1;
			&.active {
				opacity: 1;
				visibility: visible;
			}
		}

		video {
			position: absolute;
			opacity: 0;
			visibility: hidden;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			&.active {
				opacity: 1;
				visibility: visible;
			}
		}

		.item__text {
			font-size: m(24);
			z-index: 2;
		}

		.arrow-container {
			display: flex;
			align-items: center;

			&__arrow {
				width: m(12);
				height: m(12);
				border-top: m(1) solid #fff;
				border-right: m(1) solid #fff;
				transform: rotate(45deg);
			}
		}
	}
}

@include desc {
	%afterCross {
		content: "";
		position: absolute;
		background: url(~/assets/svg/cross-collaboration.svg);
		width: 24px;
		height: 24px;
		opacity: 0.7;
		z-index: 2;
	}
	%beforeLine {
		content: "";
		display: block;
		position: absolute;
		z-index: 2;
	}
	.collaborations {
		padding: 0;

		height: calc(var(--vh) * 100);
		padding: d(152) 0 d(121);
		display: grid;
		grid-template-columns: 3fr 1fr 2fr;
		grid-template-rows: 1fr 1fr 1fr;

		&__base {
			display: flex;
			justify-content: center;
			align-items: center;
			grid-row-start: 2;
			position: relative;

			&::before {
				@extend %beforeLine;
				border-right: d(1) solid rgba(112, 112, 112, 0.3);
				height: 200vh;
				right: 0;
			}

			&::after {
				@extend %afterCross;
				bottom: -12px;
				right: -12px;
				transform: rotate(-45deg);
			}
		}

		&__headline {
			font-size: d(70);
			margin-bottom: 0;
		}

		&__text {
			font-size: d(25);
			margin-bottom: 0;
		}

		&__item {
			padding: 0;
			border: none;
			justify-content: center;
			align-items: center;
			border: none;
			position: relative;

			&:nth-of-type(2) {
				&::before {
					@extend %beforeLine;
					border-top: d(1) solid rgba(112, 112, 112, 0.3);
					width: 200vw;
					top: 0;
				}
			}
			&:nth-of-type(8) {
				&::before {
					@extend %beforeLine;
					border-bottom: d(1) solid rgba(112, 112, 112, 0.3);
					width: 200vw;
					bottom: 0;
				}
				&::after {
					@extend %afterCross;
					top: -12px;
					right: -12px;
					transform: rotate(-45deg);
				}
			}

			&:nth-of-type(6) {
				&::before {
					@extend %beforeLine;
					border-left: d(1) solid rgba(112, 112, 112, 0.3);
					height: 200vh;
					left: 0;
				}
			}

			&:nth-of-type(5) {
				&::before {
					@extend %beforeLine;
					border-bottom: d(1) solid rgba(112, 112, 112, 0.3);
					width: 200vw;
					bottom: 0;
				}

				&::after {
					@extend %afterCross;
					top: -12px;
					left: -12px;
					transform: rotate(-45deg);
				}
			}
			&:nth-of-type(3) {
				&::before {
					@extend %beforeLine;
					border-bottom: d(1) solid rgba(112, 112, 112, 0.3);
					width: 200vw;
					bottom: 0;
				}

				&::after {
					@extend %afterCross;
					bottom: -12px;
					right: -12px;

					transform: rotate(-45deg);
				}
			}

			.item__text {
				font-size: d(32);
			}

			.arrow-container {
				display: none;
			}
		}
	}
}
</style>
