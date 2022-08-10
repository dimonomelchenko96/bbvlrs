export const state = () => ({
	allMembers: false,
	mainShow: true,
	roadmap: false,
	collaborations: false,
	aboutProject: false,
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
	aboutProjectToggle(state) {
		state.aboutProject = !state.aboutProject;
	},

	allMembersToggle(state) {
		state.allMembers = !state.allMembers;
	},
};
