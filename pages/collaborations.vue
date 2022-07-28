<template lang="pug">
.collaboration
	.collaboration__block
		.collaboration__title {{ title }}
		.collaboration__desciprtion {{ description }}
	.collaboration__elems
		.elem.collaboration__elem(
			v-for="(elem, ind) in elems"
			:key="ind"
		)
			.elem__name {{ elem.name }}
			.elem__arrow
				include ../assets/svg/arrow-left.svg
</template>

<script>
export default {
	data() {
		return {
			title: 'Collaboration',
			description: 'How would you like to contribute:',
			elems: [
				{
					name: 'Numbers'
				},
				{
					name: 'Numbers'
				},
				{
					name: 'Numbers'
				},
				{
					name: 'Numbers'
				},
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.collaboration {
	&__block {
		margin-bottom: m(32);
	}
	&__title {
		font-family: 'BBLVRS';
		font-style: normal;
		font-weight: 400;
		font-size: m(32);
		line-height: m(32);
		text-align: center;
		color: $white;
		margin-bottom: m(32);
	}
}

.elem {
	display: flex;

	&__name {
		font-family: 'BBLVRS';
		font-style: normal;
		font-weight: 400;
		font-size: m(32);
		line-height: m(32);
		color: $white;
	}
}
</style>
