<template lang="pug">
.container
	CharacterImg(:img='img')
	CharacterName(:title='title')
	CharacterDescr(:text='text')
</template>

<script>

import CharacterImg from '~/components/character/CharacterImg';
import CharacterDescr from '~/components/character/CharacterDescr';
import CharacterName from '~/components/character/CharacterName';
import img from '~/assets/img/Personage.png';

export default {
  name: 'IndexPage',
  data() {
	return {
		img: img,
		title: 'ADAM',
		text: 'Great queen. Saved Nation from annihilation by risking her own life.Her words : “If I perish, I perish” are quite badass. Not a coincidence that there’s a book in bible named after her.Great'
	}
  },
  components: {
	CharacterImg,
	CharacterDescr,
	CharacterName
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: url(../assets/img/Background.jpg) center center/cover no-repeat;
}

</style>
