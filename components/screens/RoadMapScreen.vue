<template lang="pug">
.roadmap
	h2.roadmap__headline Roadmap
	CardRoadMap(
		v-if="roadmap"
		v-for="(card, ind) in roadmapData.card"
		:key="ind"
		:roadmapData="card.content"
	)
	.roadmap__button(
		v-if="!roadmap"
		@click="handleShowCards"
	)
		include ../../assets/svg/RoadMap/openRoadMap.svg
	.roadmap__button.close-roadmap(
		v-else
		@click="handleShowCards"
	)
		include ../../assets/svg/RoadMap/closeRoadMap.svg

</template>

<script>
import CardRoadMap from "~/components/ui/CardRoadMap.vue";
import { mapState } from "vuex";

export default {
	data() {
		return {};
	},
	props: ["roadmapData"],
	computed: {
		...mapState({
			roadmap: (state) => state.roadmap,
		}),
	},
	components: {
		CardRoadMap,
	},
	methods: {
		handleShowCards() {
			this.$store.commit("roadMapToggle");
		},
	},
};
</script>

<style lang="scss" scoped>
.roadmap {
	position: relative;
	padding: m(88) m(32) m(72);

	&__headline {
		font-family: "BBLVRS";
		font-style: normal;
		font-weight: 400;
		font-size: m(32);
		line-height: m(32);
		text-align: left;
		color: $white;
		margin-bottom: m(72);
	}

	&__button {
		width: m(40);
		height: m(40);
		position: absolute;
		bottom: m(16);
		left: m(16);
		background: rgba(255, 255, 255, 0.15);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;

		svg {
			width: m(13);
			height: m(13);
		}

		&.close-roadmap {
			background: $white;
		}
	}
}

@include desc {
	.roadmap {
		padding: d(152) 0 d(121);

		&__headline {
			font-size: d(70);
			line-height: d(70);
			margin-left: d(70);
			margin-bottom: d(40);
		}

		&__button {
			width: d(90);
			height: d(90);
			bottom: d(60);
			left: d(60);

			svg {
				width: d(30);
				height: d(30);
			}
		}
	}
}
</style>
