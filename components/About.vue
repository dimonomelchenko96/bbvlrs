<template lang="pug">
.about
	.about__title {{ title }}
	.about__content {{ content }}
	.about__images
		.about__imgBlock
			img.about__img(
				:src="img101"
			)
		.about__imgBlock
			img.about__img(
				:src="img101"
			)

</template>

<script>
import img101 from "~/assets/img/101.png";

export default {
  name: 'About',
  data() {
	return {
		img101,
		title: 'About bibleverse',
		content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
	}
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
	.about {
		padding: 0 30px;
		color: #fff;
		background-image: url('../assets/img/Background.png');

		display: grid;
		gap: 32px;

		&__title {
			font-family: "BBLVRS", sans-serif;
			font-size: m(32);
			line-height: m(32);
			font-weight: 400;
			text-align: center;
			text-transform: uppercase;
		}

		&__images {
			display: grid;
			gap: 30px;
		}

		&__imgBlock {
			position: relative;
			overflow: hidden;
			width: 100%;

			&::before {
				content: '';
				display: block;
				padding-top: 100%;
			}
		}

		&__img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&__content {
			font-family: "Montserrat", sans-serif;
			font-size: m(16);
			line-height: m(26);
			font-weight: 400;
		}
	}
</style>
