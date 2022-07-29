<template lang="pug">
.page
	Header.page__header
	CommingSoon.page__popup
	AboutLink.page__about
	SocialLinksMenu.page__soc
</template>



<script>
import  Header from '~/components/Header'
import  CommingSoon from '~/components/ui/CommingSoon'
import  AboutLink from '~/components/ui/AboutLink'
import  SocialLinksMenu from '~/components/SocialLinksMenu'
export default {
  name: 'IndexPage',
  data() {
	return {}
  },
  components: {
	Header,
	CommingSoon,
	AboutLink,
	SocialLinksMenu
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.page {
	background-image: url('../assets/img/back.png');
	background-size: cover;
	width: 100%;
	height: 100vh;
	position: relative;

	&__popup {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	&__about {
		position: absolute;
		left: d(80);
		bottom: d(82);
	}

	&__soc {
		position: absolute;
		right: d(80);
		bottom: d(82);
	}
}

</style>
