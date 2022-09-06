<template lang="pug">
.square-box
	.square-box__loader-top
		include ../assets/svg/chevron-left.svg
	.square-box__background-top
		include ../assets/svg/chevron-left.svg
	.square-box__loader-bottom
		include ../assets/svg/chevron-left.svg
	.square-box__background-bottom
		include ../assets/svg/chevron-left.svg
</template>

<script>
export default {
	name: "SquarePreloader",

	watch: {
		percent(next) {
			this.squareLoader(next);
		},
	},
	data() {
		return {
			percent: 0,
		};
	},
	methods: {
		squareLoader(percent) {
			const squareBottom = document.querySelector(
				`.square-box__loader-bottom svg path`
			);
			const squareTop = document.querySelector(
				`.square-box__loader-top svg path`
			);
			const squareLength = 20;

			squareTop.style.cssText =
				"stroke-width: 1; stroke: #90ee90; fill: none; transform-origin: center; transform: rotate(-135deg);";
			squareTop.style.strokeDasharray = `${squareLength} ${squareLength}`;
			squareTop.style.strokeDashoffset = squareLength;

			squareBottom.style.cssText =
				"stroke-width: 1; stroke: #90ee90; fill: none; transform-origin: center; transform: rotate(45deg);";
			squareBottom.style.strokeDasharray = `${squareLength} ${squareLength}`;
			squareBottom.style.strokeDashoffset = squareLength;

			function setProgress(percBottom) {
				const offsetBottom =
					squareLength - (percBottom / 100) * squareLength;
				squareBottom.style.strokeDashoffset = offsetBottom;
				squareTop.style.strokeDashoffset = offsetBottom;
			}
			setProgress(percent);
		},
	},

	mounted() {
		setInterval(() => {
			this.percent = this.percent - 1;
		}, 6);

		this.squareLoader(this.percent);
	},
};
</script>

<style lang="scss" scoped>
.square-box {
	position: absolute;
	top: 60%;
	left: 50%;

	width: m(130);
	height: m(150);

	&__loader-bottom {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 99;
		svg {
			width: m(100);
			height: m(100);
		}
	}
	&__background-bottom {
		position: absolute;
		bottom: 0;
		right: 0;

		svg {
			width: m(100);
			height: m(100);

			path {
				stroke: grey;
				stroke-width: 1;
				fill: none;
				transform-origin: center;
				transform: rotate(45deg);
			}
		}
	}
	&__loader-top {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 99;
		svg {
			width: m(100);
			height: m(100);
		}
	}
	&__background-top {
		position: absolute;
		top: 0;
		left: 0;

		svg {
			width: m(100);
			height: m(100);

			path {
				stroke: grey;
				stroke-width: 1;
				fill: none;
				transform-origin: center;
				transform: rotate(-135deg);
			}
		}
	}
}

@include desc {
	.square-box {
		width: d(130);
		height: d(150);

		&__loader-bottom {
			svg {
				width: d(100);
				height: d(100);
			}
		}
		&__background-bottom {
			svg {
				width: d(100);
				height: d(100);
			}
		}
		&__loader-top {
			svg {
				width: d(100);
				height: d(100);
			}
		}
		&__background-top {
			svg {
				width: d(100);
				height: d(100);
			}
		}
	}
}
</style>
