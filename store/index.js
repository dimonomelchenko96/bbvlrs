export const state = () => ({
	allMembers: false,
	roadmap: false,
	collaborations: false,
	aboutProject: false,
	scrollInitialPage: false,
	isInitialPage: false,
	openNavMenu: false,
	theme: "black",
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
	openNavMenuToggle(state) {
		state.openNavMenu = !state.openNavMenu;
	},
	themeToggle(state, payload) {
		state.theme = payload;
	},
};
