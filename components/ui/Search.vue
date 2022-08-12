<template lang="pug">
.search
	form(
		type="submit"
		@submit.prevent="handleSubmit"
	)
		input(
			v-if="!openNavMenu"
			v-model="text"
			placeholder="search on source"
		)
</template>

<script>
// <<<<<<< HEAD

import { mapState } from "vuex";

export default {
	name: "search",

	computed: {
		...mapState({
			searchName: (state) => state.search.searchName,
		}),
	},

	data() {
		return{
			text: this.searchName,
		}
// =======
// import { mapState } from "vuex";
// export default {
// 	name: "search",
// 	computed: {
// 		...mapState({
// 			openNavMenu: (state) => state.openNavMenu,
// 		}),
// 	},
// 	data() {
// 		return {
// 			text: "",
// 		};
// >>>>>>> develop_ihor-P
	},

	methods: {
		handleSubmit() {
// <<<<<<< HEAD
			this.$store.commit("search/bindName",  this.text);
			this.$store.commit("search/showPopup",  true);
		}
	}
}
// =======
// 			this.$emit("handleSubmit", this.text);
		// },
// 	},
// };
// >>>>>>> develop_ihor-P
</script>

<style lang="scss" scoped>
.search {
	position: relative;
	padding: m(15) m(32);
	background: $black;
	width: 100%;

	bottom: 0;

	&::before {
		content: "";
		position: absolute;
		width: m(15);
		height: m(15);
		right: m(40);
		top: 50%;
		transform: translateY(-50%);
		background: url(../../assets/svg/search-icon.svg);
		background-repeat: no-repeat;
		background-position: center;
		opacity: 0.2;
	}

	input {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		font-size: m(16);
		line-height: m(26);
		width: 100%;
		color: $white;
		padding: m(7) m(16);
		height: m(40);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 4px;
		outline: none;

		&::placeholder {
			color: rgba(255, 255, 255, 0.2);
			text-transform: uppercase;
		}
	}
}

@include desc {
	.search {
		padding: 0;
		position: relative;
		height: d(40);

		margin-bottom: d(70);

		&::before {
			width: d(15);
			height: d(15);
			right: d(40);
		}

		input {
			padding: d(7) d(16);
			font-size: d(14);
			line-height: d(26);
			height: d(40);
		}

		&::after {
			content: "";
			display: block;
			height: 1px;
			background-color: #fff;
			opacity: 0.1;

			margin: d(30) 0;
		}
	}
}
</style>
