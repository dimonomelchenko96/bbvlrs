<template lang="pug">
.page
	Device
		template(#mob)
			Bible(
				v-if="!openBook"
				:booksResp="books"
				@onClick="open($event)"
			)
			ChapterBible(
				v-if="openBook"
				:openBook="openBook"
				@clickClose="close()"
				@nextPage="showNextPage()"
				@prevPage="showPrevPage()"
				:name="name"
				:nameLong="nameLong"
				:chaptersLength="chaptersLength"
				:chapterText="chapterText"
				:chapter="chapter"
			)
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

import Header from "~/components/ui/Header";
import Bible from "~/components/Bible";
import Search from "~/components/ui/Search";
import ChapterBible from "~/components/ChapterBible";
import Device from "~/components/helpers/Device";


export default {
	props: ['books'],
	data() {
		return {
			openBook: false,
			chaptersLength: 1,
			chapterText: "",
			name: "",
			nameLong: "",
			chapter: 1,
			chapters:[]
		};
	},
	components: {
		Header,
		Bible,
		Search,
		ChapterBible,
		Device
	},
	methods: {
		async open({id, name, nameLong, chapters}) {
			this.bookId = id;
			this.name = name;
			this.nameLong = nameLong;
			this.chapters = chapters;
			this.chaptersLength = chapters.length - 1;
			await this.textShow(chapters[this.chapter].id)
			this.openBook = true;
		},
		close() {
			this.openBook = false;
		},
		async textShow (id) {
			const chapterResp = await this.$api.bible.chapter(id);
			const chapterHTML = chapterResp.data.data.content;
			this.chapterText = chapterHTML;
		},

		async showNextPage() {
			this.chapter += 1;
			await this.textShow(this.chapters[this.chapter].id);
		},

		async showPrevPage() {
			this.chapter -= 1;
			await this.textShow(this.chapters[this.chapter].id);
		},

		async showPageGo() {
			this
		}
	},
};
</script>

<style lang="scss" scoped>
.page {
	background: black;
	background-size: cover;
	width: 100%;
	position: relative;
	// margin-top: m(88);
}

.bible {
	position: relative;

	&_hidden {
		overflow: hidden;
	}
}

.chapter {
}

@include desc{
	.page {
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
