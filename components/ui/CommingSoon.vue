<template lang="pug">
.soon
	.soon__date 05.09.2022
	.soon__text
		span Start mintfirst
		span first BBLVRS NFT
	.soon__button
		include ../../assets/svg/opensea.svg
		span wiev on Opensea
</template>

<style lang="scss" scoped>
.soon {
	padding: d(30) d(22) d(44);
	background-color: #B69EFF;
	font-family: 'BBLVRS';
	font-style: normal;
	font-weight: 400;
	font-size: d(84);
	line-height: d(84);

	&__date {
		color: #000000;
	}

	&__text {
		color: #FFFFFF;
		margin-bottom: d(72);

		span {
			display: block;
		}
	}

	&__button {
		display: flex;
		align-items: center;
		width: fit-content;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: d(18);
		line-height: d(22);
		text-align: center;
		color: #FFFFFF;
		background: #212121;
		padding: d(15) d(20);

		svg {
			margin-right: d(16);
		}
	}
}
</style>
