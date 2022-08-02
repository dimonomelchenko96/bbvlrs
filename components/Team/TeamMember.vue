<template lang="pug">
	a.team__item(:href='elem.link' @click.prevent='openContent')
		img.team__item-img(:src='elem.img')
		.team__item-title {{elem.name}}
		.team__item-position {{elem.position}}
		.team__popup(v-if='flag')
			.team__popup-close
				Close
			h3.team__popup-title LEVAN MUSKHELISHVILI



</template>


<script>

import Close from '~/components/Team/Close'

export default {
	props: ['elem'],
	data() {
		return{
			flag: false
		}
	},
	methods: {
		openContent() {
			this.flag = !this.flag
			console.log(this.flag)
		}
	},
	components: {
		Close
	}
}
</script>

<style lang="scss" scoped>
.team{
	&__item {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: m(10);
		&:not(:last-child) {
			margin-bottom: m(20);
		}
		&::before , &::after {
			content: '';
			position: absolute;
			background: url(../../assets/svg/arrow-green.svg);
			width: 9px;
			height: 8px;
		}
		&::before {
			top: 0;
			left: 0;
		}
		&::after {
			bottom: 0;
			right: 0;
			transform: rotate(180deg);
		}
		&-img {
			max-width: m(170);
		}
		&-title {
			font-family: 'BBLVRS';
			font-style: normal;
			font-weight: 400;
			font-size: m(45);
			line-height: m(45);
			color: $white;
		}
		&-position {
			margin-top: 5px;
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: m(17);
			line-height: m(21);
			color: $white;
		}
	}
}

@include desc {
	.team {
		&__item {
			padding:d(5) 0 d(40);
			margin: 0;
			&-title {
				font-size: d(45);
				line-height: d(45);
			}
			&-position {
				margin-top: d(5);
				font-size: d(17);
				line-height: d(21);
			}
			&:not(:last-child) {
				margin-bottom: 0;
			}
			&::before {
				top: 0;
				left: 0;
			}
			&::after {
				bottom: 0;
				right: 0;
				transform: rotate(180deg);
			}
			&::before , &::after {
				opacity: 0;
				visibility: hidden;
				transition: all .4s ease;
			}
			&-img {
				max-width: d(322);
			}
		}
		&__popup {
			position: absolute;
			background: #141414;
			top: 0;
			height: 100%;
			left: d(-55);
			right: d(-55);
			padding: d(60);
			&-close {
				position: absolute;
				top: d(35);
				right: d(35);
			}
			&-title {
				color: $green;
			}
		}
	}
}

</style>
