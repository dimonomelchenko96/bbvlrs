<template lang="pug">
.modal(
	@click="closeFormClickModal"
)
	.form
		.form__close
			a(
				href="#initialPage"
				@click="closeForm"
			)
				include ../../assets/svg/logo-mob.svg
			div(
				@click="closeForm"
			)
				include ../../assets/svg/close-modal.svg
		.form__message(
			v-if='showForm'
		)
			span {{sendFormMessage}}
		form(
			v-if='!showForm'
			@submit.prevent="handleSubmit"
			novalidate
		)
			h3 Fill the form
			.form__container
				.form__input
					input.input(
						type="text"
						placeholder="Name"
						name="name"
						v-model="name"
						:class="{'input_invalid': !nameValid }"
						@input="handleInput"
					)
					input.input(
						type="text"
						placeholder="Surname"
						name="surname"
						v-model="surname"
						:class="{'input_invalid': !surnameValid }"
						@input="handleInput"
					)
					input.input(
						type="email"
						placeholder="Email"
						name="email"
						v-model="email"
						:class="{'input_invalid': !emailValid }"
						@input="handleInput"
					)
				.form__textarea
					textarea.input(
						placeholder="Message"
						name="message"
						v-model="message"
						:class="{'input_invalid': !messageValid }"
						@input="handleInput"
					)
					button Submit

</template>

<script>
export default {
	props: ["subject"],
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
			sendFormMessage: "",
			showForm: false,
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
			) {
				this.emailValid = true;
			}
		},
		async handleSubmit() {
			if (!this.isValidation()) return;

			let fd = new FormData();
			fd.append("your-name", this.name);
			fd.append("your-surname", this.surname);
			fd.append("your-email", this.email);
			fd.append("your-message", this.message);
			fd.append("your-subject", this.subject);

			const resp = await this.$api.form.send(fd);
			this.showForm = !this.showForm;

			if (resp.status === "mail_sent") {
				this.sendFormMessage = "Message sent successfully";
			} else {
				this.sendFormMessage = "Sent failed";
			}
			setTimeout(() => {
				this.resetForm();
				this.closeForm();
			}, 5000);
		},
		isValidation() {
			let isValid = true;

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
	position: fixed;
	top: 0;
	left: 0;
	z-index: 105;
	width: 100%;
}
.form {
	padding: m(32);
	background: $lilac;
	height: calc(var(--vh) * 100);

	&__message {
		margin-top: 50%;
		font-size: m(35);
		text-align: center;
	}

	&__close {
		margin-bottom: m(28);
		display: flex;
		justify-content: space-between;

		a {
			svg {
				width: m(20);
				height: m(32);
			}
			path {
				fill: $black;
			}
		}

		div {
			display: flex;
			align-items: center;
			svg {
				width: m(34);
				height: m(34);
			}
		}
	}

	&__container {
		height: 87%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	&__input {
		input {
			height: m(41);
			margin-bottom: m(17);

			&:last-child {
				margin-bottom: m(26);
			}
		}
	}

	&__textarea {
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
			background: $green;
			border: none;
			cursor: pointer;
		}
	}

	form {
		height: 90%;
		position: relative;

		h3 {
			font-family: "BBLVRS";
			font-style: normal;
			font-weight: 400;
			font-size: m(32);
			margin-bottom: m(36);
		}
	}

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

		&::-webkit-input-placeholder {
			color: rgba(0, 0, 0, 0.7);
		}

		&::-moz-placeholder {
			color: rgba(0, 0, 0, 0.7);
		}

		&:-ms-input-placeholder {
			color: rgba(0, 0, 0, 0.7);
		}

		&_invalid {
			border: m(1) solid #ff0000;
		}
	}
}

@include desc {
	.modal {
		width: 100vw;
		height: calc(var(--vh) * 100);
		background-color: rgba(10, 10, 10, 0.702);
	}

	.form {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: d(32);
		height: auto;

		&__message {
			margin: 0;
			width: d(864);
			padding-bottom: d(80);
			text-align: center;
			font-size: d(45);
		}

		&__close {
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
		}

		.input {
			width: d(420);
			border: d(0.5) solid $black;
			padding: d(16);
			font-size: d(14);

			&_invalid {
				border: d(1) solid #ff0000;
			}
		}

		&__container {
			width: d(864);
			height: d(180);
			flex-direction: revert;
		}

		&__input {
			height: d(180);
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			margin-right: d(24);

			input {
				margin: 0;
				height: d(41);

				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		&__textarea {
			height: d(180);

			textarea {
				height: d(113);
			}

			button {
				height: d(41);
				padding: 0;
				font-size: d(18);
				text-align: center;
				background: $green;
			}
		}
	}
}
</style>
