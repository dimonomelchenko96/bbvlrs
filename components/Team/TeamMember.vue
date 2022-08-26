<template lang="pug">
.team__item
	.team__block(@click="contentShow")
		img.team__item-img(
			src="../../assets/img/head.png"
		)

		.team__item-title {{ elem.name }}

		.team__item-position {{ elem.position_short }}

	.team__popup(:class="[showPopup !== null && showPopup === id ? 'active' : null]")
		.team__popup-close(@click='contentHide')
			Close

		.team__popup-content
			h3.team__popup-title {{ elem.name }}

			.team__popup-text.team__popup-descr {{ elem.about }}

			.team__popup-text.team__popup-position(
				v-for="position in elem.positions_all"
			)
				.team__popup-text {{ position.role }} -&nbsp

				.team__popup-text.team__popup-text--link(
					:href="position.corporation_link"
					target="_blank"
				) {{ position.corporation }}

			.team__social
				a.team__social-link(
					v-for="(soc, index) in elem.socials"
					:key="index"
					:href="soc.social_link"
					target="_blank"
				)
					template
						div(
							v-html="require(`~/assets/svg/socials/${soc.slug}.svg?raw`)"
						)

		.team__popup-button(
			@click="showMember"
		) Show details
</template>


<script>

import Close from '~/components/Team/Close'

export default {
	props: ['elem', 'id', 'showPopup'],
	data() {
		return {}
	},
	methods: {
		contentShow() {
			this.$emit('popup', this.id);
		},
		contentHide() {
			this.$emit('popup', null);
		},
		showMember() {
			this.$emit('showMember', this.id)
		}
	},
	components: {
		Close,
	}
}
</script>

<style lang="scss" scoped>
.team {
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

		&::before,
		&::after {
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
			text-align: center;
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
			padding: 0;
			margin: 0;

			&-title {
				font-size: d(45);
				line-height: d(45);
				max-height: d(45);
				overflow: hidden;
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

			&::before,
			&::after {
				opacity: 0;
				visibility: hidden;
				transition: all .4s ease;
			}

			&-img {
				height: d(475);
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
			background: #000;
			top: 0;
			opacity: 0;
			visibility: hidden;
			transform: translateY(-100%);
			height: 100%;
			left: d(-35);
			right: d(-35);
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

			&-text {
				font-family: 'Montserrat';
				font-style: normal;
				font-weight: 300;
				font-size: d(16);
				line-height: d(20);
				color: #FFFFFF;

				&--link {
					&:hover {
						color: #90ee90;
						text-decoration: underline;
					}
				}
			}

			&-position {
				display: flex;
				align-items: center;
				margin-top: d(22);
			}

			&-descr {
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
		.team {
			&__item {

				&:hover {

					&::before,
					&::after {
						opacity: 1;
						visibility: visible;
					}

					&::before {
						top: d(-25);
						left: d(-60);
					}

					&::after {
						bottom: d(-25);
						right: d(-60);
						transform: rotate(180deg);
					}
				}
			}
		}
	}
}
</style>
