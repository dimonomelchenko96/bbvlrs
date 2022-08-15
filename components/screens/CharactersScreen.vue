<template lang="pug">
div#showroom
	Character(
		:items="characters"
	)

</template>

<script>
import Character from "~/components/Character/Character";


export default {
	components: {
		Character,
	},

	methods: {

	},
	props: ["characters"],
	data() {
		return {

		};
	},
};
</script>

<style lang="scss" scoped>
.popup-mob {
	opacity: 0;
	visibility: hidden;
	height: calc(var(--vh) * 100);
	position: fixed;
	top: -100%;
	left: 0;
	right: 0;
	z-index: 103;
	transition: all 0.3s ease;

	&.active {
		opacity: 1;
		visibility: visible;
		top: 0;
	}
}

@include desc {
	#showroom {
		position: relative;
		overflow: hidden;
	}
	.popup-mob {
		position: absolute;
		top: 0;
		right: -100%;
		width: d(413);
		left: unset;

		&.active {
			right: 0;
		}
	}
}
</style>
