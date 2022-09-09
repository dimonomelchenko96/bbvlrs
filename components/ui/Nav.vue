<template lang="pug">
nav.nav(
	:class="[theme === 'white' && 'nav_white' ]"
)
		Device
			template(#mob)
				ul.nav__list
					li.nav__item(
						v-for="nav in navs"
						:key="nav.name"
						@click='closePopup'
					)
						nuxt-link(:to="nav.to") {{ nav.name }}
			template(#desc)
				ul.nav__list
					li.nav__item(
						v-for="nav in navs"
						:key="nav.name"
						:class="[nav.name === 'showroom' && 'nav__item_showroom', nav.name === 'collaboration' && 'nav__item_collaboration']"
					)
						nuxt-link.nav__link(
							:to="nav.to"

						)
							p(
								:class="[theme === 'white' && 'nav__link_white', nav.name.toLowerCase() === $route.name && 'active']"
								v-html="animationNavList(nav.name)"
							)
</template>

<script>
import Device from "~/components/helpers/Device.vue";
import { mapState } from "vuex";

export default {
	computed: {
		...mapState({
			theme: (state) => state.theme,
		}),
	},
	data() {
		return {
			// navs: [
			// 	{ nameDesc: "shwrm", name: "showroom", to: "#showroom" },
			// 	{ nameDesc: "tm", name: "team", to: "#team-member" },
			// 	{ nameDesc: "rdmp", name: "roadmap", to: "#roadmap" },
			// 	{ nameDesc: "src", name: "source", to: "#source" },
			// 	{
			// 		nameDesc: "cllbrtn",
			// 		name: "collaboration",
			// 		to: "#collaboration",
			// 	},
			// 	{ nameDesc: "FAQ", name: "FAQ", to: "#faq" },
			// ],
			navs: [
				{ nameDesc: "shwrm", name: "showroom", to: "/showroom" },
				{ nameDesc: "tm", name: "team", to: "/team" },
				{ nameDesc: "rdmp", name: "roadmap", to: "/roadmap" },
				{ nameDesc: "src", name: "source", to: "/source" },
				{
					nameDesc: "cllbrtn",
					name: "collaboration",
					to: "/collaboration",
				},
				{ nameDesc: "FAQ", name: "FAQ", to: "/faq" },
			],
		};
	},
	methods: {
		closePopup() {
			this.$emit("closePopup");
		},

		animationNavList(str) {
			const listVowels = "aeiouyAEIOUY";
			let arr = [];

			for (let i = 0; i < str.length; i++) {
				if (str === "FAQ") arr.push(str[i]);
				else {
					if (listVowels.indexOf(str[i]) === -1) arr.push(str[i]);
					else {
						if (str[i] === "i" || str[i] === "I")
							arr.push(
								`<span class="span-animation small-letter">${str[i]}</span>`
							);
						else
							arr.push(
								`<span class="span-animation">${str[i]}</span>`
							);
					}
				}
			}

			return arr.join("");
		},
	},
	mounted() {
		console.log(this.$route);
	},
	components: { Device },
};
</script>

<style lang="scss" scoped>
.nav {
	color: $white;
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
			cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;
		}
	}
}

@include desc {
	a.nuxt-link-active {
		color: $green;
	}

	.nav {
		margin-bottom: 0;

		&_white {
			color: $black;
		}

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
				width: d(170);
			}
			&:last-child {
				margin-right: d(140);
			}

			.nav__link {
				font-family: "Montserrat";
				font-style: normal;
				font-weight: 400;
				font-size: d(24);

				.active {
					color: $green;
					::v-deep {
						.span-animation {
							display: inline-block;
							transform: scaleX(1);
							width: d(15);
							&.small-letter {
								width: d(8);
							}
						}
					}
				}
				&_white.active {
					color: $lilac;
				}

				::v-deep {
					.span-animation {
						display: inline-block;
						transform: scaleX(0);
						width: 0;
						transition: transform linear 400ms, width linear 300ms;
					}
					&:hover .span-animation {
						width: d(15);
						transform: scale(1);
					}
					&:hover .small-letter {
						width: d(8);
						transform: scale(1);
					}
				}
			}
		}
	}
}
</style>
