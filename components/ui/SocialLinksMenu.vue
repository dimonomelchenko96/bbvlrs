<template lang="pug">
.social-links-container
	a(
		href="#"
		target="_blank"
		)
		include ../../assets/svg/SocialNav/Discord.svg
	a(
		href="#"
		target="_blank"
		)
		include ../../assets/svg/SocialNav/Exclusion.svg
	a(
		href="#"
		target="_blank"
		)
		include ../../assets/svg/SocialNav/Twitter.svg
	a(
		href="#"
		target="_blank"
		)
		include ../../assets/svg/SocialNav/Instagram.svg

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
	text-align: center;
	a {
		margin-right: m(32);
		&:last-child {
			margin-right: 0;
		}
	}

	svg {
		width: m(24);
		height: auto;
	}
}
@include desc {
	.social-links-container {
		a {
			margin-right: d(32);
			&:last-child {
				margin-right: 0;
			}
		}
		svg {
			width: d(24);
		}
	}
}
</style>
