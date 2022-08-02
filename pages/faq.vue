<template lang="pug">
.page-faq
	Header.page__header
	Faq
	Device
		template(#desc)
			SocialLinksMenu.page-faq__social

</template>

<script>
import Header from "~/components/composits/Header";
import Faq from "~/components/ui/Faq";
import SocialLinksMenu from "~/components/ui/SocialLinksMenu";
import Device from "~/components/helpers/Device";

export default {
	name: 'faqPage',

	data() {
		return{}
	},

	components: {
		Header,
		Faq,
		SocialLinksMenu,
		Device,
	},
	methods: {

	}
}
</script>

<style lang="scss">
.page-faq {
	height: 100vh;

	&__social {
		justify-content: end !important;
		padding-right: m(30);
	}
}

@include desc {
	.page-faq {

	&__social {
		padding-right: d(60);
	}
}
}

</style>
