<template lang="pug">
.article
		.article__block
			CustomScroller.article__items
				Preloader.article__preloader(
					v-if='loading'
				)
				.article__none(
					v-if='data.length < 1 && !loading'
				)
					.article__none-text Not Found
				.article__item(
					v-if='!loading'
					v-for="(elem, ind) in data"
						:key="ind"
				)
					.article__item-title {{elem.reference}}
					.article__item-descr(v-html='elem.text')
		.article__bottom
			form.article__search(@submit.prevent='bindName')
				.article__search-img(@click='bindName')
					include ../assets/svg/search-icon.svg
				input(
						:value='searchName'
						@input='commitName'
					)
			.article__pagination
				button.article__pagination-prev(
					@click='prevPage'
					:disabled='offset  === 1'
					)
					include ../assets/svg/arrow-left.svg
				.article__pagination-pages
					span {{offset }}
					span /
					span {{pages}}
				button.article__pagination-next(
					@click='nextPage'
					:disabled='offset  === pages'
					)
					include ../assets/svg/arrow-left.svg
</template>

<script>
import CustomScroller from "~/components/helpers/CustomScroller";
import Preloader from '~/components/helpers/Preloader'
import { mapState } from "vuex";

export default {
	props: ['data','offset','pages'],
	data() {
		return {

		}
	},

	computed: {
		...mapState({
			searchName: (state) => state.search.searchName,
			loading: (state) => state.search.loading
		}),
	},

	methods: {
		nextPage() {
			this.$emit('nextPage');
		},
		prevPage() {
			this.$emit('prevPage');
		},
		bindName() {
			this.$emit('resetOffset', this.searchName);
			this.$emit('bindName', this.searchName);
		},
		commitName(e) {
			this.$store.commit('search/bindName', e.target.value);
		},
	},
	components: {
		CustomScroller,
		Preloader
	}
}
</script>

<style lang="scss" scoped>
.article {
	position: relative;

	&__block {
		padding: m(38) 0 m(126);
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}

	&__items{
		padding: 0 m(30);
		width: 100%;
		height: calc(var(--vh)*100 - m(214));
	}

	&__preloader {
		margin: 0 auto;
	}

	&__item{
		padding-bottom: m(30);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);

		&-title {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 700;
			font-size: m(16);
			line-height: m(11);
			color: $green;
		}

		&-descr {
			margin-top: m(24);
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: m(16);
			line-height: m(26);
			color: rgba(255, 255, 255, 0.5);
			&.green {
				color: #000000;
			}
		}

		&:not(:first-child) {
			margin-top: m(30);
		}
		&:first-child{
			margin-top: m(1);
		}
	}

	&__bottom{
		position: fixed;
		bottom: 0;
		width: 100vw;
		background: $black;
	}

	&__pagination {
		padding: m(8) m(16);
		display: flex;
		align-items: center;
		justify-content: space-between;

		&-prev , &-next {
			@include circle;
			cursor: pointer;
		}

		&-next {
			transform: rotate(180deg);
		}

		&-pages {
			display: flex;
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: m(16);
			line-height: m(20);
			color: $white;

			span {
				display: block;
				width: 1.5ch;
				text-align: center;
			}
		}
	}
	&__search {
		position: relative;
		padding: m(15) m(24);
		width: 100%;

		&-img {
			cursor: pointer;
			position: absolute;
			width: m(15);
			height: m(15);
			right: m(40);
			top: m(27);
			svg {
				width: 100%;
				object-fit: cover;
			}
		}

		input {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: m(16);
			line-height: m(26);
			width: 100%;
			color: $white;
			padding: m(8) m(16);
			height: m(40);
			border: 1px solid rgba(255, 255, 255, 0.05);
			border-radius: m(4);
			background: rgba(255, 255, 255, 0.05);
			outline: none;
		}
	}

	&__none {

		&-text {
			font-size: m(30);
			color: $white;
		}
	}
}

@include desc {
.article {
	position: relative;
	display: flex;
	flex-direction: column;

	&__block {
		padding: 0;
	}

	&__items{
		padding: 0 d(30);
		height: calc(var(--vh)*100 - d(214));
	}
	&__item{
		padding-bottom: d(30);

		&-title {
			font-size: d(16);
			line-height: d(11);
		}

		&-descr {
			margin-top: d(24);
			font-size: d(16);
			line-height: d(26);
		}

		&:not(:first-child) {
			margin-top: d(30);
		}

		&:first-child{
			margin-top: d(1);
		}

		&:first-child {
			padding-top: d(30);

		}
	}
	&__bottom{
		background: inherit;
		position: relative;
		order: -1;
		width: 100%;
	}
	&__pagination {
		padding: d(8) d(16);
		display: flex;
		align-items: center;
		justify-content: space-between;
		&-prev , &-next {
			width: d(40);
			height: d(40);
		}
		&-next {
			transform: rotate(180deg);
		}
		&-pages {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: d(16);
			line-height: d(20);
			color: $white;
		}
	}
	&__search {
		padding: d(15) d(24);
		&-img {
			position: absolute;
			width: d(15);
			height: d(15);
			right: d(40);
			top: d(27);
		}
		input {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: d(16);
			line-height: d(26);
			width: 100%;
			color: $white;
			padding: d(8) d(16);
			height: d(40);
			border: 1px solid rgba(255, 255, 255, 0.05);
			border-radius: d(4);
			background: rgba(255, 255, 255, 0.05);
			outline: none;
		}
	}
	&__none {
		&-text {
			font-size: d(30);
			color: $white;
			padding-top: d(30);
		}
	}
}
}
</style>
