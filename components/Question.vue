<template lang="pug">
.question
	.question__block
		.question__title {{ title }}
		img.question__icon(
			:src="Fag_icon"
		)
	.question__content {{ content }}
</template>

<script>
import Fag_icon from "~/assets/img/faq_icon.png";

export default {
	props: [title, content],
	name: 'Question',
	data() {
		return {
			Fag_icon
		}
	},
	components: {
	},
	methods: {
	}
}
</script>

<style lang="scss" scoped>
</style>
