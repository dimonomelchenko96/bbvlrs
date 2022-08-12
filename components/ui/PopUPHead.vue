<template lang="pug">
CustomScroller.member
	.member__container
		img.member__img(
			:src="img"
			alt="head"
		)
		.member__description
			.member__text.member__text--name {{ members[id].name}}
			.member__text.member__text--job-title {{ members[id].position_full}}
			.social
				a.social__link(
					v-for="(soc, index) in members[id].socials"
					:key="index"
					:href="soc.social_link"
					target="_blank"
				)
					template
						div(
							v-html="require(`~/assets/svg/socials/${soc.slug}.svg?raw`)"
						)
			.member__text.member__text--description {{ members[id].about }}
			.member__positions(
				v-for="position in members[id].positions_all"
			)
				.member__text.member__text--position {{ position.role }} -&nbsp
				a.member__text.member__text--position.member__text--link(
					:href="position.corporation_link"
					target="_blank"
				) {{ position.corporation }}
			.partners
				div(
					v-for="(history, ind) in members[id].history"
				)
					.member__text.member__text--job-title {{ history.title }}:
					.partners__img
						a.partners__link(
							v-for="(partner, index) in history.links"
							:key="index"
							:href="partner.link"
							target="_blank"
						)
							img(
									:src="partner.image.sizes.thumbnail"
								)
</template>

<script>
import CustomScroller from "~/components/helpers/CustomScroller";
import head from "~/assets/img/PopUPHead/head.png";

export default {
	props: ['members', 'id'],
	data() {
		return {
			img: head,
		}
	},
	components: {
		CustomScroller,
	}
}
</script>

<style lang="scss" scoped>
.member {
	height: calc(var(--vh) * 80);

	&__container {
		// padding: m(32);
	}

	&__img {
		display: block;
		margin: 0 auto m(16);
	}

	&__description {

	}

	&__positions {
		display: flex;
		align-items: center;
	}

	&__text {
		font-style: normal;
		color: #fff;
		font-family: "Montserrat";
		font-weight: 400;
		font-size: m(16);
		margin: 0 0 m(16) 0;

		&--name {
			font-family: "BBLVRS";
			font-size: m(45);
		}

		&--job-title {
			font-weight: 300;
			color: #90ee90;
		}

		&--link {
			&:hover {
				color: #90ee90;
				text-decoration: underline;
			}
		}
	}
}

.partners {
	order: 4;
	display: flex;
	margin-bottom: m(66);

	&__img {
		display: flex;
		flex-wrap: wrap;
	}

	&__link {
		margin: 0 m(8) m(8) 0;
		opacity: 0.4;
		max-height: m(36);
		max-width: m(195);

		img{
			height: 100%;
			width: 100%;
		}
	}
}
.social {
	margin: 0 0 m(24) 0;

	&__link {
		margin: 0 m(16) 0 0;
	}
}
.container {
	// background-image: url(../../assets/img/PopUPHead/Background.png);
	// padding: m(32);

	// &__img {
	// 	display: block;
	// 	margin: 0 auto m(16);
	// }

	&-description {
		// &__text {
		// 	font-style: normal;
		// 	color: #fff;
		// 	font-family: "Montserrat";
		// 	font-weight: 400;
		// 	font-size: m(16);
		// 	margin: 0 0 m(16) 0;

		// 	&--name {
		// 		font-family: "BBLVRS";
		// 		font-size: m(45);
		// 	}

		// 	&--job-title {
		// 		font-weight: 300;
		// 		color: #90ee90;
		// 	}
		// }

		// &__social {
		// 	margin: 0 0 m(24) 0;
		// 	.social--link {
		// 		margin: 0 m(16) 0 0;
		// 	}
		// }

		// &__partners-worked {
		// 	font-weight: 300;
		// 	color: #90ee90;

		// 	&-img {
		// 		a {
		// 			display: inline-block;
		// 			margin: 0 m(8) m(8);
		// 			opacity: 0.4;
		// 		}
		// 	}
		// }
	}
}

@include desc {
	.member {
		&__container {
			// padding: d(100);
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}

		&__img {
			display: block;
			width: d(600);
			height: auto;
			margin: 0;
		}

		&__description {
			display: flex;
			flex-direction: column;
		}

		&__text {
			font-size: d(16);
			margin: 0 0 d(6) 0;

			&--description {
				max-width: d(340);
				opacity: 0.4;
				order: 3;
				margin-bottom: d(66);
			}

			&--name {
				font-size: d(70);
				order: 1;
			}

			&--job-title {
				font-size: d(20);
				margin-bottom: d(20);
				order: 2;
			}
		}

		&__positions {
			order: 5;
			margin-bottom: d(50);
		}
	}

	.partners {
		order: 4;
		display: flex;
		margin-bottom: d(66);

		&__img {
			display: flex;
			flex-wrap: wrap;
		}

		&__link {
			margin: 0 d(8) d(8) 0;
			opacity: 0.4;
			max-height: d(36);
			max-width: d(195);

			img{
				height: 100%;
				width: 100%;
			}
		}
	}
	.social {
		order: 6;
		margin: 0;

		&--link {
			margin: 0 d(24) 0 0;
		}
	}
	.container {
		// padding: d(100);
		// display: flex;
		// flex-direction: row-reverse;
		// justify-content: space-between;

		// &__img {
		// 	display: block;
		// 	width: d(600);
		// 	height: auto;
		// 	margin: 0;
		// }

		&-description {
			// display: flex;
			// flex-direction: column;

			// &__text {
			// 	font-size: d(16);
			// 	margin: 0 0 d(6) 0;

			// 	&.description {
			// 		max-width: d(340);
			// 		opacity: 0.4;
			// 		order: 3;
			// 		margin-bottom: d(66);
			// 	}

			// 	&.position {
			// 		order: 5;
			// 		margin-bottom: d(50);
			// 	}

			// 	&--name {
			// 		font-size: d(70);
			// 		order: 1;
			// 	}

			// 	&--job-title {
			// 		font-size: d(20);
			// 		margin-bottom: d(20);
			// 		order: 2;
			// 	}
			// }

			// &__social {
			// 	order: 6;
			// 	margin: 0;

			// 	.social--link {
			// 		margin: 0 d(24) 0 0;
			// 	}
			// }
			// &__partners {
			// 	order: 4;
			// 	display: flex;
			// 	margin-bottom: d(66);

			// 	&-worked {
			// 		&-img {
			// 			max-width: d(200);
			// 			margin-right: d(100);

			// 			a {
			// 				margin: 0 d(8) d(8);

			// 				img {
			// 					max-width: d(200);
			// 				}
			// 			}
			// 		}
			// 	}
			// }
		}
	}
}
</style>
