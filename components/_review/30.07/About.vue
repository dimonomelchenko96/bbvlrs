<template lang="pug">
.about
	.about__title {{ title }}
	.about__images
		//- _r: naming
		.about__imgBlock
			img.about__img(
				:src="img101"
			)
		.about__imgBlock
			img.about__img(
				:src="img101"
			)
	.about__content {{ content }}
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
		width: d(894);
		color: #fff;
		background-image: url('../assets/img/Background.jpg');

		&__title {
			font-size: d(62);
			line-height: d(62);
			font-weight: 400;
			text-align: center;
			text-transform: uppercase;

			margin-bottom: d(33);
		}

		&__images {
			display: flex;
			margin-bottom: d(60);
		}

		&__imgBlock {
			position: relative;
			overflow: hidden;
			width: 100%;

			margin-right: d(30);

			&:last-child {
				margin-right: 0;
			}

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
			font-size: d(14);
			line-height: d(17);
			font-weight: 400;
		}
	}
</style>
