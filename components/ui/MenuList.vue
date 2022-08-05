<template lang="pug">
.books
	.books__block
		.books__img.books__img--1
		.books__svg
			include ../../assets/svg/x-green.svg
		.books__img
	ul.books__list
		li.books__item(
			@click="bookId = book.id"
			v-for="book in booksResp"
			:key="book.id"
			:class="{'books__item--active': bookId === book.id}"
		)
			nuxt-link(
				:to="'/source/' + book.name"
				target="_blank"
			) {{ book.name}}
</template>

<script>

export default {
	props: ["booksResp"],

	name: "menuList",

	data() {
		return{
			bookId: "",
		}
	},

	methods: {}
}
</script>

<style lang="scss" scope>
.books {
	display: flex;

	&__block {
		display: flex;
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

		&--1 {
			height: 220px;
		}
	}

	&__svg {
		// height: auto;
	}

	&__list {
		overflow-y: scroll;
		height: 623px;
	}


	&__item {
		font-family: "Montserrat";
		font-size: d(16);
		line-height: d(26);
		font-weight: 300;
		color: #6e6e6e;
		text-transform: uppercase;

		&--active {
			color: #fff;
			font-weight: 700;
		}
	}
}
</style>
