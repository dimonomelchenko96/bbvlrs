<template lang="pug">
.member
	.member__container
		.member__block(
			@mousemove='paralax'
			@mouseout='resetOffset'
		)
			.member__block-text.member__block-text-left
				.member__block-item(
					v-if="members[id].left_sign.left_column"
				) {{members[id].left_sign.left_column}}
					.member__block-item-overlay.one(
						:class="{'animation' : animationShow}"
						:style="{animationDelay : `${animationParams[0].delay}s`, animationDuration : `${animationParams[0].duration}s`}"
					)
				.member__block-item(
					v-if='members[id].left_sign.right_column'
				) {{members[id].left_sign.right_column}}
					.member__block-item-overlay.two(
						:class="{'animation' : animationShow}"
						:style="{animationDelay : `${animationParams[1].delay}s`, animationDuration : `${animationParams[1].duration}s`}"
					)
			.member__block-text.member__block-text-right
				.member__block-item(
					v-if="members[id].right_sign.left_column"
				) {{members[id].right_sign.left_column}}
					.member__block-item-overlay.three(
						:class="{'animation' : animationShow}"
						:style="{animationDelay : `${animationParams[2].delay}s`, animationDuration : `${animationParams[2].duration}s`}"
					)
				.member__block-item(
					v-if='members[id].right_sign.left_column'
				) {{members[id].right_sign.right_column}}
					.member__block-item-overlay.four(
						:class="{'animation' : animationShow}"
						:style="{animationDelay : `${animationParams[3].delay}s`, animationDuration : `${animationParams[3].duration}s`}"
					)
			img.member__img(
				:src="members[id].portrait_black.url"
				alt="head"
			)
			img.member__img.member__img-copy.member__img-copy_green(
				:src="members[id].portrait_white.url"
				alt="head"
				:style="{transform : `translate(${-imgOffsetX}px, ${-imgOffsetY}px)`, opacity : opacity}"
			)
			img.member__img.member__img-copy.member__img-copy_purple(
				:src="members[id].portrait_white.url"
				alt="head"
				:style="{transform : `translate(${imgOffsetX}px, ${imgOffsetY}px)`, opacity : opacity}"
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
	props: ["members", "id", "animationShow"],
	data() {
		return {
			img: head,
			imgOffsetX: 0,
			imgOffsetY: 0,
			opacity: -1,
			animationParams: [
				{
					delay: 0,
					duration: 0,
				},
				{
					delay: 0,
					duration: 0,
				},
				{
					delay: 0,
					duration: 0,
				},
				{
					delay: 0,
					duration: 0,
				},
			],
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
			this.opacity = 1;
			let centerX =
				e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2;
			let centerY =
				e.currentTarget.offsetTop + e.currentTarget.offsetHeight / 2;

			if (x < e.currentTarget.offsetLeft + (e.currentTarget.offsetWidth / 4)) {
				this.imgOffsetX = (x - e.currentTarget.offsetLeft) / 6
			} else if (x < e.currentTarget.offsetLeft + (e.currentTarget.offsetWidth / 2)){
				this.imgOffsetX = (e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2 - x) / 6
			} else if (x > e.currentTarget.offsetLeft + (e.currentTarget.offsetWidth / 2) && x < e.currentTarget.offsetLeft +  ((e.currentTarget.offsetWidth / 4) * 3)) {
				this.imgOffsetX = -(x - (e.currentTarget.offsetLeft + (e.currentTarget.offsetWidth / 2))) / 6
			} else {
				this.imgOffsetX = (x - (e.currentTarget.offsetLeft +e.currentTarget.offsetWidth)) / 6;
			}

			if (y < e.currentTarget.offsetTop + (e.currentTarget.offsetWidth / 4)) {
				this.imgOffsetY = (y - e.currentTarget.offsetTop) / 6;
			} else if (y < e.currentTarget.offsetTop + (e.currentTarget.offsetHeight / 2)){
				this.imgOffsetY = (e.currentTarget.offsetTop + e.currentTarget.offsetHeight / 2 - y) / 6;
			} else if (y > e.currentTarget.offsetTop + (e.currentTarget.offsetHeight / 2) && y < e.currentTarget.offsetTop + ((e.currentTarget.offsetHeight / 4) * 3)) {
				this.imgOffsetY = -(y - (e.currentTarget.offsetTop + (e.currentTarget.offsetHeight / 2))) / 6;
			} else {
				console.log('c');
				this.imgOffsetY = (y - (e.currentTarget.offsetTop +e.currentTarget.offsetHeight)) / 6;
			}


			// if (y < centerY) {
			// 	console.log(y, centerY);
			// 	this.imgOffsetY = (y - e.currentTarget.offsetTop) / 8
			// } else {
			// 	this.imgOffsetY = (e.currentTarget.offsetTop + e.currentTarget.offsetHeight - y) / 8
			// }
			// if (x < centerX) {
			// 	console.log(x, centerX);
			// 	this.imgOffsetX = (x - e.currentTarget.offsetLeft) / 8
			// } else {
			// 	this.imgOffsetX = (e.currentTarget.offsetLeft + e.currentTarget.offsetWidth - x) / 8
			// }

			// if (y < centerY) {
			// 	console.log(y, centerY);
			// 	this.imgOffsetY = (y - e.currentTarget.offsetTop) / 8
			// } else {
			// 	this.imgOffsetY = (e.currentTarget.offsetTop + e.currentTarget.offsetHeight - y) / 8
			// }

			// this.imgOffsetX = (centerX - x) / 8;

			// this.imgOffsetY = (centerY - y) / 8;
		},
		resetOffset() {
			(this.imgOffsetX = 0), (this.imgOffsetY = 0);
			this.opacity = 0;
		},
		addAnimationParams() {
			const defaultDuration = 1.2;
			const defaultLength = 6;
			let delay = 1;
			let duration = 0;

			let textArray = [
				this.members[this.id].left_sign.left_column,
				this.members[this.id].left_sign.right_column,
				this.members[this.id].right_sign.left_column,
				this.members[this.id].right_sign.right_column,
			];

			textArray.forEach((item, i) => {
				if (item) {
					delay += duration - duration / 2;
					this.animationParams[i].delay = delay;
					duration = (item.length / defaultLength) * defaultDuration;
					this.animationParams[i].duration = duration;
				}
			});
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
					fill: $lilac;
					stroke: $lilac;
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
					transform: translateY(0);
					&.animation {
						animation: textOverflow;
						animation-fill-mode: forwards;
					}
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
				opacity: 0.8;
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
