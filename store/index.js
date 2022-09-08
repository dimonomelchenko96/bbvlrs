export const state = () => ({
	allMembers: false,
	roadmap: false,
	collaborations: false,
	aboutProject: false,
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
	openNavMenuToggle(state) {
		state.openNavMenu = !state.openNavMenu;
	},
	themeToggle(state, payload) {
		state.theme = payload;
	},
};

export const actions = {
	async nuxtServerInit() {},
};
