<template lang="pug">
.page-faq
	Faq
</template>

<script>
import Faq from "~/components/ui/Faq";

export default {
	name: 'faqPage',

	data() {
		return{}
	},

	components: {
		Faq,
	},
	methods: {

	}
}
</script>

<style lang="scss" scoped>
.page-faq {
	height: 100vh;
}

@include desc {
	.page-faq {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

</style>
