<template lang="pug">
div.header-layout
	Device
		template(#mob)
			header.header(
				v-if="!openMenu"
			)
				Logo.header__logo
				.burger-menu(
					@click='handleOpenMenu'
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
				.navigation
					NavANIMATION
					ButtonMenu
</template>

<script>
import Logo from "~/components/ui/Logo";
import MainMenu from "~/components/ui/MainMenu";
import Device from "~/components/helpers/Device";
// import Nav from "~/components/ui/Nav";
import NavANIMATION from "~/components/ui/NavANIMATION";
import ButtonMenu from "~/components/ui/ButtonMenu";

export default {
	components: {
		Logo,
		MainMenu,
		Device,
		ButtonMenu,
		// Nav,
		NavANIMATION,
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

	.burger-menu {
		display: flex;
		align-items: center;
		cursor: pointer;

		svg {
			width: m(26);
			height: m(26);
		}
	}
}

@include desc {
	.header {
		display: flex;
		align-items: center;
		padding: d(64) d(80) 0;

		.navigation {
			display: flex;
			align-items: center;
		}
	}
}
</style>
