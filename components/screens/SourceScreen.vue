<template lang="pug">
.pager
	Device
		template(#mob)
			ChapterBible(
				@clickOpen="openBook()"
				@nextPage="showNextPage()"
				@prevPage="showPrevPage()"
				:name="name"
				:nameLong="nameLong"
				:chaptersLength="chaptersLength"
				:chapterText="chapterText"
				:chapter="chapter"
			)

			.popup-mob(:class="[popupShow ? 'active' : null]")
				Popup(
					v-if="popup"
					@closePopup="hidePopup()"
				)
					Bible(
						:booksResp="books"
						@onClick="open($event)"
					)

					Search.search

			Search

		template(#desc)
			.container
				Bible(
					:booksResp="books"
					@onClick="open($event)"
				)
				ChapterBible.page__chapterBible(
					:openBook="openBook"
					@clickClose="close()"
					@nextPage="showNextPage()"
					@prevPage="showPrevPage()"
					@pageGo="showPageGo($event)"
					:name="name"
					:nameLong="nameLong"
					:chaptersLength="chaptersLength"
					:chapterText="chapterText"
					:chapter="chapter"
				)
</template>

<script>
import Bible from "~/components/Bible";
import Search from "~/components/ui/Search";
import ChapterBible from "~/components/ChapterBible";
import Device from "~/components/helpers/Device";
import Article from "~/components/Article.vue";
import Popup from '~/components/helpers/Popup';

export default {
	props: ['books', 'name', 'chapterText', 'nameLong', 'chaptersLength', 'chapters', 'chapter'],
	data() {
		return {
			popup: false,
			popupShow: false,
		};
	},
	components: {
		Bible,
		Search,
		ChapterBible,
		Device,
		Article,
		Popup,
	},
	methods: {
		async open({id, name, nameLong, chapters}) {
			this.$emit('open', {id, name, nameLong, chapters});
			this.popup = !this.popup;
			this.popupShow = !this.popupShow;
		},

		openBook() {
			this.popup = !this.popup;
			this.popupShow = !this.popupShow;
		},

		hidePopup() {
			this.popupShow = !this.popupShow;
			setTimeout(() => {
				this.popup = !this.popup;
			}, 300)
		},

		showNextPage() {
			this.$emit('showNextPage');
		},

		showPrevPage() {
			this.$emit('showPrevPage');
		},

		showPageGo(page) {
			this.$emit('showPageGo', page);
		}
	},
};
</script>

<style lang="scss" scoped>
.pager {
	background: black;
	background-size: cover;
	width: 100%;
	position: relative;
}

.bible {
	position: relative;

	&_hidden {
		overflow: hidden;
	}
}

.search {
	position: absolute;
}

.popup-mob {
	opacity: 0;
	visibility: hidden;
    height: 100vh;
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

@include desc{
	.pager {
		position: relative;
		height: 100vh;

		&__search {
			display: none;
		}
		// margin-top: d(112);
	}
	.search {

	}
	.container {
		display: flex;
		flex-direction: row-reverse;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 75vh;
	}
}
</style>
