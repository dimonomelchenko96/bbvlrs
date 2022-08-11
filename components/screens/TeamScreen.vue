<template lang="pug">
.team
	.team__title {{team.title}}
	.team__descr {{team.description}}
	Device
		template(#desc)
			.team__items
				Member(
					v-for="(elem, ind) in members"
					:key="ind"
					:elem="elem"
					:id='ind'
					:socials="socials"
					:showPopup="showPopup"
					@popup="descPopup"
				)
		template(#mob)
			.team__items
				Member(
					v-for="(elem, ind) in members"
					:key="ind"
					:elem="elem"
					@click.native="returnMember(ind)"
				)
	//- .popup-mob(:class="[popup ? 'active' : null]")
	//- 	Popup(@closePopup="togglePopup")
	//- 		Head(
	//- 			v-if="popup"
	//- 			:items="items[mobPopupId - 1]"
	//- 		)

</template>

<script>

import Device from '~/components/helpers/Device';
import Head from '~/components/ui/PopUPHead';
import Popup from '~/components/helpers/Popup';
import head from "~/assets/img/head.png";
import Member from '~/components/Team/TeamMember';
import Close from '~/components/Team/Close';


export default {
	components: {
		Member,
		Close,
		Popup,
		Head,
		Device
	},
	methods: {
		descPopup(id) {
			this.showPopup === id
				? this.showPopup = null
				: this.showPopup = id;
		},
		togglePopup(id) {
			this.mobPopupId = id;
			this.popup = !this.popup;
		},

		returnMember(ind) {
			this.$emit('changeMember', ind);
			this.$store.commit('allMembersToggle');
			console.log(ind);
		}
	},
	props: ['team', 'members'],
	data() {
		return {
			mobPopupId : 0,
			popup : false,
			showPopup: null,
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
					name: 'Bob',
					position: 'Creative Director',
					description: 'Believes in Randomness The phenomenon which makes disorder out of boring order.',
					link: '#'
				},
				{
					id:3,
					img: head,
					name: 'John',
					position: 'Creative Director',
					description: 'Believes in Randomness The phenomenon which makes disorder out of boring order.',
					link: '#'
				},
				{
					id:4,
					img: head,
					name: 'Brad',
					position: 'Creative Director',
					description: 'Believes in Randomness The phenomenon which makes disorder out of boring order.',
					link: '#'
				},
				{
					id:5,
					img: head,
					name: 'Ivan',
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
				}
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
	}
}

</script>

<style lang="scss" scoped>

.team {
	position: relative;
	/* height: 100%; */
	// background: #000000;
	padding: m(20) m(32);

	&.overflow {
		overflow: hidden;
	}

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

.popup-mob {
	opacity: 0;
	visibility: hidden;
    height: 100%;
    position: fixed;
	z-index: 103;
    top: 0;
    left: 0;
    overflow: scroll;
	transform: translateY(-100%);
	transition: all .3s ease;

	&.active {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}
}

@include desc {

	.popup-mob {
		display: none;
	}

	.team {
		padding: d(129) d(156) d(180);

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

