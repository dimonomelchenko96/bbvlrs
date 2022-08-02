<template lang="pug">
.team
	.team__title {{title}}
	.team__descr {{descr}}
	.team__items
		Member(
			v-for="(elem, ind) in items"
			:key='ind'
			:elem='elem'
			:socials='socials'
			:showAnswer='showAnswer'
			@answer='answer'
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
			showAnswer: null,
			title: 'ABOUT THE TEAM',
			descr: 'From professors in Theology to Professors in combinatorics our team is huge, but still small compared to bible story creator team. and while their names are mostly anonymous or lost in translation we want all our members to be public. So turn the wheel to check who is who',
			items: [
				{
					id:1,
					img: head,
					name: 'LVN',
					position: 'Creative Director',
					description: 'Believes in Randomness The phenomenon which makes disorder out of boring order.',
					link: '#'
				},
				{
					id:2,
					img: head,
					name: 'LVN',
					position: 'Creative Director',
					description: 'Believes in Randomness The phenomenon which makes disorder out of boring order.',
					link: '#'
				},
				{
					id:3,
					img: head,
					name: 'LVN',
					position: 'Creative Director',
					description: 'Believes in Randomness The phenomenon which makes disorder out of boring order.',
					link: '#'
				},
				{
					id:4,
					img: head,
					name: 'LVN',
					position: 'Creative Director',
					description: 'Believes in Randomness The phenomenon which makes disorder out of boring order.',
					link: '#'
				},
				{
					id:5,
					img: head,
					name: 'LVN',
					position: 'Creative Director',
					description: 'Believes in Randomness The phenomenon which makes disorder out of boring order.',
					link: '#'
				},
				{
					id:6,
					img: head,
					name: 'LVN',
					position: 'Creative Director',
					description: 'Believes in Randomness The phenomenon which makes disorder out of boring order.',
					link: '#'
				},
				{
					id:7,
					img: head,
					name: 'LVN',
					position: 'Creative Director',
					description: 'Believes in Randomness The phenomenon which makes disorder out of boring order.',
					link: '#'
				},
				{
					id:8,
					img: head,
					name: 'LVN',
					position: 'Creative Director',
					description: 'Believes in Randomness The phenomenon which makes disorder out of boring order.',
					link: '#'
				},
			],
			socials: [
				{
					link: "www.example.com",
					icon: "globe",
				},
				{
					link: "www.example.com",
					icon: "graduate",
				},
				{
					link: "www.example.com",
					icon: "linkedin",
				},
			],
		}
	},
	methods: {
		answer(id) {
			this.showAnswer === id
				? this.showAnswer = null
				: this.showAnswer = id;
		}
	}
}

</script>

<style lang="scss" scoped>
.team{
	position: relative;
	height: 100%;
	background: #000000;
	padding: m(80) m(32) 0;

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

</style>
