<template lang="pug">
nav.nav
	ul.nav__list
		li.list__item(
				v-for="nav in navs"
				:key="nav.name"
			)
				nuxt-link(:to="nav.to") {{ nav.name }}
</template>
<script>
export default {
	data() {
		return {
			navs: [
				{ name: "shwrm", to: "#" },
				{ name: "tm", to: "#" },
				{ name: "rdmp", to: "#" },
				{ name: "src", to: "#" },
				{ name: "cllbrtn", to: "#" },
				{ name: "FAQ", to: "#" },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.nav {
	margin-bottom: m(120);
	/* _r: BEM */
	&__list {
		display: flex;
		flex-direction: column;
		text-align: center; /* _r: відступи в блоках */

		.list__item {
			margin-bottom: m(32);

			a {
				font-family: "Montserrat";
				font-style: normal;
				font-weight: 400;
				font-size: m(24);
				line-height: m(32);
				color: #fff;
			}
		}
	}
}
</style>
