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
				wheelPropagation: false,
				swipeEasing: false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.scroll-element.ps {
    overflow-anchor:none;
    -ms-overflow-style:none;
    touch-action:auto;
    -ms-touch-action:auto;
    position: relative;

    .ps__rail-x {
        display: none;
    }

    .ps__rail-y {
        transition:background-color .2s linear,opacity .2s linear;
        -webkit-transition:background-color .2s linear,opacity .2s linear;
        position:absolute;
        width:.8rem;
        right: .2rem;
        background-color: #1A1A1A;
    }

    .ps--active-y > .ps__rail-y {
        display:block;
    }

    .ps__thumb-y {
        background-color: #429D76;
        width: 1.2rem;
        position:absolute;
        right: -.2rem;
    }
}
</style>
