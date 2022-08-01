<template lang="pug">
.main
	h1.main__title {{ title }}
	h2.main__content {{ content }}
</template>

<script>
export default {
  name: 'Main',
  data() {
	return {
		title: 'Welcome to the Bibleverse!',
		content: 'The first meta version of the most influential story',
	}
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.main {
	background-image: url('../../assets/img/Background.jpg');
	color: #fff;
	text-align: center;
	height: 100%;

	&__title {
		font-family: "BBLVRS", sans-serif;
		font-size: m(42);
		line-height: m(57);
		font-weight: 400;
		text-transform: uppercase;

		margin: 0;
		/* _r: px to m() */
		margin-bottom: 8px;

	}

	&__content {
		font-family: "Montserrat", sans-serif;
		font-size: m(16);
		font-weight: 300;
		line-height: m(20);

		margin: 0 auto;
		width: m(312);
	}
}

@include desc {
	.main {
		&__title {
			font-size: d(84);
			line-height: d(84);

			margin-bottom: 6px;
		}

		&__content {
			font-size: d(32);
			line-height: d(39);
		}
	}
}
</style>
