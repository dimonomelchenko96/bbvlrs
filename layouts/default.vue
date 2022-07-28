<template lang="pug">
.layout
	.content
		Popup
			Character
		//- Nuxt
</template>

<script>

import Character from '~/components/Character';
import Popup from '~/components/Popup';

export default {
	components: {
		Character,
		Popup
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
