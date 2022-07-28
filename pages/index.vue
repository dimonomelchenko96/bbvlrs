<template lang="pug">
.div
	PopUPHead
	Main
	About
	Faq
</template>



<script>
import PopUPHead from '../components/PopUPHead'
import Main from "../components/Main"
import About from "../components/About"
import Faq from "../components/Faq";

export default {
  name: 'IndexPage',
  data() {
	return {
	}
  },
  components: {
	PopUPHead,
	Main,
	About,
	Faq
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
