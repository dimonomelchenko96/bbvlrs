<template lang="pug">
.logo
	include ../../assets/svg/logo-full.svg
</template>

<style lang="scss" scoped>

.logo {
	width: m(20);
	height: m(32);
	position: relative;
	overflow: hidden;
		svg {
			width: m(132);
			height: auto;
		}
}

@include desc {
	.logo {
		width: d(36);
		height: d(52);
		svg {
			width: d(215);
			height: auto;
		}
	}
}

@include hover {
	.logo {
		transition: width .25s ease;
		cursor: pointer;
		will-change: width;

		&:hover {
			width: d(215);
		}
	}
}
</style>
