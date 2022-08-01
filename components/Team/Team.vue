<template lang="pug">
	.team
		.team__title {{title}}
		.team__descr {{descr}}
		.team__items
			Member(
				v-for="(elem, ind) in items"
				:key='ind'
				:elem='elem'
			)
		.team__close
			Close
</template>

<script>

import head from "~/assets/img/head.png";
import Member from '~/components/Team/TeamMember'
import Close from '~/components/Team/Close'


export default {
	components: {
		Member,
		Close
	},
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
	position: relative;
	height: 100%;
	background: #000000;
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
		color: $white;
	}
	&__items {
		margin-top: m(30);
	}

	&__close {
		display: none;
	}
}
@include desc {
	.team {
		padding: d(129) d(156) d(50);
		&__title {
			font-size: d(32);
			line-height: d(32);
			text-align: center;
		}
		&__descr {
			margin: d(20) auto 0;
			font-size: d(14);
			line-height: d(17);
			width: d(677);
		}
		&__items {
			margin-top: d(80);
			display: grid;
			column-gap: d(100);
			row-gap: d(40);
			grid-template-columns: repeat(4, 1fr);
		}
		&__close {
			display: block;
			position: fixed;
			bottom: d(60);
			left: 50%;
			transform: translate(-50%);
		}
	}
}

@include hover {
	.team{
		&__item {
			&:hover {
				&::before, &::after {
					opacity: 1;
					visibility: visible;
				}
				&::before {
					top: d(-25);
					left: d(-80);
				}
				&::after {
					bottom: d(-25);
					right: d(-80);
					transform: rotate(180deg);
				}
			}
		}
	}
}

</style>
