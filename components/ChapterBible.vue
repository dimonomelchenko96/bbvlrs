<template lang="pug">
.chapter
	button.chapter__button.button
		.button__text {{ content[0].name }}
		.button__arrow {{ arrow }}
	//- ul.button__list
	//- 	li.button__item(

	//- 	)
	.chapter__desc.text {{ content[0].desc }}
	ul.chapter__text
		li.text__item(
			v-for="block in content[0].pages[0]"
			:key="content[0].pages[0].id"
		)
			.text__id {{ content[0].pages[0].poem }}
			.text__content {{ content[0].pages[0].poemText }}
</template>

<script>
import arrow from "~/assets/svg/arrow.svg"

export default {
	name: 'chapterBible',
	data() {
		return {
			arrow,
			chapterChoose: 0,
			content: [
				{
					id: 1,
					name: "Genesis",
					desc: "The First Book of Moses, called Genesis",
					pages: [
						{
							pageId: 1,
							text: [
								{
									poem: 1.1,
									poemText: "In the beginning God created the heavens and the earth",
								},
														{
									poem: 1.2,
									poemText: "In the beginning God created the heavens and the earth",
								},
														{
									poem: 1.3,
									poemText: "And God said, Let there be light: and there was light.",
								},
														{
									poem: 1.4,
									poemText: "And God said, Let there be light: and there was light.",
								},
														{
									poem: 1.5,
									poemText: "And God said, Let there be light: and there was light.",
								}
							],
						},
						{
							pageId: 2,
							text: [
								{
									poem: 1.1,
									poemText: "In the beginning God created the heavens and the earth",
								},
														{
									poem: 1.2,
									poemText: "In the beginning God created the heavens and the earth",
								},
														{
									poem: 1.3,
									poemText: "And God said, Let there be light: and there was light.",
								},
														{
									poem: 1.4,
									poemText: "And God said, Let there be light: and there was light.",
								},
														{
									poem: 1.5,
									poemText: "And God said, Let there be light: and there was light.",
								}
							],
						},
					],
				},
				{
					id: 2,
					name: "Exodus",
				},
				{
					id: 3,
					name: "Numbers",
				},
				{
					id: 4,
					name: "Deuteronomy",
				},
				{
					id: 5,
					name: "Exodus",
				},
				{
					id: 6,
					name: "Numbers",
				},
				{
					id: 7,
					name: "Deuteronomy",
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.chapter {
	&__desc{

	}
}
</style>
