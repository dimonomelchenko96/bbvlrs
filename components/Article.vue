<template lang="pug">
	.article
		.article__block
			.article__items
				.article__item(
					v-for="(elem, ind) in filteredList"
					:key="ind"
				)
					.article__item-title {{elem.title}}
					.article__item-descr {{elem.descr}}
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
	data() {
		return {
			name: 'Adam',
			elems: [
				{
					title: 'Genesis 1:1',
					descr: 'In the start Adam created the heavens and the earth'
				},
				{
					title: 'Genesis 1:1',
					descr: 'In the beginning Adam created the heavens and the earth'
				},
				{
					title: 'Genesis 1:1',
					descr: 'In the beginning Adam created the heavens and the earth'
				},
				{
					title: 'Genesis 1:1',
					descr: 'In the beginning Adam created the heavens and the earth'
				},
				{
					title: 'Genesis 1:1',
					descr: 'In the beginning Adam created the heavens and the earth'
				},				{
					title: 'Genesis 1:1',
					descr: 'In the beginning Adam created the heavens and the earth'
				},
				{
					title: 'Genesis 1:1',
					descr: 'In the beginning Adam created the heavens and the earth'
				},

			]
		}
	},
	computed: {
		filteredList: function() {
			let name = this.name;

			return this.elems.filter(function (elem) {
				if(name==='') return true;

				else return elem.descr.toLowerCase().indexOf(name.toLowerCase()) > -1;
        })
		}
	}
}
</script>

<style lang="scss" scoped>
.article {
	position: relative;
	background: url(../assets/img/Background.jpg) center center/cover no-repeat;
	&__block {
		padding: 38px 0 126px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}
	&__items{
		padding: 0 30px;
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
}
</style>
