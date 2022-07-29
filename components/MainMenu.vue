<template lang="pug">
.menu
	ButtonMenu
	Nav
	SocialLinksMenu
</template>

<script>
import ButtonMenu from "./ButtonMenu.vue";
import Nav from "./Nav.vue";
import SocialLinksMenu from "./SocialLinksMenu.vue";

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
	background-image: url(../assets/img/Spotlight.png);
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
