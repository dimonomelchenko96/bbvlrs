<template lang="pug">
.head
	Device.head__device
		template(#mob)
			.head__block
				CustomScroller
					PopUPHeadVue.head__member(
						:team="page.team"
						:members="page.team.members"
						:id="id"
					)
				Pagination.head__pagination(
					:item="id + 1"
					:itemLength="page.team.members.length"
					@nextPage ="showNextPage"
					@prevPage="showPrevPage"
				)
		template(#desc).device
			.head__block
				PopUPHeadVue.head__member(
					:team="page.team"
					:members="page.team.members"
					:id="id"
					:animationShow="animationShow"
				)
				TeamList.head__list(
					:teamList="page.team.members"
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
						:team="page.team"
						:members="page.team.members"
						@changeMember="returnMember($event)"
					)
		template(#desc)
			TeamScreen.popup__desc(
				v-if="allMembers"
				:team="page.team"
				:members="page.team.members"
				@changeMember="returnMember($event)"
				@showMember="returnMember($event)"
			)
</template>

<script>
import Device from "~/components/helpers/Device";
import PopUPHeadVue from "~/components/ui/PopUPHead";
import Pagination from "~/components/ui/Pagination";
import Popup from "~/components/helpers/Popup";
import TeamScreen from "~/components/screens/TeamScreen";
import TeamList from "~/components/ui/TeamList";
import { mapState } from "vuex";
import CustomScroller from "~/components/helpers/CustomScroller";

export default {
	name: "TeamPage",
	data() {
		return {
			id: 0,
			popupShow: false,
			animationShow: true,
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
			if (this.id !== ind) {
				this.animationShow = false;
				setTimeout(() => {
					this.animationShow = true;
				}, 1);
			}
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
			page: (state) => state.page,
		}),
	},

	async asyncData({ $api, store }) {
		if (store.state.page) {
			return;
		} else {
			const mainResp = await $api.page.main();
			store.commit("addPage", mainResp.acf);
			store.commit("socialLinks/addSocialStore", mainResp.acf.socials);
			store.commit(
				"modalVideo/iframeAddStore",
				mainResp.acf.collaboration.full_video
			);

			const booksResp = await $api.bible.booksWithChapters();
			store.commit("addBooksResp", booksResp.data.data);
			const firstBookId = booksResp.data.data[0].id;
			const firstBookChapters = await $api.bible.chapters(firstBookId);

			store.commit("addFirstChapters", firstBookChapters.data.data);
			const firstBookchapter = firstBookChapters.data.data[1].id;

			const firstChapter = await $api.bible.chapter(firstBookchapter);

			store.commit("addFirstChapterText", firstChapter.data.data.content);

			const charactersResp = await $api.collections.characters();
			store.commit("addCharacters", charactersResp.data);
		}
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
	height: calc(var(--vh) * 100);
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
		// height: 80vh;

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
