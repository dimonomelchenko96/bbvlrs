<template lang="pug">
	.close
		include ../../assets/svg/x.svg
		span Close
</template>


<style lang="scss" scoped>
.close {
	cursor: pointer;
	display: flex;
	align-items: center;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: d(14);
	line-height: d(17);
	color: #FFFFFF;
	svg {
		margin-right: d(10);
	}
}
</style>
