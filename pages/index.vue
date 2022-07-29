<template lang="pug">
.div
	PopUPHead
	Main
	About
	Faq
	Popup
	Character
	Bible
	ChapterBible
</template>



<script>
import Faq from "../components/Faq";
import About from "../components/About";
import PopUPHead from "../components/PopUPHead";
import Main from "../components/Main";
import Popup from "../components/Popup";
import Character from "../components/Character";
import Bible from "../components/Bible"
import ChapterBible from "../components/ChapterBible";

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
    Popup,
    Bible,
    ChapterBible,
	},
  methods: {
  }
}
</script>

<style lang="scss" scoped>


</style>
