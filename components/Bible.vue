<template lang="pug">
.bible
	h2.bible__title Bible
	.bible__text From professors in Theology to Professors in combinatorics our team is huge.
	ul.bible__list
		li.bible__title.bible__title--item(
			v-for="block in content"
			:key="block.id"
		)
			a.bible__link(
				href="/"
			) {{ block.name }}
</template>

<script>
export default {
	name: 'Bible',
	data() {
		return {
			content: [
				{
					id: 1,
					name: "Genesis",
				},
				{
					id: 2,
					name: "Exodus",
				},
				{
					id: 3,
					name: "Numbers",
				},
				{
					id: 4,
					name: "Deuteronomy",
				},
				{
					id: 5,
					name: "Exodus",
				},
				{
					id: 6,
					name: "Numbers",
				},
				{
					id: 7,
					name: "Deuteronomy",
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.bible {
	padding: 0 30px;
	display: grid;
	gap: 30px;

	&__title {
		font-family: "BBLVRS", sans-serif;
		font-size: m(32);
		line-height: m(32);
		font-weight: 400;

		color: #fff;

		&--item {
			&::after {
				content: '';
				display: block;
				height: 1px;
				background-color: #fff;
				opacity: 0.1;

				margin-top: 30px;
			}
		}
	}

	&__text {
		font-family: "Montserrat", sans-serif;
		font-size: m(16);
		font-weight: 400;
		line-height: m(26);
		color: #fff;
	}

	&__list {
		display: grid;
		gap: 30px;
	}

	&__link {
		&:hover {
			color: #90ED91;
		}
	}

}
</style>
