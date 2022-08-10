<template lang="pug">
About(
	v-if="aboutProject"
	@closePopup="togglePopup"
)
</template>

<script>
import About from "~/components/ui/About.vue";
import { mapState } from "vuex";

export default {
	components: {
		About,
	},

	computed: {
		...mapState({
			aboutProject: (state) => state.aboutProject,
		}),
	},

	methods: {
		togglePopup() {
			if (this.textAbout === "About Project")
				this.$store.commit("aboutProjectToggle");
			if (this.textAbout === "About Collection")
				this.$store.commit("aboutProjectToggle");
		},
	},
};
</script>
