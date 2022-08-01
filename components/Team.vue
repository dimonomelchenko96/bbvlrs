<template lang="pug">
	.team
		.team__title {{title}}
		.team__descr {{descr}}
		.team__items
			a.team__item(
				href='#'
				v-for="(elem, ind) in items"
				:key='ind'
			)
				img.team__item-img(:src='elem.img')
				.team__item-title {{elem.name}}
				.team__item-position {{elem.position}}
</template>

<script>

import head from "~/assets/img/head.png";


export default {


	data() {
		return {
			title: 'ABOUT THE TEAM',
			descr: 'From professors in Theology to Professors in combinatorics our team is huge, but still small compared to bible story creator team. and while their names are mostly anonymous or lost in translation we want all our members to be public. So turn the wheel to check who is who',
			items: [
				{
					img: head,
					name: 'LVN',
					position: 'Creative Director',
					link: '#'
				},
				{
					img: head,
					name: 'LVN',
					position: 'Creative Director',
					link: '#'
				},
				{
					img: head,
					name: 'LVN',
					position: 'Creative Director',
					link: '#'
				},
				{
					img: head,
					name: 'LVN',
					position: 'Creative Director',
					link: '#'
				},
			]
		}
	}
}

</script>

<style lang="scss" scoped>
	.team{
		background: url(../assets/img/Background.jpg) center center/cover no-repeat;
		padding: 80px 32px 0;
		&__title {
			font-family: 'BBLVRS';
			font-style: normal;
			font-weight: 400;
			font-size: m(32);
			line-height: m(32);
			color: $white;
		}
		&__descr {
			margin-top: 30px;
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: m(16);
			line-height: m(26);
			color: #FFFFFF;
		}
		&__items {
			margin-top: 30px;
		}
		&__item {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-bottom: 10px;
			&:not(:last-child) {
				margin-bottom: 20px;
			}
			&::before , &::after {
				content: '';
				position: absolute;
				background: url(../assets/svg/arrow-green.svg);
				width: 9px;
				height: 8px;
			}
			&::before {
				top: 0;
				left: 0;
			}
			&::after {
				bottom: 0;
				right: 0;
				transform: rotate(180deg);
			}
			&-img {
				max-width: 170px;
			}
			&-title {
				font-family: 'BBLVRS';
				font-style: normal;
				font-weight: 400;
				font-size: m(45);
				line-height: m(45);
				color: $white;
			}
			&-position {
				margin-top: 5px;
				font-family: 'Montserrat';
				font-style: normal;
				font-weight: 300;
				font-size: 17px;
				line-height: 21px;
				color: $white;
			}
		}
	}
</style>
