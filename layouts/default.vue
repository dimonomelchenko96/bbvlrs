<template lang="pug">
.layout
	.content
		Character
		Nuxt
</template>

<script>

import Character from '~/components/Character';

export default {
	components: {
		Character
	}
}
</script>

<style lang="scss" scoped>
.layout {
	overflow: hidden;
}

.content {
	max-width: $max-width;
	margin: 0 auto;
}
</style>
