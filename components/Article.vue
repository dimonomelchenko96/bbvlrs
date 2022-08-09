<template lang="pug">
.article
		.article__block
			.article__items
				.article__none(
					v-if='filteredList.length < 1'
				)
					.article__none-text Not Found
				.article__item(
					v-for="(elem, ind) in filteredList"
						:key="ind"
				)
					.article__item-title {{elem.reference}}
					.article__item-descr {{elem.text}}
		.article__bottom
			.article__search
				input(v-model='name')
			.article__back
				a.article__back-link(href='#')
					.article__back-arrow
						include ../assets/svg/arrow-left.svg
					span Back
</template>

<script>
export default {
	props: ['data','nameChar'],
	data() {
		return {
			name: this.nameChar,
		}
	},
	methods: {
		replaceToGreen(str) {
			if(str && str.indexOf(this.name) >= 0) {
				console.log(this.name)
				return str.replaceAll(this.name , `Dima`);
			}
		}
	},
	computed: {
		filteredList() {
			let name = this.name;

			return this.data.filter(function (elem) {
				if(name ==='') return true;
				else return elem.text.toLowerCase().indexOf(name.toLowerCase()) > -1;
       		})
		}
	}
}
</script>

<style lang="scss" scoped>
.green {
	color: $green;
}
.article {
	position: relative;
	&__block {
		padding: 38px 0 126px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}
	&__items{
		padding: 0 30px;
		width: 100%;
	}
	&__item{
		padding-bottom: 30px;
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
			margin-top: 24px;
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: m(16);
			line-height: m(26);
			color: rgba(255, 255, 255, 0.5);
		}
		&:not(:first-child) {
			margin-top: 30px;
		}
	}
	&__bottom{
		position: fixed;
		bottom: 0;
		width: 100%;
		background: $black;
	}
	&__back {
		padding: 8px 16px;
		display: flex;
		align-items: center;
		&-arrow {
			@include circle;
		}
		&-link {
			display: flex;
			align-items: center;
			span {
				padding-left: 16px;
				font-family: 'Montserrat';
				font-style: normal;
				font-weight: 400;
				font-size: m(16);
				line-height: m(20);
				color: $white;
			}
		}
	}
	&__search {
		position: relative;
		padding: 15px 24px;
		background: $black;
		width: 100%;
		&::before {
			content: '';
			position: absolute;
			width: 15px;
			height: 15px;
			right: 40px;
			top: 27px;
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
			padding: 8px 16px;
			height: 40px;
			border: 1px solid rgba(255, 255, 255, 0.05);
			border-radius: 4px;
			background: rgba(255, 255, 255, 0.05);
			border: 1px solid rgba(255, 255, 255, 0.05);
			border-radius: 4px;
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
</style>
