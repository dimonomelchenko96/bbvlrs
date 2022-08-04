<template lang="pug">
.modal(
	@click="closeFormClickModal"
)
	.form-container
		.close-container
			a(
				href="#"
			)
				include ../../assets/svg/logo-mob.svg
			div(
				@click="closeForm"
			)
				include ../../assets/svg/close-modal.svg
		form(
			@submit.prevent="handleSubmit"
			novalidate
		)
			h3 Fill the form
			.container-box
				.input-container
					input.input(
						type="text"
						placeholder="Name"
						name="name"
						v-model="name"
						:class="{'active': !nameValid }"
						@input="handleInput"
					)
					input.input(
						type="text"
						placeholder="Surname"
						name="surname"
						v-model="surname"
						:class="{'active': !surnameValid }"
						@input="handleInput"
					)
					input.input(
						type="email"
						placeholder="Email"
						name="email"
						v-model="email"
						:class="{'active': !emailValid }"
						@input="handleInput"
					)
				.textarea-container
					textarea.input(
						placeholder="Message"
						name="message"
						v-model="message"
						:class="{'active': !messageValid }"
						@input="handleInput"
					)
					button Submit

</template>

<script>
export default {
	data() {
		return {
			name: "",
			surname: "",
			email: "",
			message: "",
			nameValid: true,
			emailValidEmpty: false,
			emailValid: true,
			messageValid: true,
			surnameValid: true,
		};
	},
	methods: {
		resetForm() {
			this.name = "";
			this.surname = "";
			this.email = "";
			this.message = "";
		},
		handleInput() {
			if (this.name !== "") this.nameValid = true;
			if (this.surname !== "") this.surnameValid = true;
			if (this.message !== "") this.messageValid = true;
			if (
				this.email &&
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
					this.email
				)
			)
				this.emailValid = true;
		},
		async handleSubmit() {
			if (!this.isValidation()) return;

			let fd = new FormData();
			fd.append("your-name", this.name);
			fd.append("your-surname", this.surname);
			fd.append("your-email", this.email);
			fd.append("your-message", this.message);
			fd.append("your-subject", this.subject);
			console.log(Array.from(fd));
			// const resp = await this.$api.form.send(fd);
			this.resetForm();
			this.closeForm();
			// return resp;
		},
		isValidation() {
			let isValid = true;
			this.nameValid = true;
			this.emailValidEmpty = false;
			this.emailValid = true;
			this.messageValid = true;
			this.surnameValid = true;
			if (!this.name) {
				isValid = false;
				this.nameValid = false;
			}
			if (!this.surname) {
				isValid = false;
				this.surnameValid = false;
			}

			if (!this.email) {
				isValid = false;
				this.emailValid = false;
				this.emailValidEmpty = true;
			}

			if (
				this.email &&
				!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
					this.email
				)
			) {
				isValid = false;
				this.emailValid = false;
				this.emailValidEmpty = false;
			}

			if (!this.message) {
				isValid = false;
				this.messageValid = false;
			}

			return isValid;
		},
		closeForm() {
			this.$emit("closeForm", {
				closeForm: false,
				subject: "",
			});
		},
		closeFormEscKeydown(e) {
			if (e.code === "Escape") {
				this.closeForm();
			}
		},
		closeFormClickModal(e) {
			if (e.target.className === "modal") {
				this.closeForm();
			}
		},
	},
	props: ["subject"],
	mounted() {
		document.addEventListener("keydown", this.closeFormEscKeydown);
	},
	beforeDestroy() {
		document.removeEventListener("keydown", this.closeFormEscKeydown);
	},
};
</script>

<style lang="scss" scoped>
.modal {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 105;
	.form-container {
		padding: m(32);
		background: #b69eff;
		height: calc(var(--vh) * 100);
		.close-container {
			margin-bottom: m(28);
			display: flex;
			justify-content: space-between;

			a {
				svg {
					width: m(22);
					height: m(28);
				}
				path {
					fill: #000000;
				}
			}

			div {
				display: flex;
				align-items: center;
				svg {
					width: m(26);
					height: m(26);
				}
			}
		}

		form {
			height: 90%;

			h3 {
				font-family: "BBLVRS";
				font-style: normal;
				font-weight: 400;
				font-size: m(32);
				margin-bottom: m(36);
			}

			.container-box {
				height: 87%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.input {
					width: 100%;
					border: m(0.5) solid #000000;
					padding: m(16);
					background: transparent;
					font-family: "Montserrat";
					font-style: normal;
					font-weight: 400;
					font-size: m(14);
					outline: none;

					&.active {
						border: 1px solid red;
					}
				}
				.input-container {
					input {
						height: m(41);
						margin-bottom: m(17);

						&:last-child {
							margin-bottom: m(26);
						}
					}
				}
				.textarea-container {
					flex-grow: 1;
					display: flex;
					justify-content: space-between;
					flex-direction: column;

					textarea {
						height: m(100);
						resize: none;
					}

					button {
						display: block;
						width: 100%;
						padding: m(15) 0;
						margin: 0 auto;
						font-family: "Montserrat";
						font-style: normal;
						font-weight: 400;
						font-size: m(18);
						text-align: center;
						color: #0d0e0e;
						background: #76d676;
						border: none;
						cursor: pointer;
					}
				}
			}
		}
	}
}

@include desc {
	.modal {
		width: 100vw;
		height: 100vh;
		background-color: rgba(10, 10, 10, 0.702);

		.form-container {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: d(32);
			height: auto;

			.close-container {
				margin-bottom: d(28);
				justify-content: flex-end;

				a {
					display: none;
				}

				div {
					cursor: pointer;

					svg {
						width: d(32);
						height: d(35);
					}
				}
			}

			form {
				height: auto;
				margin: 0 d(98) d(114);

				h3 {
					font-size: d(56);
					margin-bottom: d(43);
					text-align: center;
				}

				.container-box {
					height: auto;
					flex-direction: revert;
					.input {
						border: d(0.5) solid #000000;
						padding: d(16);
						font-size: d(14);
					}

					.input-container {
						width: 49%;

						input {
							height: d(41);
							margin-bottom: d(17);

							&:last-child {
								margin-bottom: 0;
							}
						}
					}

					.textarea-container {
						flex-grow: 0;
						width: 49%;

						textarea {
							width: 100%;
							height: d(100);
						}

						button {
							padding: d(10) 0;
							font-size: d(18);
							text-align: center;
							background: #90ee90;
						}
					}
				}
			}
		}
	}
}
</style>
