<template lang="pug">
nav.nav
	ul.nav__list
		li.nav__item(
				v-for="nav in navs"
				:key="nav.name"
			)
			Device
				template(#mob)
					a(:href="nav.to" @click='closePopup') {{ nav.name }}
				template(#desc)
					a(:href="nav.to") {{ nav.nameDesc }}
</template>

<script>
import Device from "~/components/helpers/Device.vue";
export default {
	data() {
		return {
			navs: [
				{ nameDesc: "shwrm", name: "showroom", to: "#showroom" },
				{ nameDesc: "tm", name: "team", to: "#team-member" },
				{ nameDesc: "rdmp", name: "roadmap", to: "#roadmap" },
				{ nameDesc: "src", name: "source", to: "#source" },
				{
					nameDesc: "cllbrtn",
					name: "collaboration",
					to: "#collaboration",
				},
				{ nameDesc: "FAQ", name: "FAQ", to: "#faq" },
			],
		};
	},
	methods: {
		closePopup() {
			this.$emit("closePopup");
		},
	},
	components: { Device },
};
</script>

<style lang="scss" scoped>
.nav {
	&__list {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	&__item {
		margin-bottom: m(32);

		a {
			font-family: "Montserrat";
			font-style: normal;
			font-weight: 400;
			font-size: m(24);
			color: #fff;
		}
	}
}

@include desc {
	.nav {
		margin-bottom: 0;
		color: #ffffff;

		&__list {
			flex-direction: revert;
			align-items: center;
			height: 100%;
		}

		&__item {
			margin-bottom: 0;
			margin-right: d(70);

			&:last-child {
				margin-right: d(140);
			}
			a {
				font-size: d(16);
			}
		}
	}
}
</style>
