<template lang="pug">
.card(
	v-for="card in cards"
)
	template(v-if="card.img")
		img.card__img(:src="card.img")
	template(v-else-if="card.title")
		.card__title {{ title }}
</template>

<script>
export default {
	data() {
		return {
			cards: [
				{
					id: 1,
					img: 'img',
					title: 'title',
					desc: 'desc'
				},
				{
					id: 2,
					video: 'video',
					title: 'title',
					desc: 'desc'
				},
			]
		}
	}
}
</script>
