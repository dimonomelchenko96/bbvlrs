<template lang="pug">
.character
	.character__block
		img.character__img(
			:src='img'
		)
		h2.character__title {{title}}
		p.character__descr {{text}}
	//- a.character__search

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
	.character {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		&__img {
			max-width: 80%;
		}
		&__block{
			display: flex;
			flex-direction: column;
   			align-items: center;
		}
		&__title {
			font-family: 'BBLVRS';
			font-style: normal;
			font-weight: 400;
			margin: 0;
			margin-top: 10px;
			font-size: m(45);
			line-height: 61px;
			color: #FFFFFF;
		}
		&__descr {
			margin-bottom: 0;
			margin-top: 20px;
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: m(16);
			line-height: 26px;
			color:#FFFFFF;
		}
		&__search {
			display: block;
			height: 56px;
			width: 100%;
			background: rgba(18, 18, 18, 0.5);
			padding: 18px 0;
		}
	}
</style>
