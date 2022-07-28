<template lang="pug">
.collaboration
	.collaboration__block
		.collaboration__title {{ title }}
		.collaboration__description {{ description }}
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
		padding: 0 m(22);
	}
	&__title {
		font-family: 'BBLVRS';
		font-style: normal;
		font-weight: 400;
		font-size: m(32);
		line-height: m(32);
		color: $white;
		margin-bottom: m(32);
	}

	&__description {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 300;
		font-size: m(16);
		line-height: m(26);
		color: $green;
		max-width: m(174);
	}
}

.elem {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border-top: m(1) solid #1E1F20;
	height: m(100);
	padding: 0 m(10) 0 m(22);

	&:last-of-type {
		border-bottom: m(1) solid #1E1F20;
	}

	&__name {
		font-family: 'BBLVRS';
		font-style: normal;
		font-weight: 400;
		font-size: m(32);
		line-height: m(32);
		color: $white;
	}

	&__arrow {
		width: m(40);
		height: m(40);
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			transform: rotate(180deg);
			width: m(6);
			height: m(12);
		}
	}
}
</style>
