<template lang="pug">
.search
	form.search__form(
		type="submit"
		@submit.prevent="handleSubmit"
	)
		.search__img(
			@click="handleSubmit"
		)
			include ../../assets/svg/search-icon.svg
		input(
			v-model="text"
			placeholder="srch"
		)
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "search",

	computed: {
		...mapState({
			searchName: (state) => state.search.searchName,
		}),
	},

	data() {
		return {
			text: this.searchName,
		};
	},

	methods: {
		handleSubmit() {
			if (this.text) {
				this.$store.commit("search/bindName", this.text);
				this.$store.commit("search/showPopup", true);
				this.$emit("closePopup");
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.search {
	position: relative;
	padding: m(15) m(32);
	width: 100%;
	bottom: 0;

	&__form {
		position: relative;
	}

	&__img {
		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;

		position: absolute;
		width: m(15);
		height: m(15);
		right: m(16);
		top: 50%;
		transform: translateY(-50%);

		::v-deep {
			svg {
				width: 100%;
				height: auto;
				display: block;
			}
		}
	}

	input {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		font-size: m(16);
		line-height: m(26);
		width: 100%;
		color: $white;
		padding: m(7) m(16);

		border-radius: 4px;
		background: $lilac;
		border: 2px solid $lilac;
		border-radius: 4px;
		outline: none;

		&::placeholder {
			color: $white;
			text-transform: uppercase;
		}
	}
}

@include desc {
	.search {
		padding: 0;
		position: relative;
		height: d(40);

		margin-bottom: d(34);

		&__img {
			position: absolute;
			width: d(14);
			height: d(14);
			right: d(16);

			::v-deep {
				svg {
					path {
						stroke: $lilac;
					}
				}
			}
		}

		input {
			padding: d(7) d(16);
			font-size: d(14);
			line-height: d(26);
			height: d(40);
			background-color: $backgroundThemeWhite;
			border: none;
			border-radius: 0;
			border-bottom: 2px solid $lilac;
			color: $lilac;

			&::placeholder {
				color: $lilac;
			}
		}

		&::after {
			content: "";
			display: block;
			height: 1px;
			background-color: $white;
			opacity: 0.1;

			margin: d(30) 0;
		}
	}
}
</style>
