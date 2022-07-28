<template lang="pug">
.cross(
	:class="'cross_' + color"
)
	include ../../assets/svg/cross.svg
</template>

<script>

export default {
	props: {
		color: {
			type: String,
			default: 'balck'
		}
	}
}
</script>

<style lang="scss" scoped>
.cross {

	&_black {
		svg path {
			fill: black;
		}
	}

	&_green {
		svg path {
			fill: #90EE90;
		}
	}
}
</style>
