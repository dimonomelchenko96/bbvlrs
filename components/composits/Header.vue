<template lang="pug">
header.header
	Logo.header__logo
	//- nav.nav.header__nav
	//- 	ul.nav__list
	//- 		li.nav__item(
	//- 			v-for="nav in navs"
	//- 			:key="nav.name"
	//- 		)
	//- 			nuxt-link(:to="nav.to") {{ nav.name }}
	//- .header__buttons
	//- 	button.button whtppr
	//- 	button.button.button_mint MINT
</template>


<script>
import Logo from '~/components/ui/Logo';
export default {
	components: {
		Logo
	},
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

<style lang="scss" scoped>
.header {
	padding: m(24) m(32);
}

@include desc {
	.header {
		display: flex;
		align-items: center;
		padding: d(64) d(80);

		&__nav {
			margin-left: d(382);
		}

		&__buttons {
			margin-left: auto;
		}
	}
}
</style>
