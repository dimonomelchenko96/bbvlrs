export const state = () => ({
	mainShow: true
})

export const mutations = {
	hideMain(state) {
		state.mainShow = false;
	}
}
