<template lang="pug">
.layout
	.content
		Header
		Footer
		Nuxt
</template>

<script>
import Header from "~/components/composits/Header";
import Footer from "~/components/ui/Footer";

export default {
	components: {
		Header,
		Footer,
	},
};
</script>

<style lang="scss" scoped>
.layout {
	overflow: hidden;
	background-color: $black;
}

.content {
	max-width: $max-width;
	margin: 0 auto;
	position: relative;
}
</style>
