<template lang="pug">
.menu-list
	MenuList
	Faq
</template>

<script>
import MenuList from "~/components/ui/MenuList";
import Faq from "~/components/ui/Faq";

export default {
	name: 'MenuList',

	data() {
		return{

		}
	},

	components: {
		MenuList,
		Faq,
	}
}
</script>

<style lang="scss" scoped>

</style>
