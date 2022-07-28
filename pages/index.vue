<template lang="pug">
.div
	PopUPHead
	Main
	About
	Faq
	Popup
		Character
</template>



<script>
import PopUPHead from '../components/PopUPHead'
import Main from "../components/Main"
import About from "../components/About"
import Faq from "../components/Faq";
import Character from '~/components/Character';
import Popup from '~/components/Popup';

export default {
  name: 'IndexPage',
  data() {
	return {}
  },
  components: {
	PopUPHead,
	Main,
	About,
	Faq,
	Character,
	Popup
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>


</style>
