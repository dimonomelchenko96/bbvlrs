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
					include ../assets/svg/PopUPHead/globe.svg
				template(v-if="soc.icon === 'graduate'")
					include ../assets/svg/PopUPHead/graduate.svg
				template(v-if="soc.icon === 'linkedin'")
					include ../assets/svg/PopUPHead/linkedin.svg
		p.container-description__text {{description}}
		p.container-description__text {{position}}
		.container-description__partners
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
	background-image: url(../assets/img/PopUPHead/Background.png);
	padding: 32px;

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
				img {
					margin: 0 m(8) m(8);
					opacity: 0.4;
				}
			}
		}
	}
}
</style>
