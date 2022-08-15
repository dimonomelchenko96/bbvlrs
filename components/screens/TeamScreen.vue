<template lang="pug">
.team
	.team__title {{team.title}}
	.team__descr {{team.description}}
	Device
		template(#desc)
			CustomScroller.team__items
				Member(
					v-for="(elem, ind) in members"
					:key="ind"
					:elem="elem"
					:id="ind"
					:showPopup="showPopup"
					@popup="descPopup"
					@showMember="descShowMember($event)"
				)
			Close.team__close(
				@click.native="closeMembers"
			)
		template(#mob)
			.team__items
				Member(
					v-for="(elem, ind) in members"
					:key="ind"
					:elem="elem"
					@click.native="returnMember(ind)"
				)

</template>

<script>

import Device from '~/components/helpers/Device';
import Head from '~/components/ui/PopUPHead';
import Popup from '~/components/helpers/Popup';
import Member from '~/components/Team/TeamMember';
import Close from '~/components/Team/Close';
import CustomScroller from "~/components/helpers/CustomScroller";

export default {
	components: {
		Member,
		Close,
		Popup,
		Head,
		Device,
		CustomScroller
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
		},

		closeMembers() {
			this.$store.commit('allMembersToggle');
		},

		descShowMember(id) {
			this.$emit('showMember', id);
			this.$store.commit('allMembersToggle');
		}
	},
	props: ['team', 'members'],
	data() {
		return {
			mobPopupId : 0,
			popup : false,
			showPopup: null,
		}
	}
}
</script>

<style lang="scss" scoped>

.team {
	position: relative;
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
		margin-top: m(30);
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
			height: 70vh;
			margin-top: d(80);
			display: grid;
			column-gap: d(100);
			row-gap: d(40);
			grid-template-columns: repeat(4, 1fr);
		}

		&__close {
			display: flex;
			align-items: center;
			position: absolute;
			bottom: d(60);
			left: 50%;
			transform: translate(-50%);
		}
	}
}

</style>
