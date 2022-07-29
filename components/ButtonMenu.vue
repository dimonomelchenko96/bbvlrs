<template lang="pug">
.button-container
	button.button-container__btn whtppr
	button.button-container__btn mint
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.button-container {
	display: flex;
	justify-content: space-between;
	gap: m(16);
	margin-bottom: m(120);
	&__btn {
		width: m(147);
		height: m(52);
		background-color: #212121;
		border: none;
		color: #fff;
		transition: all linear 300ms;
		&:hover {
			background-color: #76d676;
			color: #0d0e0e;
			text-transform: uppercase;
		}
	}
}
</style>
