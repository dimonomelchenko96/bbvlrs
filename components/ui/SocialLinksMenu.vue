<template lang="pug">
.social-links-container(
	:class="[theme === 'white' && 'social-links-container_white' ]"
)
	a(
		v-if="socials.discord"
		:href="socials.discord"
		target="_blank"
		)
		include ../../assets/svg/SocialNav/Discord.svg
	a(
		v-if="socials.opensea"
		:href="socials.opensea"
		target="_blank"
		)
		include ../../assets/svg/SocialNav/Exclusion.svg
	a(
		v-if="socials.twitter"
		:href="socials.twitter"
		target="_blank"
		)
		include ../../assets/svg/SocialNav/Twitter.svg
	a(
		v-if="socials.instagram"
		:href="socials.instagram"
		target="_blank"
		)
		include ../../assets/svg/SocialNav/Instagram.svg
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState({
			socials: (state) => state.socialLinks.socials,
			theme: (state) => state.theme,
		}),
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
		&_white {
			svg {
				path {
					fill: $black;
				}
			}
		}
		a {
			cursor: pointer;
			margin-right: d(32);

			&:last-child {
				margin-right: 0;
			}
		}

		svg {
			width: d(26);
		}
	}
}
</style>
