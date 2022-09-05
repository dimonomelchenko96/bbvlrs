<template lang="pug">
.team-list
	.team-list__img

	ul.team-list__list
		CustomScroller.team-list__scroll
			li.team-list__item(

				v-for="(member, ind) in teamList"
				@click="selectMember(ind)"
			)
				.team-list__cross(
					v-if="id === ind"
				)
					include ../../assets/svg/x-lilac.svg

				.team-list__title(
					:class="[id === ind && 'team-list__title--lilac']"
				) {{ member.position_short }}
</template>

<script>
import CustomScroller from "~/components/helpers/CustomScroller";

export default {
	props: ["teamList", "id"],

	name: "search",

	data() {
		return {};
	},

	methods: {
		selectMember(ind) {
			this.$emit("selectMember", ind);
		},
	},

	components: {
		CustomScroller,
	},
};
</script>

<style lang="scss" scoped>
.team-list {
	display: none;
}

@include desc {
	.team-list {
		display: flex;
		height: calc(var(--vh) * 70);
		width: 100%;

		::v-deep {
			.ps__thumb-y {
				background-color: $lilac;
			}
		}
		&__scroll {
			padding-right: d(20);
		}

		&__img {
			display: block;
			width: d(2);
			background-color: $lilac;
			opacity: 0.4;
			height: 100%;
			transform: translateX(d(27));
		}

		&__list {
			flex: 1;
			height: 100%;
		}

		&__item {
			display: flex;
			padding-left: d(86);

			&:first-child {
				padding-top: d(15);
			}
		}

		&__title {
			flex: 1;
			cursor: pointer;

			font-family: "BBLVRS", sans-serif;
			font-size: d(32);
			line-height: d(32);
			font-weight: 400;
			color: $black;

			&:hover {
				color: $lilac;
			}

			&::after {
				content: "";
				display: block;
				height: 1px;
				background-color: $black;
				opacity: 0.1;
				width: 100%;
				margin: d(30) 0;
			}

			&--lilac {
				color: $lilac;
				font-weight: 700;
			}
		}

		&__cross {
			position: absolute;
			left: 0;
			width: d(56);
			height: d(86);
			display: flex;
			align-items: center;
			background-color: #f5f5f5;
			transform: translateY(d(-15));

			svg {
				width: 100%;
				height: d(56);
			}
		}
	}
}
</style>
