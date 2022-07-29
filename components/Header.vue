<template lang="pug">
header.header
	.logo.header__logo
		.logo__mob
			include ../assets/svg/logo-mob.svg
		.logo__desc
			include ../assets/svg/logo-full.svg
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

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
	padding: d(64) d(80);

	&__nav {
		margin-left: d(382);
	}

	&__buttons {
		/* margin-left: d(124); */
		margin-left: auto;
	}
}

.logo {
	width: d(215);
	height: d(52);

	&__desc {
		width: d(32);
		height: d(52);
		position: relative;
		overflow: hidden;
		transition: width .25s ease;
		cursor: pointer;

		&:hover {
			width: d(215);
		}
	}

	svg {
		position: absolute;
		top: 0;
		left: 0;
		width: d(215);
		height: auto;
	}

	&__mob {
		display: none;
	}
}

.nav {
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: d(16);
	line-height: d(20);
	color: #FFFFFF;

	&__list {
		display: flex;
	}

	&__item {
		&:not(:last-of-type) {
			margin-right: d(70);
		}
	}
}

.button {
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: d(18);
	line-height: d(22);
	color: #FFFFFF;
	background: #212121;
	width: d(218);
	height: d(52);

	&_mint {
		color: #0D0E0E;
		background: #76D676;
		margin-left: d(24);
	}
}
</style>
