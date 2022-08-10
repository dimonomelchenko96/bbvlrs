<template lang="pug">
CustomScroller.team-list
	ul.team-list__list
		li.team-list__item(
			v-for="(member, ind) in teamList"
		) {{ member.position_short }}
</template>

<script>
import CustomScroller from "~/components/helpers/CustomScroller";

export default {
	props: ['teamList'],

	name: "search",

	data() {
		return{

		}
	},

	methods: {

	},

	components: {
		CustomScroller
	}
}
</script>

<style lang="scss" scoped>

</style>

