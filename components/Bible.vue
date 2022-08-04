<template lang="pug">
.bible
	h2.bible__title Bible
	.bible__text From professors in Theology to Professors in combinatorics our team is huge.
	ul.bible__list
		li.bible__title.bible__title--item(
			v-for="book in booksResp"
			:key="book.id"
			@click="showText(book.id, book.name, book.nameLong, book.chapters)"
		) {{ book.name }}
</template>

<script>

export default {
	props: ["booksResp"],

	name: 'Bible',
	data() {
		return {}
	},

	methods: {
		showText(id, name, nameLong, chapters) {
			this.$emit('onClick', {id, name, nameLong, chapters});
		}
	}
}
</script>

<style lang="scss" scoped>
.bible {
	padding: 0 m(32) m(70);
	display: grid;
	gap: 30px;
	height: calc(var(--var) * 100);

	&__title {
		font-family: "BBLVRS", sans-serif;
		font-size: m(32);
		line-height: m(32);
		font-weight: 400;

		color: #fff;

		&:hover {
			color: #90ED91;
		}

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
}
</style>
