<template lang="pug">
Device
	template(#mob)
		.card(
			v-for="card in cards"
			:class="{'right-text': card.imgMobile || card.videoMobile}"
		)
			template(v-if="card.imgMobile")
				.card__img
					img(:src="card.imgMobile")
			template(v-if="card.videoMobile")
				.card__img
					img(:src="card.videoMobile")
			h3.card__title {{ card.title }}
			p.card__text(
				:class="{'left-text': !card.imgMobile && !card.videoMobile}"
			) {{ card.text }}
	template(#desc)
		.card(
			v-for="card in cards"
			:class="{'right-text': card.imgMobile || card.videoMobile}"
		)
			template(v-if="card.imgDesc")
				.card__img
					img(:src="card.imgDesc")
			template(v-if="card.videoMobile")
				.card__img
					img(:src="card.videoDesc")
			h3.card__title {{ card.title }}
			p.card__text(
				:class="{'left-text': !card.imgMobile && !card.videoMobile}"
			) {{ card.text }}

</template>

<script>
import videoImgMobile from "~/assets/img/roadmap/videoMobile.png";
import photoImgMobile from "~/assets/img/roadmap/photoMobile.png";
import photoImgDesc from "~/assets/img/roadmap/photoDesc.png";
import videoImgDesc from "~/assets/img/roadmap/videoDesc.png";
import Device from "~/components/helpers/Device";
export default {
	data() {
		return {
			cards: [
				{
					id: 1,
					imgDesc: photoImgDesc,
					imgMobile: photoImgMobile,
					title: "Open Sea NFT Awards",
					text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
				},
				{
					id: 2,
					videoDesc: videoImgDesc,
					videoMobile: videoImgMobile,
					title: "Buy Domain",
					text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
				},
				{
					id: 3,
					title: "Minting David",
					text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
				},
			],
		};
	},
	components: {
		Device,
	},
};
</script>

<style lang="scss" scoped>
.card {
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	color: #ffffff;
	width: m(244);
	/* display: flex; */
	/* justify-content: right; */
	text-align: right;
	/* flex-direction: column; */
	&.right-text {
		text-align: left;
	}

	&__img {
		margin-bottom: m(16);

		img {
			width: m(244);
			height: m(150);
			display: block;
		}
	}

	&__title {
		font-size: m(20);
		margin-bottom: m(16);
	}

	&__text {
		line-height: m(16);
		font-size: m(14);
	}
}
@include desc {
	.card {
		width: d(408);

		&__img {
			margin-bottom: d(16);

			img {
				width: d(408);
				height: d(253);
				display: block;
			}
		}

		&__title {
			font-size: d(20);
			margin-bottom: d(16);
		}

		&__text {
			width: d(318);
			line-height: d(16);
			font-size: d(14);

			&.left-text {
				margin-left: auto;
			}
		}
	}
}
</style>
