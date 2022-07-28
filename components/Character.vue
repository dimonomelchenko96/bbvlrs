<template lang="pug">
.character
	img.character__img(
		:src='img'
	)
	h2.character__title {{title}}
	p.character__descr {{text}}
</template>

<script>
import img from '~/assets/img/Personage.png';

export default {
	data() {
		return {
			img: img,
			title: 'ADAM',
			text: 'Great queen. Saved Nation from annihilation by risking her own life.Her words : “If I perish, I perish” are quite badass. Not a coincidence that there’s a book in bible named after her.Great'
		}
	},
}
</script>


<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
	.character {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: url(../assets/img/Background.jpg) center center/cover no-repeat;
		&__img {
			max-width: 80%;
		}
		&__title {
			margin: 0;
			margin-top: 10px;
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: m(45);
			line-height: 61px;
			color: #FFFFFF;
		}
		&__descr {
			margin-bottom: 0;
			margin-top: 20px;
			font-family: 'Montserrat';
			padding: 0 30px;
			font-style: normal;
			font-weight: 400;
			font-size: m(16);
			line-height: 26px;
			color:#FFFFFF;
		}
	}
</style>
