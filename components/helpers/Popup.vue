<template lang="pug">
.popup
	.popup__header
		a.popup__img
			include ../../assets/svg/logo-mob.svg
		.popup__close(@click='closePopup')
			include ../../assets/svg/popup-close.svg
	CustomScroller.popup__scroll
		.popup__content
			slot

</template>

<script>

import CustomScroller from "~/components/helpers/CustomScroller";

export default {
	methods: {
		closePopup() {
			this.$emit("closePopup");
		},
	},
	components: {
		CustomScroller
	}
};
</script>

<style lang="scss" scoped>
.popup {
	position: relative;
	padding-top: m(56);
	background: url(~/assets/img/Background.jpg) center center/cover no-repeat;
	height: calc(var(--vh) * 100);
	&__header {
		position: fixed;
		z-index: 102;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: m(24) m(32) 0;
	}

	&__scroll {
		height: 100%;
	}

	&__close {
		cursor: pointer;
		svg {
			width: m(24);
			height: m(24);
		}
	}

	&__content {
		height: 100%;
	}

	// &__pagination {
	//  padding: 0 16px;
	//  display: flex;
	//  justify-content: space-between;
	//  align-items: center;
	//  position: absolute;
	//  bottom: 0;
	//  width: 100%;
	//  height: 56px;
	//  background: rgba(18, 18, 18, 0.5);
	//  &-left, &-right {
	//   display: flex;
	//   justify-content: center;
	//   align-items: center;
	//   width: 40px;
	//   height: 40px;
	//   border-radius: 50%;
	//   background: rgba(255, 255, 255, 0.05);
	//   img {

	//   }
	//  }
	//  &-numbers {
	//   font-family: 'Montserrat';
	//   font-style: normal;
	//   font-weight: 400;
	//   font-size: 16px;
	//   line-height: 20px;
	//   color: #FFFFFF;
	//  }
}

@include desc {
	.popup {
		padding-top: d(56);
		&__img {
			display: none;
		}
		&__header {
			padding: d(24) d(32) 0;
			position: absolute;
			justify-content: flex-end;
		}
		&__close {
			svg {
				width: d(24);
				height: d(24);
			}
		}
	}
}
</style>
