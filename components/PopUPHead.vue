<template lang="pug">
.container
	.container-img
		img.container-img__img(
			:src="img"
			alt="head"
		 )
	.container-description
		p.container-description__text--name {{name}}
		p.container-description__text--job-title {{jobTitle}}
		.container-description__social
			a.container-description__social--icon(
			:href="socialIconLink"
			target="_blank"
			) Icon
			a.container-description__social--icon(
			:href="socialIconLink"
			target="_blank"
			) Icon
			a.container-description__social--icon(
			:href="socialIconLink"
			target="_blank"
			)
		p.container-description__text-description {{description}}
		p.container-description__text-position {{position}}

</template>

<script>
import head from '~/assets/img/head.png'
export default {
	data() {
		return {
			img: head,
			jobTitle: "Creative Director, Brand specialist",
			name: "Lun",
			description: "Believes in Randomness The phenomenon which makes disorder out of boring order.",
			position: "Founder-Co-Founder-BBLVRS",
			socialIconLink: "!#"
		}
	}
};
</script>

<style lang="scss" scoped>
.container{
	background-image: url(../assets/img/Background.png);
	padding: 32px;
	&-img{
		margin: 0 0 m(16) 0;
		&__img{
			display: block;
			margin: 0 auto;
		}
	}
	&-description{
		&__text--name{
			font-style: normal;
			font-weight: 400;
			font-size: m(45);
			/* line-height: m(61); */
			color: #fff;
			margin: 0 0 m(16) 0;
		}
		&__text--job-title{
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: m(16);
			/* line-height: m(26); */
			color: #90EE90;
			margin: 0 0 m(16) 0;
		}

		&__social{
			&--icon{
				color: #fff;
			}
		}
		&__text-description{
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: m(16);
			/* line-height: m(26); */
			color: #fff;
			margin: 0 0 m(16) 0;
			}
		&__text-position{
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: m(16);
			line-height: m(26);
			color: #fff;
			margin: 0 0 m(16) 0;
		}
	}
}
</style>

