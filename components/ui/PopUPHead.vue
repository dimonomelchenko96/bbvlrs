<template lang="pug">
.container
	img.container__img(
		:src="img"
		alt="head"
	)
	.container-description
		p.container-description__text.container-description__text--name {{name}}
		p.container-description__text.container-description__text--job-title {{jobTitle}}
		.container-description__social
			a.social--link(
				v-for="(soc, index) in socials"
				:key="index"
				:href="soc.link"
				target="_blank"
			)
				template(v-if="soc.icon === 'globe'")
					include ../../assets/svg/PopUPHead/globe.svg
				template(v-if="soc.icon === 'graduate'")
					include ../../assets/svg/PopUPHead/graduate.svg
				template(v-if="soc.icon === 'linkedin'")
					include ../../assets/svg/PopUPHead/linkedin.svg
		p.container-description__text.description {{description}}
		p.container-description__text.position {{position}}
		.container-description__partners
			div
				p.container-description__text.container-description__partners-worked Worked With:
				.container-description__partners-worked-img
					a(
						v-for="(partner, index) in partners"
						:key="index"
						:href="partner.link"
						target="_blank"
					)
						img(
								:src="partner.img"
							)
			div
				p.container-description__text.container-description__partners-worked 10+ Awards+
				.container-description__partners-worked-img
					a(
						v-for="(partner, index) in partners"
						:key="index"
						:href="partner.link"
						target="_blank"
					)
						img(
								:src="partner.img"
							)

</template>

<script>
import head from "~/assets/img/PopUPHead/head.png";
import group53 from "~/assets/img/PopUPHead/Group53.png";
import group51 from "~/assets/img/PopUPHead/Group51.png";
import group49 from "~/assets/img/PopUPHead/Group49.png";
import group47 from "~/assets/img/PopUPHead/Group47.png";
import group45 from "~/assets/img/PopUPHead/Group45.png";
import group43 from "~/assets/img/PopUPHead/Group43.png";
export default {
	data() {
		return {
			img: head,
			jobTitle: "Creative Director, Brand specialist",
			name: "Lun",
			description:
				"Believes in Randomness The phenomenon which makes disorder out of boring order.",
			position: "Founder-Co-Founder-BBLVRS",
			socialIconLink: "!#",
			socials: [
				{
					link: "www.example.com",
					icon: "globe",
				},
				{
					link: "www.example.com",
					icon: "graduate",
				},
				{
					link: "www.example.com",
					icon: "linkedin",
				},
			],
			partners: [
				{
					img: group43,
					link: "!#",
				},
				{
					img: group45,
					link: "!#",
				},
				{
					img: group47,
					link: "!#",
				},
				{
					img: group49,
					link: "!#",
				},
				{
					img: group51,
					link: "!#",
				},
				{
					img: group53,
					link: "!#",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.container {
	background-image: url(../../assets/img/PopUPHead/Background.png);
	padding: m(32);

	&__img {
		display: block;
		margin: 0 auto m(16);
	}

	&-description {
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
		}

		&__social {
			margin: 0 0 m(24) 0;
			.social--link {
				margin: 0 m(16) 0 0;
			}
		}

		&__partners-worked {
			font-weight: 300;
			color: #90ee90;

			&-img {
				a {
					display: inline-block;
					margin: 0 m(8) m(8);
					opacity: 0.4;
				}
			}
		}
	}
}
@include desc {
	.container {
		padding: d(100);
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;

		&__img {
			display: block;
			width: d(600);
			height: auto;
			margin: 0;
		}

		&-description {
			display: flex;
			flex-direction: column;

			&__text {
				font-size: d(16);
				margin: 0 0 d(6) 0;

				&.description {
					max-width: d(340);
					opacity: 0.4;
					order: 3;
					margin-bottom: d(66);
				}

				&.position {
					order: 5;
					margin-bottom: d(50);
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

			&__social {
				order: 6;
				margin: 0;

				.social--link {
					margin: 0 d(24) 0 0;
				}
			}
			&__partners {
				order: 4;
				display: flex;
				margin-bottom: d(66);

				&-worked {
					&-img {
						max-width: d(200);
						margin-right: d(100);

						a {
							margin: 0 d(8) d(8);

							img {
								max-width: d(200);
							}
						}
					}
				}
			}
		}
	}
}
</style>
