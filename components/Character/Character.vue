<template lang="pug">
.character
	.character__block
		.character__img
			.character__popup(:class="[popup ? 'active' : null]")
				Close.character__popup-close(@click.native='hidePopupDesc')
				.character__popup-content
					.character__popup-title {{items[currentItem].about.title}}
					.character__popup-descr {{items[currentItem].about.text}}
				button.character__popup-find(
					@click='bindName'
						:disabled='popupOpen'
					)
					include ../../assets/svg/search-icon.svg
					span Find in Bible
			img(
				@click="showPopupDesc"
				:src='img'
			)
		.character__wrapper
			.character__arrow(@click='arrowPrev')
				include ../../assets/svg/arrow-left.svg
			.character__arrow.right(@click='arrowNext')
				include ../../assets/svg/arrow-left.svg

		h2.character__title {{items[currentItem].name}}
		.character__pages
			span –
			span {{ currentItem + 1 }}
			span /
			span {{ items.length }}
			span –
	.character__search
		.character__search-info(
			@click="showAbout"
		)
			include ../../assets/svg/i.svg
		.character__search-find(@click='bindName')
			include ../../assets/svg/search-icon.svg
			span Find in bible

</template>

<script>
import img from "~/assets/img/Personage.png";
import Close from "~/components/Team/Close";

export default {
	props: ["items", "popupOpen"],
	data() {
		return {
			popup: false,
			currentItem: 0,
			img: img,
		};
	},
	methods: {
		showAbout() {
			this.$store.commit("aboutProjectToggle");
		},
		arrowNext() {
			if (!this.popup) {
				if (this.currentItem === this.items.length - 1) {
					this.currentItem = 0;
				} else {
					this.currentItem = this.currentItem + 1;
				}
			}
		},
		arrowPrev() {
			if (!this.popup) {
				if (this.currentItem <= 0) {
					this.currentItem = this.items.length - 1;
				} else {
					this.currentItem = this.currentItem - 1;
				}
			}
		},
		bindName() {
			this.$store.commit(
				"search/bindName",
				this.items[this.currentItem].name
			);
			this.$store.commit("search/showPopup", true);
		},
		showPopupDesc() {
			this.popup = true;
		},
		hidePopupDesc() {
			this.popup = false;
		},
	},
	components: {
		Close,
	},
};
</script>

<style lang="scss" scoped>
.character {
	padding: 0 m(16);
	height: calc(var(--vh) * 100);
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	padding-bottom: m(56);

	&__popup {
		display: none;
		z-index: 10;
		cursor: url(~/assets/img/cursor.png) 2 2, pointer;
	}

	&__img {
		max-width: m(280);
		width: 100%;
		position: relative;
		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;
		z-index: 2;

		&::before,
		&::after {
			content: "";
			position: absolute;
			background: url(../../assets/svg/arrow-green.svg);
			width: 9px;
			height: 8px;
		}

		&::before {
			top: 0;
			left: 0;
		}

		&::after {
			bottom: 0;
			right: 0;
			transform: rotate(180deg);
		}

		img {
			width: 100%;
		}
	}

	&__block {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__title {
		font-family: "BBLVRS";
		font-style: normal;
		font-weight: 400;
		margin-top: m(15);
		font-size: m(45);
		line-height: m(45);
		color: $white;
		margin-bottom: m(3);
	}

	&__search {
		position: absolute;
		bottom: 0;
		left: 0;
		padding: m(8) m(16);
		display: flex;
		align-items: center;
		width: 100%;
		background: #000000;

		&-info {
			position: relative;
			@include circle;

			&::before {
				content: "";
				position: absolute;
				height: m(28);
				width: m(1);
				background: rgba(255, 255, 255, 0.1);
				top: 50%;
				right: -15px;
				transform: translateY(-50%);
			}

			svg {
				width: m(18);
				height: m(18);
			}
		}

		&-find {
			margin-left: m(63);

			svg {
				margin-right: m(20);
			}

			display: flex;
			align-items: center;
			font-family: "Montserrat";
			font-style: normal;
			font-weight: 400;
			font-size: m(16);
			line-height: m(20);
			color: $white;
		}
	}
	&__wrapper {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__arrow {
		display: flex;
		align-items: center;
		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;
		@include circle;
		&.right {
			svg {
				transform: rotate(180deg);
			}
		}
	}

	&__pages {
		font-family: "Montserrat";
		font-style: italic;
		font-weight: 400;
		font-size: m(14);
		line-height: m(17);
		color: $white;
		display: flex;
		span {
			display: block;
			width: 1.5ch;
			text-align: center;
		}
	}
}

@include desc {
	.character {
		padding-top: d(112);
		padding-bottom: d(98);
		justify-content: center;

		&__popup {
			opacity: 0;
			visibility: hidden;
			transition: all 0.3s ease;
			position: absolute;
			padding: d(105) d(64) d(48);
			transform: rotateY(180deg);
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #141414;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			transition: all 0.6s;
			transform-style: preserve-3d;
			transform: rotateY(180deg);
			perspective: 1000px;
			&.active {
				opacity: 1;
				visibility: visible;
				transform: rotateY(0deg);
			}

			&-close {
				position: absolute;
				top: d(35);
				right: d(35);
				z-index: 1000;
			}

			&-title {
				font-family: "BBLVRS";
				font-style: normal;
				font-weight: 400;
				font-size: d(34);
				line-height: d(34);
				text-transform: uppercase;
				color: $green;
			}

			&-descr {
				font-family: "Montserrat";
				font-style: normal;
				font-weight: 400;
				font-size: d(20);
				line-height: d(24);
				margin-top: d(30);
				color: $white;
			}

			&-find {
				font-family: "Montserrat";
				padding: d(5) d(5);
				font-style: normal;
				font-weight: 400;
				font-size: d(14);
				line-height: d(17);
				color: $white;
				display: inline-block;
				width: fit-content;
				cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;

				svg {
					width: d(12);
					height: d(12);
					margin-right: d(10);
				}
			}
		}

		&__title {
			font-size: d(45);
			line-height: d(45);
			margin-top: d(15);
		}

		&__block {
			margin-bottom: 0;
		}

		&__search {
			display: none;
		}

		&__img {
			width: d(500);
			height: d(614);
			max-height: 55vh;
			position: relative;

			&::before {
				top: 0;
				left: 0;
			}

			&::after {
				bottom: 0;
				right: 0;
				transform: rotate(180deg);
			}

			img {
				height: 100%;
				object-fit: contain;
			}

			&::before,
			&::after {
				opacity: 0;
				visibility: hidden;
				transition: all 0.4s ease;
			}
		}

		&__pages {
			font-size: d(14);
			line-height: d(17);
		}

		&__wrapper {
			height: 100%;
		}

		&__arrow {
			height: 100%;
			border-radius: unset;
			background: inherit;
			width: calc(50% - d(250));
			svg {
				display: none;
			}
		}
	}
}

@include hover {
	.character {
		&__img {
			&:hover {
				&::before,
				&::after {
					opacity: 1;
					visibility: visible;
				}

				&::before {
					top: d(-20);
					left: d(-20);
				}

				&::after {
					bottom: d(-20);
					right: d(-20);
					transform: rotate(180deg);
				}
			}
		}
	}
}
</style>
