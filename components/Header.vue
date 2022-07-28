<template lang="pug">
header.header
	.logo.header__logo
		.logo__mob
			include ../assets/svg/logo-mob.svg
		.logo__desc
			include ../assets/svg/logo-full.svg
	nav.nav.header__nav
		ul.nav__list
			li.nav__item(
				v-for="nav in navs"
				:key="nav.name"
			)
				nuxt-link(:to="nav.to") {{ nav.name }}
	.header__buttons
		button.button whtppr
		button.button.button_mint MINT
</template>


<script>
export default {
	data() {
		return {
			navs: [
				{ name: 'shwrm', to: '#' },
				{ name: 'tm', to: '#' },
				{ name: 'rdmp', to: '#' },
				{ name: 'src', to: '#' },
				{ name: 'cllbrtn', to: '#' },
				{ name: 'FAQ', to: '#' },
			]
		}
	}
}
</script>
