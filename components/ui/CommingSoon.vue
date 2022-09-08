<template lang="pug">
.soon
	.soon__date {{event.date}}
	.soon__text
		span {{event.text}}
	a.soon__button(
			:href="event.button.link"
			target="_blank"
		)
		template
			div.soon__button__icon(
				v-html="require(`~/assets/svg/socials/${event.button.icon_slug}.svg?raw`)"
			)
			span {{event.button.text}}
	Close.soon__close(
		@click.native="closeEvent"
	)

</template>

<script>
import Close from "~/components/Team/Close";
export default {
	props: ["event"],
	components: {
		Close,
	},
	methods: {
		closeEvent() {
			this.$emit("closeEvent", false);
		},
	},
};
</script>

<style lang="scss" scoped>
.soon {
	width: 50%;
	padding: d(32);
	background-color: $lilac;
	font-family: "BBLVRS";
	font-style: normal;
	font-weight: 400;
	font-size: d(84);
	line-height: d(84);

	&__close {
		position: absolute;
		top: d(30);
		right: d(30);
	}
	&__date {
		text-align: left;
		color: $black;
		margin-bottom: d(30);
	}

	&__text {
		color: $white;
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
		color: $white;
		background: #212121;
		padding: d(15) d(20);
		cursor: url(~/assets/img/cursor-pointer.png) 2 2, pointer;

		&__icon {
			margin-right: d(16);
			svg {
				width: d(22);
				height: d(22);
			}
		}
	}
}
</style>
