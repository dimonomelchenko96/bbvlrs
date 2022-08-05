<template lang="pug">
.character
	.character__block
		.character__img
			img(
				:src='img'
			)
		.character__wrapper
			.character__arrow(@click='arrowPrev')
				include ../../assets/svg/arrow-left.svg
			.character__arrow.right(@click='arrowNext')
				include ../../assets/svg/arrow-left.svg

		h2.character__title {{names[currentItem].title}}
		.character__pages
			span {{names[currentItem].number}}

	.character__search
		.character__search-info
			include ../../assets/svg/i.svg
		.character__search-find(@click='showPopup')
			include ../../assets/svg/search-icon.svg
			span Find in bible

</template>

<script>

import img from '~/assets/img/Personage.png';

export default {
	props: ['items'],
	data() {
		return {
			currentItem : 0,
			img: img,
			names: this.items
		}
	},
	methods: {
		arrowNext() {
			if(this.currentItem === this.items.length - 1) {
				this.currentItem = 0;
			} else {
				this.currentItem = this.currentItem + 1;
			}
		},
		arrowPrev() {
			if(this.currentItem <= 0) {
				this.currentItem = this.items.length - 1;
			} else {
				this.currentItem = this.currentItem - 1;
			}
		},
		showPopup() {
			this.$emit('showPopup', this.items[this.currentItem].title)
		}
	}
}
</script>


<style lang="scss" scoped>
.character {
	padding: 0 m(16);
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	padding-bottom: m(56);

	&__img {
		max-width: m(280);
		width: 100%;

		img {
			width: 100%;
		}
	}

	&__block{
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: m(122);

	}

	&__title {
		font-family: 'BBLVRS';
		font-style: normal;
		font-weight: 400;
		font-size: m(45);
		line-height: m(45);
		color: $white;
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
				content: '';
				position: absolute;
				height: m(28);
				width: m(1);
				background: rgba(255, 255, 255, 0.1);;
				top: 50%;
				right: -15px;
				transform: translateY(-50%);
			}

			svg{
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
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: m(16);
			line-height: m(20);
			color: $white;
		}
	}
	&__wrapper {
		position: absolute;
		bottom: m(17);
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__arrow{
		display: flex;
		align-items: center;
		cursor: pointer;
		@include circle;
		&.right {
			svg {
				transform: rotate(180deg);
			}
		}
	}

	&__pages {
		font-family: 'Montserrat';
		font-style: italic;
		font-weight: 400;
		font-size: m(14);
		line-height: m(17);
		color: $white;
	}
}

@include desc {
	.character {
		padding-top: d(112);
		padding-bottom: d(98);
		justify-content: center;

		&__title {
			font-size: d(45);
			line-height: d(45);
		}

		&__block {
			margin-bottom: 0;

		}


		&__search {
			display: none;
		}

		&__img {
			max-width: d(500);
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
</style>
