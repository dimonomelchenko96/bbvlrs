<template lang="pug">
p.character__descr {{text}}
</template>

<script>
	export default {
		props: ['text']
	}
</script>

<style lang="scss" scoped>
	.character__descr {
		font-family: 'Montserrat';
		padding: 0 30px;
		font-style: normal;
		font-weight: 400;
		font-size: m(16);
		line-height: 26px;
		color:#FFFFFF;
	}
</style>
