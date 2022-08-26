<template lang="pug">
.head
	Device.head__device
		template(#mob)
			.head__block
				CustomScroller
					PopUPHeadVue.head__member(
						:team="team"
						:members="members"
						:id="id"
					)
				Pagination.head__pagination(
					:item="id + 1"
					:itemLength="members.length"
					@nextPage ="showNextPage"
					@prevPage="showPrevPage"
				)
		template(#desc).device
			.head__block
				PopUPHeadVue.head__member(
					:team="team"
					:members="members"
					:id="id"
				)
				TeamList.head__list(
					:teamList="members"
					:id="id"
					@selectMember="returnMember($event)"
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
</template>

<script>
import Device from "~/components/helpers/Device";
import PopUPHeadVue from "../ui/PopUPHead";
import Pagination from "../ui/Pagination";
import Popup from "~/components/helpers/Popup";
import TeamScreen from "~/components/screens/TeamScreen";
import TeamList from "../ui/TeamList";
import { mapState } from "vuex";
import CustomScroller from "~/components/helpers/CustomScroller";

export default {
	props: ["team", "members"],
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
		CustomScroller,
	},
	methods: {
		showNextPage() {
			this.id += 1;
			this.topScroll();
		},

		showPrevPage() {
			this.id -= 1;
			this.topScroll();
		},

		hidePopup() {
			this.popupShow = !this.popupShow;
			setTimeout(() => {
				this.$store.commit("allMembersToggle");
			}, 300);
		},

		open() {
			this.$store.commit("allMembersToggle");
		},

		returnMember(ind) {
			this.id = ind;
		},

		topScroll() {
			const blockHead = document.querySelector(".member__img");
			blockHead.scrollIntoView();
		},
	},
	computed: {
		...mapState({
			allMembers: (state) => state.allMembers,
		}),
	},
};
</script>

<style lang="scss" scoped>
button {
	font-family: "Montserrat";
	color: $black;
	font-size: m(16);
	line-height: m(26);
	font-weight: 400;
}
.head {
	padding: m(30) m(32) 0;

	::v-deep {
		.ps__thumb-y {
			background-color: $lilac;
		}
	}

	&__pagination {
		margin: m(30) 0;
	}

	&__block {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: calc(var(--vh) * 100 - m(66));

		padding-top: m(40);
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
	transition: all 0.3s ease;

	&.active {
		opacity: 1;
		visibility: visible;
		top: 0;
	}
}

@include desc {
	.popup__desc {
		background: $backgroundThemeWhite;
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		left: 0;
		top: 0;
		height: calc(var(--vh) * 100);
		z-index: 150;
		padding: d(129) d(156) d(180) !important;
	}
	.head {
		padding: d(150) d(80) d(150) d(112);
		height: 80vh;

		display: flex;

		align-items: center;

		&__device {
			flex-grow: 1;
		}

		&__block {
			flex-direction: row;
			align-items: center;

			padding-top: 0;
		}

		&__member {
			width: 75%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-right: d(30);
		}

		&__list {
			width: 25%;
		}
	}
}
</style>
