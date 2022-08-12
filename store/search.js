export const state = () => ({
	popup: false,
	searchName: '',

});


export const mutations = {
	showPopup(state, payload) {
		state.popup = payload;
	},
	bindName(state, payload) {
		state.searchName = payload;
	}

};
