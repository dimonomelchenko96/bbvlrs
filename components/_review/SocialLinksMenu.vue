<template lang="pug">
//- _r: перенести в data
//- _r: добавив @nuxtjs/svg https://github.com/nuxt-community/svg-module#usage
//- _r: vue-svg-loader, svg-sprite-loader, Dynamic imports
.social-links-container
	a(
		href="#"
		target="_blank"
		)
		include ../assets/svg/SocialNav/Discord.svg
	a(
		href="#"
		target="_blank"
		)
		include ../assets/svg/SocialNav/Exclusion.svg
	a(
		href="#"
		target="_blank"
		)
		include ../assets/svg/SocialNav/Twitter.svg
	a(
		href="#"
		target="_blank"
		)
		include ../assets/svg/SocialNav/Instagram.svg
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.social-links-container {
	/* flex + gap */
	display: flex;
	justify-content: center;
	gap: d(32);

	svg {
		width: d(24);
		height: auto;
	}
}
</style>
