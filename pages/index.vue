<template lang="pug">
.div
	PopUPHead
	Main
	About
</template>



<script>
import PopUPHead from '../components/PopUPHead'
import Main from "../components/Main"
import About from "../components/About"

export default {
  name: 'IndexPage',
  data() {
	return {
	}
  },
  components: {
	PopUPHead,
	Main,
	About
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
