<template lang="pug">
Device.header-layout
	template(#mob)
		header.header(
			v-if="!openMenu"
		)
			Logo.header__logo
			.header__menu(
				@click='handleOpenMenu'
				:class="[theme === 'white' && 'header__menu_white' ]"
			)
				include ../../assets/svg/burger-menu.svg
		MainMenu(
			v-if="openMenu"
			@closePopup="togglePopup($event)"
		)
	template(#desc)
		header.header
			Logo.header__logo
				include ../../assets/svg/burger-menu.svg
			.header__navigation
				Nav
				ButtonMenu
</template>

<script>
import Logo from "~/components/ui/Logo";
import MainMenu from "~/components/ui/MainMenu";
import Device from "~/components/helpers/Device";
import Nav from "~/components/ui/Nav";
import ButtonMenu from "~/components/ui/ButtonMenu";
import { mapState } from "vuex";

export default {
	components: {
		Logo,
		MainMenu,
		Device,
		ButtonMenu,
		Nav,
	},
	computed: {
		...mapState({
			theme: (state) => state.theme,
		}),
	},

	data() {
		return {
			openMenu: false,
		};
	},
	methods: {
		togglePopup(event) {
			this.openMenu = event;
		},

		handleOpenMenu() {
			this.openMenu = !this.openMenu;
			this.$store.commit("openNavMenuToggle");
		},
	},
};
</script>

<style lang="scss" scoped>
.header-layout {
	width: 100vw;
	z-index: 101;
	max-width: $max-width;
}
.header {
	padding: m(24) m(32);
	display: flex;
	justify-content: space-between;

	&__menu {
		display: flex;
		align-items: center;
		cursor: pointer;

		svg {
			width: m(26);
			height: m(26);
		}

		&_white {
			svg {
				path {
					stroke: $lilac;
				}
			}
		}
	}
}

@include desc {
	.header {
		display: flex;
		align-items: center;
		padding: d(64) d(80) 0;

		&__navigation {
			display: flex;
			align-items: center;
		}
	}
}
</style>
