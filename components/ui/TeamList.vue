<template lang="pug">
.search
	form(
		type="submit"
	)
		input(
			v-model="text"
			placeholder="search on source"
		)
</template>

<script>
export default {
	name: "search",

	data() {
		return{
			text: "",
		}
	},

	methods: {

	}
}
</script>

<style lang="scss" scoped>

</style>

