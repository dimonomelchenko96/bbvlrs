<template lang="pug">
.page-faq
	Faq
</template>

<script>
import Header from "~/components/ui/Header";
import Faq from "~/components/ui/Faq";
import SocialLinksMenu from "~/components/ui/SocialLinksMenu";

export default {
	name: 'faqPage',

	data() {
		return{}
	},

	components: {
		Header,
		Faq,
		SocialLinksMenu,
	},
	methods: {

	}
}
</script>

<style lang="scss">
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
