<template lang="pug">
.soon
	.soon__date {{event.date}}
	.soon__text
		span {{event.text}}
	a.soon__button(
			:href="event.button.link"
			target="_blank"
		)
		include ../../assets/svg/opensea.svg
		span wiev on Opensea
</template>

<script>
export default {
	props: ["event"],
};
</script>

<style lang="scss" scoped>
.soon {
	width: 50%;
	padding: d(32);
	background-color: #b69eff;
	font-family: "BBLVRS";
	font-style: normal;
	font-weight: 400;
	font-size: d(84);
	line-height: d(84);

	&__date {
		text-align: left;
		color: #000000;
		margin-bottom: d(30);
	}

	&__text {
		color: #ffffff;
		text-align: left;
		margin-bottom: d(72);

		span {
			display: block;
		}
	}

	&__button {
		display: flex;
		align-items: center;
		width: fit-content;
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		font-size: d(18);
		line-height: d(22);
		text-align: center;
		color: #ffffff;
		background: #212121;
		padding: d(15) d(20);
		cursor: pointer;

		svg {
			margin-right: d(16);
		}
	}
}
</style>
