<template lang="pug">
.popup
	.popup__header
		Logo.popup__img(@click.native="closePopup")
		.popup__close(@click='closePopup')
			include ../../assets/svg/popup-close.svg
	CustomScroller.popup__scroll
		.popup__content
			slot
</template>

<script>
import CustomScroller from "~/components/helpers/CustomScroller";
import Logo from "../ui/Logo.vue";
export default {
	methods: {
		closePopup() {
			this.$emit("closePopup");
		},
	},
	components: {
		CustomScroller,
		Logo,
	},
};
</script>

<style lang="scss" scoped>
.popup {
	position: relative;
	padding-top: m(56);
	background: #000000;
	height: calc(var(--vh) * 100);
	width: 100vw;

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

	&__img {
		width: m(20);
		height: m(32);

		svg {
			width: 100%;
			height: 100%;
		}
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
		width: 100%;
	}
}

@include desc {
	.popup {
		padding-top: d(56);
		width: 100%;
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
