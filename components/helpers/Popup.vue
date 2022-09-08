<template lang="pug">
.popup(
	:class="[theme === 'white' && 'popup_white' ]"
)
	.popup__header
		Logo.popup__img(@click.native="closePopup")
		.popup__close(
			:class="[theme === 'black' && 'popup__close_green' ]"
			@click='closePopup'
		)
			include ../../assets/svg/popup-close.svg
	CustomScroller.popup__scroll
		.popup__content
			slot
</template>

<script>
import CustomScroller from "~/components/helpers/CustomScroller";
import Logo from "../ui/Logo.vue";
import { mapState } from "vuex";

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

	computed: {
		...mapState({
			theme: (state) => state.theme,
		}),
	},
};
</script>

<style lang="scss" scoped>
.popup {
	position: relative;
	padding-top: m(56);
	background: $black;
	height: calc(var(--vh) * 100);
	width: 100vw;

	&_white {
		background: $backgroundThemeWhite;
	}

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
		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;
		svg {
			width: m(24);
			height: m(24);
		}

		&_green {
			svg {
				path {
					stroke: $green;
				}
			}
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
