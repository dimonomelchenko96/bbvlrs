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
import Bible from "~/components/Bible";
import Search from "~/components/ui/Search";
import ChapterBible from "~/components/ChapterBible";
import Device from "~/components/helpers/Device";


export default {
	props: ['books', 'name', 'chapterText', 'nameLong', 'chaptersLength', 'chapters', 'chapter'],
	data() {
		return {
			openBook: false,
		};
	},
	components: {
		Bible,
		Search,
		ChapterBible,
		Device
	},
	methods: {
		async open({id, name, nameLong, chapters}) {
			this.openBook = true;
			this.$emit('open', {id, name, nameLong, chapters});
		},

		close() {
			this.openBook = false;
		},

		async showNextPage() {
			this.$emit('showNextPage');
		},

		async showPrevPage() {
			this.$emit('showPrevPage');
		},

		async showPageGo(page) {
			this.$emit('showPageGo', page);
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
