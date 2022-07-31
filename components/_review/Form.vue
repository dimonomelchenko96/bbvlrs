<template lang="pug">
.form-container
	.close-container
		a(
			href="#"
		)
			include ../assets/svg/logo-mob.svg
		div
			include ../assets/svg/close-modal.svg
	//- _r: @sumbit.prevent
	form(
		@submit="handleSubmit"
		@change="handleOnChange"
	)
		h3 Fill the form
		.input-container
			input.input(
				type="text"
				placeholder="Name"
				name="name"
				v-model="name"
				:class="{'active': !nameValid }"
			)
			input.input(
				type="text"
				placeholder="Surname"
				name="surname"
				v-model="surname"
				:class="{'active': !surnameValid }"
			)
			input.input(
				type="email"
				placeholder="Email"
				name="email"
				v-model="email"
				:class="{'active': !emailValid }"
			)
		.textarea-container
			textarea.input(
				placeholder="Message"
				name="message"
				v-model="message"
				:class="{'active': !messageValid }"
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
		handleOnChange() {
			// _r: не працює
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
		async handleSubmit(e) {
			e.preventDefault();
			if (!this.isValidation()) return;

			let fd = new FormData();
			fd.append("your-name", this.name);
			fd.append("your-surname", this.surname);
			fd.append("your-email", this.email);
			fd.append("your-message", this.message);
			console.log(Array.from(fd));
			// const resp = await this.$api.form.send(fd);

			// _r: ресет або через ref, або інпути почистити через data
			e.currentTarget.reset();

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
	},
};
</script>

<style lang="scss" scoped>
.form-container {
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
		h3 {
			font-family: "BBLVRS";
			font-style: normal;
			font-weight: 400;
			font-size: m(32);
			margin-bottom: m(36);
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
			.active {
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
			margin-bottom: m(280);
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
