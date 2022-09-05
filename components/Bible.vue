<template lang="pug">
.bible
	.bible__img

	h2.bible__title.bible__title--hidden Bible

	.bible__text From professors in Theology to Professors in combinatorics our team is huge.
	.bible__book
		Search.bible__search
		.bible__books
			CustomScroller.bible__scroll
				ul.bible__list
					li.bible__item(
						v-for="book in booksResp"
						:key="book.id"
						@click="showText(book.id, book.name, book.nameLong, book.chapters)"
					)
						.bible__cross(
							v-if="idCheck === book.id"
						)
							include ../assets/svg/x-lilac.svg

						.bible__title.bible__title--item(
							:class="[idCheck === book.id && 'bible__title--lilac']"
						) {{ book.name }}

</template>

<script>
import Search from "~/components/ui/Search";
import CustomScroller from "~/components/helpers/CustomScroller";

export default {
	props: ["booksResp"],
	name: "Bible",
	data() {
		return { idCheck: "GEN" };
	},
	methods: {
		showText(id, name, nameLong, chapters) {
			if (this.idCheck !== id) {
				this.$emit("onClick", { id, name, nameLong, chapters });
				const block = document.querySelector(".chapter__scroll");
				block.scrollTo(0, 0);
				this.idCheck = id;
			}
		},
	},
	components: {
		Search,
		CustomScroller,
	},
};
</script>

<style lang="scss" scoped>
.bible {
	padding: m(0) m(32) m(30);
	display: grid;
	gap: m(30);

	::v-deep {
		.ps__thumb-y {
			background-color: $lilac;
		}
	}

	&__scroll {
		height: calc(var(--var) * 100);
	}

	&__img {
		display: none;
	}

	&__title {
		font-family: "BBLVRS", sans-serif;
		font-size: m(32);
		line-height: m(32);
		font-weight: 400;
		color: #fff;

		&--item {
			cursor: pointer;

			&::after {
				content: "";
				display: block;
				height: 1px;
				background-color: #fff;
				opacity: 0.1;

				margin-top: m(30);
			}

			&:hover {
				color: $lilac;
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
		height: calc(var(--vh) * 60);
		display: grid;
		gap: m(30);
	}

	&__search {
		display: none;
	}

	&__cross {
		display: none;
	}
}

@include desc {
	.bible {
		padding: d(90) d(80) 0 0;
		min-width: d(500);
		display: flex;
		gap: d(30);

		&__img {
			display: block;
			width: d(2);
			background-color: $lilac;
			opacity: 0.4;
			height: 100%;
			transform: translateX(d(58));
		}

		&__books {
			display: flex;
			max-height: calc(var(--vh) * 80);
		}

		&__book {
			display: flex;
			flex-direction: column;
		}

		&__item {
			display: flex;
			align-items: center;
		}

		&__cross {
			position: absolute;
			left: 0;
			width: d(56);
			height: d(86);
			display: flex;
			align-items: center;
			background-color: #f5f5f5;
			transform: translateY(d(-8));
			// padding: d(10) 0 0 0;

			svg {
				width: 100%;
				height: d(56);
			}
		}

		&__title {
			font-size: d(32);
			line-height: d(32);
			flex: 1;
			color: #000;

			&--hidden {
				display: none;
			}

			&--item {
				&::after {
					background-color: #000;
					margin-top: d(30);
				}
			}

			&--lilac {
				color: $lilac;
				font-weight: 700;
			}
		}

		&__text {
			display: none;
		}

		&__scroll {
			height: 100%;
		}

		&__list {
			width: 100%;
			gap: d(30);
			padding-left: d(86);
			padding-top: d(26);
		}

		&__search {
			display: block;
			padding-left: d(86);
		}

		&__svg {
			width: d(56);
			height: d(56);

			svg {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
