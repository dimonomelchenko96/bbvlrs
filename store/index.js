export const state = () => ({
	allMembers: false,
	roadmap: false,
	collaborations: false,
	aboutProject: false,
	openNavMenu: false,
	theme: "black",

	page: null,
	booksResp: null,
	firstChapterText: null,
	firstChapters: null,
	characters: null,
	firstBookChapters: null,
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
	addPage(state, payload) {
		state.page = payload;
	},
	addBooksResp(state, payload) {
		state.booksResp = payload;
	},

	addFirstChapterText(state, payload) {
		state.firstChapterText = payload;
	},

	addFirstChapters(state, payload) {
		state.firstChapters = payload;
	},

	addCharacters(state, payload) {
		state.characters = payload;
	},
	addFirstBookChapters(state, payload) {
		state.firstBookChapters = payload;
	},
};
