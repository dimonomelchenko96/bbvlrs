<template lang="pug">
.member
	.member__container
		.member__block(
			@mousemove='paralax'
			@mouseout='resetOffset'
		)
			.member__block-text.member__block-text-left
				.member__block-item.one(
					v-if='members[id].left_sign.left_column'
					ref='item-one'
				) {{members[id].left_sign.left_column}}
					.member__block-item-overlay(
						ref='overlay-one'
					)
				.member__block-item.two(
					v-if='members[id].left_sign.right_column'
					ref='item-two'
				) ad
					.member__block-item-overlay(
						ref='overlay-two'
					)
			.member__block-text.member__block-text-right
				.member__block-item.three(
					v-if='members[id].right_sign.left_column'
					ref='item-three'
				) {{members[id].right_sign.left_column}}
					.member__block-item-overlay(
						ref='overlay-three'
					)
				.member__block-item.four(
					v-if='members[id].right_sign.right_column'
					ref='item-four'
				) {{members[id].right_sign.right_column.slice(0,7)}}
					.member__block-item-overlay(
						ref='overlay-four'
					)
			img.member__img(
				src="../../assets/img/portrait.png"
				alt="head"
			)
			img.member__img.member__img-copy.member__img-copy_green(
				src="../../assets/img/portrait_lines.png"
				alt="head"
				:style="{transform : `translate(${-imgOffsetX}px, ${-imgOffsetY}px)`, zIndex : zIndex}"
			)
			img.member__img.member__img-copy.member__img-copy_purple(
				src="../../assets/img/portrait_lines.png"
				alt="head"
				:style="{transform : `translate(${imgOffsetX}px, ${imgOffsetY}px)`, zIndex : zIndex}"
			)

		.member__description
			.member__text.member__text--name {{ members[id].name }}

			.member__text.member__text--job-title {{ members[id].position_full }}

			.social
				a.social__link(
					v-for="(soc, index) in members[id].socials"
					:key="index"
					:href="soc.social_link"
					target="_blank"
				)
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
import head from "~/assets/img/portrait.png";

export default {
	props: ["members", "id"],
	data() {
		return {
			img: head,
			defaultDuration: 1.0,
			defaultLength: 6,
			imgOffsetX: 0,
			imgOffsetY: 0,
			zIndex: -1,
		};
	},
	watch: {
		id(next, prev) {
			if (next !== prev) {
				this.addAnimationParams();
			}
		},
	},
	methods: {
		paralax(e) {
			let x = e.pageX;
			let y = e.pageY;
			this.zIndex = 1;
			let centerX =
				e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2;
			let centerY =
				e.currentTarget.offsetTop + e.currentTarget.offsetHeight / 2;

			this.imgOffsetX = (centerX - x) / 10;

			this.imgOffsetY = (centerY - y) / 10;

			console.log(this.imgOffsetX, this.imgOffsetY);
		},
		resetOffset() {
			(this.imgOffsetX = 0), (this.imgOffsetY = 0);
			this.zIndex = -1;
		},
		addAnimationParams() {
			let delay = 1;
			let duration = 0;

			let keys = Object.keys(this.$refs);

			for (let i = 0; i < Object.entries(this.$refs).length; i++) {
				if (this.$refs[keys[i]].textContent) {
					delay += duration > 1 ? duration - 0.5 : duration;
					duration =
						(this.$refs[keys[i]].textContent.length /
							this.defaultLength) *
						this.defaultDuration;
					this.$refs[keys[i - 1]].style.animationDelay = delay + "s";
					this.$refs[keys[i - 1]].style.animationDuration =
						duration.toFixed(2) + "s";
				}
			}
		},
	},
	mounted() {
		this.addAnimationParams();
	},
	components: {
		CustomScroller,
	},
};
</script>

<style lang="scss" scoped>
.member {
	&__container {
		width: 100%;
	}

	&__block {
		&-text {
			display: none;
		}
	}

	&__img {
		display: block;
		margin: 0 auto m(16);
		width: 100%;
		&-copy {
			display: none;
		}
	}

	&__positions {
		display: flex;
		align-items: center;
	}

	&__text {
		font-style: normal;
		color: $black;
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
			color: $lilac;
		}

		&--link {
			&:hover {
				color: $lilac;
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

		img {
			height: 100%;
			width: 100%;
		}
	}
}

.social {
	margin: 0 0 m(24) 0;

	&__link {
		margin: 0 m(16) 0 0;

		::v-deep {
			svg {
				path {
					fill: $black;
				}
			}
		}
	}
}

@include desc {
	.member {
		&__container {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			width: 100%;
		}

		&__block {
			position: relative;
			&-text {
				z-index: 2;
				position: absolute;
				display: flex;
				font-family: "BBLVRS", sans-serif;
				font-size: d(32);
				line-height: d(32);
				font-weight: 700;
				color: #000;
				bottom: 60%;
				text-transform: uppercase;
				writing-mode: vertical-rl;
				text-orientation: upright;
				flex-direction: column-reverse;
				align-items: flex-end;
				letter-spacing: 3px;
				&-left {
					left: 0;
					color: #76d676;
				}
				&-right {
					right: 0;
					color: #b69eff;
				}
			}
			&-item {
				position: relative;
				overflow: hidden;
				&-overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: #f5f5f5;
					animation: textOverflow;
					transform: translateY(0);
					animation-fill-mode: forwards;
				}
			}
		}

		&__img {
			display: block;
			width: d(600);
			height: auto;
			margin: 0;
			&-copy {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				display: block;
				opacity: 0.7;
				&_green {
					filter: brightness(0) saturate(100%) invert(66%) sepia(100%)
						saturate(202%) hue-rotate(71deg) brightness(92%)
						contrast(99%);
				}
				&_purple {
					filter: brightness(0) saturate(100%) invert(77%) sepia(34%)
						saturate(5427%) hue-rotate(206deg) brightness(102%)
						contrast(106%);
				}
			}
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

			img {
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
}

@keyframes textOverflow {
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(100%);
	}
}
</style>
