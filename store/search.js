export const state = () => ({
	popup: false,
	searchName: '',
	loading: false,
	loadingChapter: false,
});


export const mutations = {
	showPopup(state, payload) {
		state.popup = payload;
	},
	bindName(state, payload) {
		state.searchName = payload;
	},
	showPreloader(state) {
		state.loading = !state.loading;
	},

	showPreloaderChapter(state) {
		state.loadingChapter = !state.loadingChapter;
	},
};
