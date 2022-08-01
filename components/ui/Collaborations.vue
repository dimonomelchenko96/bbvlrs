<template lang="pug">
.collaborations
	h3.collaborations__headline.text collaborations
	p.collaborations__text How would you like to contribute:
	ul.collaborations__list
		li.list__item(
			v-for="(collaboration, index) in collaborations"
			:key="index"
			@click="formOpen(collaboration)"
		)
			p.item__text.text {{collaboration}}
			.arrow-container
				.arrow-container__arrow
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
.text {
	font-family: "BBLVRS";
	font-style: normal;
	font-weight: 400;
	color: #ffffff;
}
.collaborations {
	padding: m(32);
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
</style>
