<template lang="pug">
h2.character__title {{title}}
</template>

<script>
	export default {
		props: ['title']
	}
</script>

<style lang="scss" scoped>
	.character__title {
		margin: 0;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: m(45);
		line-height: 61px;
		color: #FFFFFF;
	}
</style>

