<template lang="pug">
.menu
	ButtonMenu
	Nav
	SocialLinksMenu
</template>

<script>
import ButtonMenu from "~/components/ui/ButtonMenu.vue";
import Nav from "~/components/ui/Nav.vue";
import SocialLinksMenu from "~/components/ui/SocialLinksMenu.vue";

export default {
	data() {
		return {};
	},
	components: {
		ButtonMenu,
		SocialLinksMenu,
		Nav,
	},
};
</script>

<style lang="scss" scoped>
.menu {
	padding: m(32);
	background-image: url(../../assets/img/Spotlight.png);
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
