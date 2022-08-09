<template lang="pug">
	.article
		.article__block
			.article__items
				.article__none(
					v-if='data.length < 1'
				)
					.article__none-text Not Found
				.article__item(
					v-for="(elem, ind) in data"
						:key="ind"
				)
					.article__item-title {{elem.reference}}
					.article__item-descr(v-html='elem.text')
		.article__bottom
			.article__search
				input(
					v-model='name'
					@keyup.enter='bindName'
					)
			.article__pagination
				button.article__pagination-prev(
					@click='prevPage'
					:disabled='offset  === 1'
					)
					include ../assets/svg/arrow-left.svg
				.article__pagination-pages {{offset }} / {{pages}}
				button.article__pagination-next(
					@click='nextPage'
					:disabled='offset  === pages'
					)
					include ../assets/svg/arrow-left.svg
</template>

<script>
export default {
	props: ['data','nameChar','offset','pages'],
	data() {
		return {
			name: this.nameChar,
		}
	},
	methods: {
		nextPage() {
			this.$emit('nextPage')
		},
		prevPage() {
			this.$emit('prevPage')
		},
		bindName() {
			this.$emit('resetOffset');
			this.$emit('bindName', this.name)
		},
	},
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
	}
	&__bottom{
		position: fixed;
		bottom: 0;
		width: 100%;
		background: $black;
	}
	&__pagination {
		padding: m(8) m(16);
		display: flex;
		align-items: center;
		justify-content: space-between;
		&-prev , &-next {
			@include circle;
		}
		&-next {
			transform: rotate(180deg);
		}
		&-pages {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: m(16);
			line-height: m(20);
			color: $white;
		}
	}
	&__search {
		position: relative;
		padding: m(15) m(24);
		width: 100%;
		&::before {
			content: '';
			position: absolute;
			width: 15px;
			height: 15px;
			right: m(40);
			top: m(27);
			background: url(../assets/svg/search-icon.svg);
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
		padding-top: d(38);
	}
	&__items{
		padding: 0 d(30);
	}
	&__item{
		padding-bottom: d(30);
		border-top: 1px solid rgba(255, 255, 255, 0.1);

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

		&:first-child {
			padding-top: d(30);

		}
	}
	&__bottom{
		background: inherit;
		position: relative;
		order: -1;
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
		&::before {
			content: '';
			position: absolute;
			width: 15px;
			height: 15px;
			right: d(40);
			top: d(27);
			background: url(../assets/svg/search-icon.svg);
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
		}
	}
}
}
</style>
