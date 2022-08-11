export const state = () => ({
	allMembers: false,
	roadmap: false,
	collaborations: false,
	aboutProject: false,
	scrollInitialPage: false,
	isInitialPage: false,
});

export const mutations = {
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
	scrollInitialPage(state) {
		state.scrollInitialPage = false;
	},
	notScrollInitialPage(state) {
		state.scrollInitialPage = true;
	},
	isInitialPage(state) {
		state.isInitialPage = true;
	},
	isNotInitialPage(state) {
		state.isInitialPage = false;
	},
};
