<template lang="pug">
.collaborations
	div.collaborations__list
		.collaborations__list-base
			div
				h3.collaborations__headline.text collaborations
				p.collaborations__text How would you like to contribute:
		div.list__item(
			v-for="(collaboration, index) in collaborations"
			:key="index"
			@click="formOpen(collaboration)"
		)
			p.item__text.text {{collaboration}}
			.arrow-container
				.arrow-container__arrow
	transition(
		name="bounce"
		)
		Form(
			v-if="modalForm"
			@closeForm="closeForm($event)"
			:subject="subject"
		)
</template>

<script>
import Form from "~/components/ui/Form";
export default {
	data() {
		return {
			collaborations: [
				"numbers1",
				"numbers2",
				"numbers3",
				"numbers4",
				"numbers5",
				"numbers6",
				"numbers7",
				"numbers8",
			],
			modalForm: false,
			subject: "",
		};
	},
	methods: {
		formOpen(e) {
			this.modalForm = true;
			this.subject = e;
		},
		closeForm(e) {
			this.modalForm = e.closeForm;
			this.subject = e.subject;
		},
	},
	components: {
		Form,
	},
};
</script>

<style lang="scss" scoped>
.bounce-enter-active {
	animation: bounce-in 0.8s ease-out both;
}

.bounce-leave-active {
	animation: bounce-in 0.8s reverse ease-in both;
}

@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.25);
	}
	100% {
		transform: scale(1);
	}
}
.text {
	font-family: "BBLVRS";
	font-style: normal;
	font-weight: 400;
	color: #ffffff;
}
.collaborations {
	padding: m(88) m(32) m(72);

	&__headline {
		font-size: m(32);
		margin-bottom: m(40);
	}

	&__text {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 300;
		font-size: m(16);
		color: #90ee90;
		margin-bottom: m(40);
	}

	.list__item {
		padding: m(32) m(10);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		display: flex;
		justify-content: space-between;
		cursor: pointer;

		.item__text {
			font-size: m(24);
		}

		.arrow-container {
			display: flex;
			align-items: center;

			&__arrow {
				width: m(12);
				height: m(12);
				border-top: m(1) solid #fff;
				border-right: m(1) solid #fff;
				transform: rotate(45deg);
			}
		}
	}
}

@include desc {
	.collaborations {
		padding: 0;
		&__list {
			height: 100vh;
			padding: d(152) 0 d(121);
			display: grid;
			grid-template-columns: 3fr 1fr 2fr;
			grid-template-rows: 1fr 1fr 1fr;

			&-base {
				display: flex;
				justify-content: center;
				align-items: center;
				grid-row-start: 2;
				position: relative;

				&::before {
					content: "";
					display: block;
					position: absolute;
					border-right: d(1) solid rgba(112, 112, 112, 0.25);
					height: 200vh;
					right: 0;
				}

				&::after {
					content: "";
					position: absolute;
					background: url(~/assets/svg/burger-menu.svg);
					width: 26px;
					height: 26px;
					bottom: -13px;
					right: -13px;
					opacity: 0.7;
					transform: rotate(-90deg);
				}
			}
		}

		&__headline {
			font-size: d(70);
			margin-bottom: 0;
		}

		&__text {
			font-size: d(25);
			margin-bottom: 0;
		}
		.list__item {
			padding: 0;
			border: none;
			justify-content: center;
			align-items: center;
			border: none;
			position: relative;

			&:nth-of-type(2) {
				&::before {
					content: "";
					display: block;
					position: absolute;
					border-top: d(1) solid rgba(112, 112, 112, 0.25);
					width: 200vw;
					top: 0;
				}
			}
			&:nth-of-type(8) {
				&::before {
					content: "";
					display: block;
					position: absolute;
					border-bottom: d(1) solid rgba(112, 112, 112, 0.25);
					width: 200vw;
					bottom: 0;
				}
				&::after {
					content: "";
					position: absolute;
					background: url(~/assets/svg/burger-menu.svg);
					width: 26px;
					height: 26px;
					top: -13px;
					right: -13px;
					opacity: 0.7;
				}
			}

			&:nth-of-type(6) {
				&::before {
					content: "";
					display: block;
					position: absolute;
					border-left: d(1) solid rgba(112, 112, 112, 0.25);
					height: 200vh;
					left: 0;
				}
			}

			&:nth-of-type(5) {
				&::before {
					content: "";
					display: block;
					position: absolute;
					border-bottom: d(1) solid rgba(112, 112, 112, 0.25);
					width: 200vw;
					bottom: 0;
				}

				&::after {
					content: "";
					position: absolute;
					background: url(~/assets/svg/burger-menu.svg);
					width: 26px;
					height: 26px;
					top: -13px;
					left: -13px;
					opacity: 0.7;
				}
			}
			&:nth-of-type(3) {
				&::before {
					content: "";
					display: block;
					position: absolute;
					border-bottom: d(1) solid rgba(112, 112, 112, 0.25);
					width: 200vw;
					bottom: 0;
				}

				&::after {
					content: "";
					position: absolute;
					background: url(~/assets/svg/burger-menu.svg);
					width: 26px;
					height: 26px;
					bottom: -13px;
					right: -13px;
					opacity: 0.7;
					transform: rotate(-90deg);
				}
			}

			&:hover {
				background-color: lightblue;
			}

			.item__text {
				font-size: d(32);
			}

			.arrow-container {
				display: none;
			}
		}
	}
}
</style>
