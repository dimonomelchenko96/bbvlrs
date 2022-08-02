<template lang="pug">
.chapter
	button.chapter__button.button(
		@click="openMenu"
	)
		.button__text {{ content[0].name}}
		.button__arrow(
			:class="{'button__arrow--open': isOpen}"
		)
			template
				include ../assets/svg/arrow.svg
	Slide-up-down(
		:active="isOpen"
		:duration="500"
	)
		ul.button__list
			li.button__item.button__text(
				v-for="block in content"
				v-if="block.name !== content[chapterChoose].name"
			)
				a.button__link(
					href="/"
				) {{ block.name }}

	.chapter__desc.text.text_green {{ content[0].desc }}

	ul.chapter__content
		li.chapter___text(
			v-for="text in content[0].pages[0].text"
			:key="text.poem"
		)
			.text.text--green.text_green.text_width {{ text.poem }}
			.text {{ text.poemText }}
</template>

<script>
import arrow from "~/assets/svg/arrow.svg";
import SlideUpDown from 'vue-slide-up-down';

export default {
	name: 'chapterBible',
	data() {
		return {
			arrow,
			chapterChoose: 0,
			isOpen: false,
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
	components: {
		SlideUpDown,
	},
	methods: {
		openMenu() {
		this.isOpen = !this.isOpen;
		console.log(this.content[0].pages[0]);
	}
  }
}
</script>

<style lang="scss" scoped>
.chapter {
	padding: m(30);

	&__desc{
		margin: m(32) 0;
		width: 75%;
	}

	&__content {
		display: grid;
		gap: 32px;

		&::before {
			content: "";
			height: 1px;
			display: block;
			background-color: #fff;
			opacity: 0.1;
			width: 100%;
		}
	}
}

.button {
	box-sizing: border-box;
	background-color: rgba(255, 255, 255, 0.05);
	width: 100%;
	border: 1px solid rgba(255, 255, 255, 0.05);
	border-radius: 4px;

	padding: 8px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	&__list {
		background-color: rgba(255, 255, 255, 0.05);
		border-radius: 4px;
		padding: 8px;

		display: grid;
		gap: 8px;
	}

	&__item {
		display: flex;
		flex-direction: column;

		&::after {
			content: "";
			height: 1px;
			display: block;
			background-color: #fff;
			opacity: 0.1;
			width: 100%;

			margin-top: 8px;
		}
	}

	&__link {
		width: 100%;
	}

	&__text {
		font-family: "BBLVRS";
		font-size: m(32);
		line-height: m(32);
		font-weight: 400;
		color: #fff;
	}

	&__arrow {
		transform: rotate(-90deg);
		width: 40px;
		height: 40px;

		display: flex;
		justify-content: center;
		align-items: center;

		&--open {
			transform: rotate(90deg);
		}
	}
}

.text {
	font-family: "Montserrat";
	color:#fff;
	font-size: m(16);
	line-height: m(26);
	font-weight: 400;

	&_green {
		color: #90ee90;
		font-weight: 300;
	}

	&_width {
		font-weight: 700;
	}
}
</style>
