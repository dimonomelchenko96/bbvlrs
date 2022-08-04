<template lang="pug">
.team__item(:href="elem.link")
	.team__block(@click.stop="contentShow")
		img.team__item-img(:src="elem.img")
		.team__item-title {{elem.name}}
		.team__item-position {{elem.position}}
	.team__popup(:class="[showPopup !== null && showPopup === elem.id ? 'active' : null]")
		.team__popup-close(@click='contentHide')
			Close
		.team__popup-content
			h3.team__popup-title LEVAN {{elem.name}}
			p.team__popup-text.team__popup-descr {{elem.description}}
			p.team__popup-text.team__popup-position {{elem.position}}
			.team__social
				a.team__social-link(
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
		a.team__popup-button Show details

</template>


<script>

import Close from '~/components/Team/Close'

export default {
	props: ['elem','socials','showPopup'],
	data() {
		return{

		}
	},
	methods: {
		contentShow() {
			this.$emit('popup', this.elem.id);
		},
		contentHide() {
			this.$emit('popup', null);
		}
	},
	components: {
		Close,
	}
}
</script>

<style lang="scss" scoped>
.team{
	&__block {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__popup {
		display: none;
	}

	&__item {
		position: relative;
		padding-bottom: m(10);
		cursor: pointer;

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
		padding:d(5) 0 d(32);
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
			width: 100%;
		}
	}

	&__social {
		margin-top: d(20);

		&-link {
			&:not(:last-child) {
				margin-right: d(18);
			}
		}
	}

	&__popup {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: absolute;
		background: url(~/assets/img/Popup-background.jpg) center center/cover no-repeat;
		top: 0;
		opacity: 0;
		visibility: hidden;
		transform: translateY(-100%);
		height: 100%;
		left: d(-55);
		right: d(-55);
		padding: d(100) d(44) d(50);
		transition: all .4s ease;
		z-index: 1;

		&.active {
			transform: translateY(0);
			opacity: 1;
			visibility: visible;
		}

		&-close {
			position: absolute;
			top: d(35);
			right: d(35);
		}

		&-title {
			font-family: 'BBLVRS';
			font-style: normal;
			font-weight: 400;
			font-size: d(26);
			line-height: d(26);
			color: $green;
		}

		&-text{
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: d(16);
			line-height: d(20);
			color: #FFFFFF;
		}

		&-position , &-descr {
			margin-top: d(22);
		}

		&-button {
			display: block;
			padding: d(14) 0;
			width: 100%;
			background: $green;
			text-align: center;
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: d(18);
			line-height: d(22);
			text-align: center;
		}
	}

}
@include hover {
	.team{
		&__item {

			&:hover {

				&::before, &::after {
					opacity: 1;
					visibility: visible;
				}

				&::before {
					top: d(-25);
					left: d(-80);
				}

				&::after {
					bottom: d(-25);
					right: d(-80);
					transform: rotate(180deg);
				}
			}
		}
	}
}
}

</style>
