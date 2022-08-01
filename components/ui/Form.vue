<template lang="pug">
.modal
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
	},
	props: ["subject"],
};
</script>

<style lang="scss" scoped>
.form-container {
	position: absolute;
	top: 0;
	left: 0;
	padding: m(32);
	background: #b69eff;
	height: 100vh;
	.close-container {
		margin-bottom: m(28);
		display: flex;
		justify-content: space-between;

		a {
			path {
				fill: #000000;
			}
		}

		div {
			line-height: 24px;
		}
	}

	form {
		height: 90%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		h3 {
			font-family: "BBLVRS";
			font-style: normal;
			font-weight: 400;
			font-size: m(32);
			margin-bottom: m(36);
			flex-grow: 0;
		}

		.input-container {
			flex-grow: 0;
		}

		.textarea-container {
			flex-grow: 1;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
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

			&.active {
				border: 1px solid red;
			}
		}

		input {
			height: m(41);
			margin-bottom: m(17);

			&:last-child {
				margin-bottom: m(26);
			}
		}

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
			font-size: 18px;
			text-align: center;
			color: #0d0e0e;
			background: #76d676;
			border: none;
			cursor: pointer;
		}
	}
}
</style>
