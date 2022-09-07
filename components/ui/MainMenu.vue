<template lang="pug">
Popup.popup-menu(
	@closePopup="togglePopup"
)
	.menu
		ButtonMenu
		Nav(
			@closePopup="togglePopup"
		)
		SocialLinksMenu
</template>

<script>
import ButtonMenu from "~/components/ui/ButtonMenu.vue";
import Nav from "~/components/ui/Nav.vue";
import SocialLinksMenu from "~/components/ui/SocialLinksMenu.vue";
import Popup from "~/components/helpers/Popup.vue";

export default {
	data() {
		return {};
	},
	components: {
		ButtonMenu,
		SocialLinksMenu,
		Nav,
		Popup,
	},
	methods: {
		togglePopup() {
			this.$store.commit("openNavMenuToggle");
			this.$emit("closePopup", false);
		},
	},
};
</script>

<style lang="scss" scoped>
.popup-menu {
	background: $black;
	background-image: url(~/assets/img/Spotlight.png);
	background-repeat: no-repeat;
	background-size: cover;
	position: fixed;

	::v-deep {
		.logo {
			svg {
				path {
					fill: #fff;
				}
			}
		}
	}
}
.menu {
	padding: m(32);

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: calc(var(--vh) * 90);
}
</style>
