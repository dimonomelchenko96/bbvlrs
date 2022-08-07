<template lang="pug">
.page
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
	Search.page__search
</template>

<script>
import Bible from "~/components/Bible";
import Search from "~/components/ui/Search";
import ChapterBible from "~/components/ChapterBible";


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
		Bible,
		Search,
		ChapterBible
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
		&__search {
			display: none;
		}
		// margin-top: d(112);
	}
	.search {

	}
}
</style>
