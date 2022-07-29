<template lang="pug">
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
	display: flex;
	justify-content: center;
	gap: m(32);

	svg {
		width: m(24);
		height: auto;
	}
}
</style>
