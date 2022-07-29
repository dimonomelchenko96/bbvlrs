<template lang="pug">
.page
	Header.page__header
	//- CommingSoon.page__popup
	//- AboutLink.page__about
	//- SocialLinksMenu.page__soc
	.enter.page__enter
		.enter__text What do you believe in?
		InputForm.enter__input(
			placeholder="Type max 2 words"
		)


</template>



<script>
import  Header from '~/components/Header'
import  CommingSoon from '~/components/ui/CommingSoon'
import  AboutLink from '~/components/ui/AboutLink'
import  SocialLinksMenu from '~/components/SocialLinksMenu'
import  InputForm from '~/components/ui/InputForm'
export default {
  name: 'IndexPage',
  data() {
	return {}
  },
  components: {
	Header,
	CommingSoon,
	AboutLink,
	SocialLinksMenu,
	InputForm
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

	&__enter {
		position: absolute;
		bottom: d(136);
		left: 50%;
		transform: translateX(-50%);
	}
}

.enter {
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: d(16);
	line-height: d(20);
	letter-spacing: -0.01em;
	color: #FFFFFF;
	display: flex;
	flex-direction: column;
	align-items: center;

	&__text {
		margin-bottom: d(32);
	}

}
</style>
