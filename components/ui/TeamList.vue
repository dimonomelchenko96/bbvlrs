<template lang="pug">
CustomScroller.team-list
	ul.team-list__list
		li.team-list__item(
			v-for="(member, ind) in teamList"
			@click="selectMember(ind)"
		) {{ member.position_short }}
</template>

<script>
import CustomScroller from "~/components/helpers/CustomScroller";

export default {
	props: ['teamList'],

	name: "search",

	data() {
		return{

		}
	},

	methods: {
		selectMember(ind) {
			this.$emit('selectMember', ind);
		}
	},

	components: {
		CustomScroller
	}
}
</script>

<style lang="scss" scoped>
.team-list {
	display: none;
}

@include desc {
	.team-list {
		display: block;
		height: calc(var(--vh) * 70);
		width: 100%;

		&__list {
			height: 100%;
		}

		&__item {
			cursor: pointer;

			font-family: "BBLVRS", sans-serif;
			font-size: d(32);
			line-height: d(32);
			font-weight: 400;


			color: #fff;

			&:hover {
				color: #90ED91;
			}

			&::after {
				content: '';
				display: block;
				height: 1px;
				background-color: #fff;
				opacity: 0.1;
				width: 100%;
				margin: d(30) 0;
			}
		}
	}
}
</style>

