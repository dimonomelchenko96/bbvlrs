<template lang="pug">
img.character__img(
		:src='img'
	)
</template>

<script>

	export default {
		props: ['img']
	}
</script>

<style lang="scss" scoped>
	.character__img {
		max-width: 80%;
	}
</style>



