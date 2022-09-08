export const state = () => ({
	allMembers: false,
	roadmap: false,
	collaborations: false,
	aboutProject: false,
	openNavMenu: false,
	theme: "black",
	page: "",
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

	addPage(state, text) {
		state.page = text;
		console.log("123");
	},
};

export const actions = {
	nuxtServerInit(commit) {
		const ind = 1;

		commit("addPage", "123");
	},
};
