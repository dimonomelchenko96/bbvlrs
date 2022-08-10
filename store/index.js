export const state = () => ({
	allMembers: false,
	mainShow: true,
})

export const mutations = {
	hideMain(state) {
		state.mainShow = false;
	},

	allMembersToggle(state) {
		state.allMembers = !state.allMembers;
	}
}
