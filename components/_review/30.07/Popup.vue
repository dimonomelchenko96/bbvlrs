<template lang="pug">
.popup
	.popup__close
		span
		span
	.popup__content
		slot
	.popup__pagination
		.popup__pagination-left
			img(src="~/assets/svg/chevron-left.svg")
		.popup__pagination-numbers
			span 1
			span /
			span 23
		.popup__pagination-right
			img(src="~/assets/svg/chevron-right.svg")

</template>

<script>

	export default {

	}
</script>

<style lang="scss" scoped>
	.popup {
		padding: 45px 32px 56px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: url(../assets/img/Background.jpg) center center/cover no-repeat;
		&__close {
			position: absolute;
			top: 24px;
			right: 24px;
			width: 40px;
			height: 40px;
			background: #000000;
			border-radius: 40px;
			span {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%) rotate(45deg);
				display: block;
				width: 17px;
				height: 1px;
				background: #ffffff;
				&:last-child {
					transform: translate(-50%, -50%) rotate(-45deg);
				}
			}
		}
		&__content {
			height: 100%;
		}
		&__pagination {
			padding: 0 16px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 56px;
			background: rgba(18, 18, 18, 0.5);
			&-left, &-right {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background: rgba(255, 255, 255, 0.05);
				img {

				}
			}
			&-numbers {
				font-family: 'Montserrat';
				font-style: normal;
				font-weight: 400;
				font-size: 16px;
				line-height: 20px;
				color: #FFFFFF;
			}
		}
	}
</style>
