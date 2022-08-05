<template lang="pug">
.bible
	.bible__block
		.bible__img
		.bible__svg
			include ../assets/svg/x-green.svg
		.bible__img
	h2.bible__title.bible__title--hidden Bible
	.bible__text From professors in Theology to Professors in combinatorics our team is huge.
	.bible__books
		Search.bible__search
		ul.bible__list
			li.bible__title.bible__title--item(
				v-for="book in booksResp"
				:key="book.id"
				@click="showText(book.id, book.name, book.nameLong, book.chapters)"
			) {{ book.name }}
</template>

<script>
import Search from "~/components/ui/Search";

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
	},

	components: {
		Search
	}
}
</script>

<style lang="scss" scoped>
.bible {
	// margin-top: m(88);
	padding: m(88) m(32);
	display: grid;
	gap: 30px;
	height: calc(var(--var) * 100);

	&__block {
		display: none;
		flex-direction: column;
		gap: 30px;
		align-items: center;

		margin-right: 40px;
	}

	&__img {
		width: 2px;
		background-color: #fff;
		opacity: 0.4;
		height: 100%;
	}

	&__svg {
		// height: m(40);
		// width: m(40);
	}

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

	&__search {
		display: none;
	}
}

@include desc {
	.bible {
		padding-top: d(112);
		// margin-top: d(112);
		// width: 440px;
		// height: 1000px;

		overflow-y: scroll;

		display: flex;
		gap: none;

		// height: 1500px;
		&__block {
			display: flex;
		}



		&__title {
			font-size: d(32);
			line-height: d(32);

			&--hidden {
				display: none;
			}

			&--item {
				&:first-child::before {
					content: '';
					display: block;
					height: 1px;
					background-color: #fff;
					opacity: 0.1;

					margin-bottom: 30px;
				}
			}
		}

		&__text {
			display: none;
		}

		&__list {
			width: 440px;
			height: 1000px;
			overflow-y: scroll;
		}

		&__search {
			display: block;
		}
	}
}
</style>
