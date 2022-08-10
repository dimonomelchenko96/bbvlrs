export const state = () => ({
	mainShow: true,
	roadmap: false,
	collaborations: false,
});

export const mutations = {
	hideMain(state) {
		state.mainShow = false;
	},
	roadMapToggle(state) {
		state.roadmap = !state.roadmap;
	},
	fullVideoCollaborationsToggle(state) {
		state.collaborations = !state.collaborations;
	},
};
