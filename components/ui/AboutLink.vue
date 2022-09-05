<template lang="pug">
button.about
	include ../../assets/svg/i.svg
	span About Project
</template>

<style lang="scss" scoped>
.about {
	display: flex;

	svg {
		margin-right: d(10);
	}

	span {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		font-size: d(16);
		line-height: d(20);
		color: $white;
	}
}
</style>
