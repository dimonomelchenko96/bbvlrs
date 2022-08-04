<template lang="pug">
.page-faq
	//- Header.page__header
	Faq
	//- Device
	//- 	template(#desc)
	//- 		SocialLinksMenu.page-faq__social

</template>

<script>
import Header from "~/components/composits/Header";
import Faq from "~/components/ui/Faq";
import SocialLinksMenu from "~/components/ui/SocialLinksMenu";
// import Device from "~/components/helpers/Device";

export default {
	name: 'faqPage',

	data() {
		return{}
	},

	components: {
		Header,
		Faq,
		SocialLinksMenu,
		// Device,
	},
	methods: {

	}
}
</script>

<style lang="scss">
.page-faq {
	height: 100vh;
	// position: relative;
	// margin-top: m(88);

	// &__social {
	// 	justify-content: end !important;
	// 	padding-right: m(30);
	// }
}

@include desc {
	.page-faq {
		display: flex;
		justify-content: center;
		align-items: center;
		// margin-top: d(112);
		// margin-top: d(112);
		// margin-bottom: d(98);

	// &__social {
	// 	padding-right: d(60);

	// 	position: absolute;
	// 	bottom: d(80);
	// 	right: 0;
	// }
}
}

</style>
