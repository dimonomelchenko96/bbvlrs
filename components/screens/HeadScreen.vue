<template lang="pug">
.head
	PopUPHeadVue.head__member(
		:team="team"
		:members="members"
		:id="id"
	)
	Pagination.head__pagination(
		:item="id + 1"
		:itemLength="members.length"
		@nextPage="showNextPage"
		@prevPage="showPrevPage"
	)
	Device
		template(#mob)
			.popup-mob(:class="[allMembers ? 'active' : null]")
				Popup(
					v-if="allMembers"
					@closePopup="open"
				)
					TeamScreen(
						:team="team"
						:members="members"
						@changeMember="returnMember($event)"
					)
		template(#desc)
			TeamScreen.popup__desc(
				v-if="allMembers"
				:team="team"
				:members="members"
				@changeMember="returnMember($event)"
				@showMember="returnMember($event)"
			)
	TeamList.head__list(
		:teamList="members"
		@selectMember="returnMember($event)"
	)
</template>

<script>
import Device from "~/components/helpers/Device";
import PopUPHeadVue from '../ui/PopUPHead';
import Pagination from '../ui/Pagination';
import Popup from '~/components/helpers/Popup';
import TeamScreen from '~/components/screens/TeamScreen';
import TeamList from '../ui/TeamList';
import { mapState } from "vuex";

export default {
	props: ['team', 'members'],
	data() {
		return {
			id: 0,
			popupShow: false,
		};
	},
	components: {
		PopUPHeadVue,
		Pagination,
		Popup,
		TeamScreen,
		TeamList,
		Device,
	},
	methods: {
		showNextPage() {
			this.id += 1;
		},

		showPrevPage() {
			this.id -= 1;
		},

		hidePopup() {
			this.popupShow = !this.popupShow;
			setTimeout(() => {
				this.$store.commit('allMembersToggle')
			}, 300)
		},

		open() {
			this.$store.commit('allMembersToggle')
		},

		returnMember(ind) {
			this.id = ind;
		},
	},
	computed: {
		...mapState({
			allMembers: (state) => state.allMembers
		})
	}
};
</script>

<style lang="scss" scoped>

button {
	font-family: "Montserrat";
	color:#fff;
	font-size: m(16);
	line-height: m(26);
	font-weight: 400;
}
.head {
	padding: m(40) m(32) 0;

	&__pagination {
		margin-top: 30px;
	}
}
.popup-mob {
	opacity: 0;
	visibility: hidden;
    height: calc(var(--vh) * 100);
    position: fixed;
    top: -100%;
    left: 0;
	right: 0;
	z-index: 103;
    overflow: scroll;
	transition: all .3s ease;

	&.active {
		opacity: 1;
		visibility: visible;
		top: 0;
	}
}

@include desc {
	.popup__desc {
		background: #000;
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		left: 0;
		top: 0;
		height: calc(var(--vh) * 100);
		width: 100vw;
		z-index: 150;
	}
	.head {
		padding: d(150) d(80) d(150) d(112);
		height: 80vh;

		display: flex;
		justify-content: space-between;
		align-items: center;

		&__pagination {
			display: none;
		}

		&__member {
			width: 75%;
			display: flex;
			align-items: center;
			justify-content: space-between;

		}

		&__list {
			width: 25%;
		}
	}
}
</style>
