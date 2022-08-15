export const state = () => ({
	socials: {},
});

export const mutations = {
	addSocialStore(state, payload) {
		state.socials = payload;
	},
};
