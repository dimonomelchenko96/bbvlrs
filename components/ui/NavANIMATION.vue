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
						)
						a(:href="nav.to" @click='closePopup') {{ nav.name }}
			template(#desc)
				ul.nav__list
					li.nav__item.nav__item_showroom
						a.nav__link(href="#showroom")
							p sh#[span.span-animation o]wr#[span.span-animation o]#[span.span-animation o]m
					li.nav__item
						a.nav__link(href="#team-member")
							p t#[span.span-animation e]#[span.span-animation a]m
					li.nav__item
						a.nav__link(href="#roadmap")
							p r#[span.span-animation o]#[span.span-animation a]dm#[span.span-animation a]p
					li.nav__item
						a.nav__link(href="#source")
							p s#[span.span-animation o]#[span.span-animation u]rc#[span.span-animation e]
					li.nav__item.nav__item_collaboration
						a.nav__link(href="#collaboration")
							p c#[span.span-animation o]ll#[span.span-animation a]b#[span.span-animation o]r#[span.span-animation a]t#[span.span-animation.small-letter i]#[span.span-animation o]n
					li.nav__item
						a.nav__link(href="#faq")
							p FAQ

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
	color: #ffffff;
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
		}
	}
}

@include desc {
	.nav {
		margin-bottom: 0;

		&_white {
			color: #000;
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
</style>
