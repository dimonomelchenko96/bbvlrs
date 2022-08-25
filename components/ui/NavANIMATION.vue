<template lang="pug">
nav.nav
		Device
			template(#mob)
				ul.nav__list
					li.nav__item(
						v-for="nav in navs"
						:key="nav.name"
						)
						a(:href="nav.to" @click='closePopup') {{ nav.name }}
			template(#desc)
				ul.nav__list
					li.nav__item.nav__item_showroom
						a.abbr(href="#showroom")
							span s
							span ho
							span w
							span roo
							span m
					li.nav__item
						a.abbr(href="#team-member")
							span tea
							span m
					li.nav__item
						a.abbr(href="#roadmap")
							span roa
							span d
							span ma
							span p
					li.nav__item
						a.abbr(href="#source")
							span sou
							span r
							span ce
					li.nav__item.nav__item_collaboration
						a.abbr(href="#collaboration")
							span co
							span l
							span la
							span bo
							span ra
							span tio
							span n
					li.nav__item
						a.abbr(href="#faq")
							span F
							span A
							span Q
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
			height: 100%;
		}

		&__item {
			margin: 0;
			width: d(120);
			&_showroom {
				width: d(140);
			}
			&_collaboration {
				width: d(165);
			}
			&:last-child {
				margin-right: d(140);
			}

			.abbr {
				font-family: "Montserrat";
				font-style: normal;
				font-weight: 400;
				font-size: d(24);
				color: #fff;

				padding: 5px;
				font: normal 0px/1em sans-serif;
			}
			.abbr:hover {
				font: normal d(24) sans-serif;
			}

			.abbr span {
				display: inline-block;
				transition: 0.5s ease-in-out;
			}
			.abbr span::first-letter {
				color: #fff;
				font: normal d(24) sans-serif;
			}
		}
	}
}
</style>
