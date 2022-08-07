<template lang="pug">
vueCustomScrollbar.scroll-element(
	:settings="settings"
)
	slot
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
	components: {
		vueCustomScrollbar
	},
	data() {
		return {
			settings: {
				wheelSpeed: 0.3
			}
		}
	}
}
</script>

<style lang="scss">
.ps {
	overflow: hidden;
    overflow-anchor:none;
    -ms-overflow-style:none;
    touch-action:auto;
    -ms-touch-action:auto;
    position: relative;

    &__rail-x {
        display: none;
    }

    &__rail-y {
        position:absolute;
        right: 0;
    }

    &--active-y > &__rail-y {
        display:block;
    }

    &__thumb-y {
        background-color: #90EE90;
        position:absolute;
    }

	&__rail-y, &__thumb-y {
        width: m(1);
		@include desc {
			width: d(1);
		}
	}

}
</style>
