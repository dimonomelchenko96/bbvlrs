<template lang="pug">
.preloader
	img(src='~/assets/img/spinner.gif')
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.preloader {
	width: m(100);
	height: m(100);
	img {
		width: 100%;
		height: 100%;
	}
}

@include desc {
	.preloader {
		width: d(100);
		height: d(100);
	}
}
</style>
