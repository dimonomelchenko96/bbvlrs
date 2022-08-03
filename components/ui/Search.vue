<template lang="pug">
.search
	input(
		v-model="text"
		placeholder="search on source"
	)
</template>

<script>
export default {
	name: "search",

	data() {
		return{
			text: "",
		}
	},

	methods: {

	}
}
</script>

<style lang="scss" scope>
.search {
	position: relative;
	padding: m(15) m(24);
	background: $black;
	width: 100%;

	position: fixed;
	bottom: 0;

	&::before {
		content: '';
		position: absolute;
		width: 15px;
		height: 15px;
		right: 40px;
		top: 27px;
		background: url(../../assets/svg/search-icon.svg);
		opacity: 0.2;
	}

	input {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: m(16);
		line-height: m(26);
		width: 100%;
		color: $white;
		padding: m(7) m(16);
		height: m(40);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 4px;
		outline: none;

		&::placeholder {
			color: rgba(255, 255, 255, 0.05);
			text-transform: uppercase;
		}
	}
}
</style>
