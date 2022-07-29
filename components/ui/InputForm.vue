<template lang="pug">
form.input
	input.input__input(
		:placeholder="placeholder"
	)
	button.input__button
		include ../../assets/svg/arrow-icon.svg
</template>

<script>
export default {
	props: ['placeholder']
}
</script>

<style lang="scss" scoped>
.input {
	background: rgba(255, 255, 255, 0.05);
	border: d(1) solid rgba(255, 255, 255, 0.05);
	border-radius: d(4);
	display: flex;
	align-items: center;
	height: d(40);
	width: d(372);
	padding: 0 d(20);

	&__input {
		flex-grow: 1;
		background: transparent;
		border: none;
		outline: none;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: d(16);
		line-height: d(26);
		color: #FFFFFF;
		height: 100%;
	}
}
</style>
