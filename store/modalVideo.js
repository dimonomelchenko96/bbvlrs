export const state = () => ({
	showVideo: false,
	iframeVideo: "",
	iframeInitial: "",
});

export const mutations = {
	showVideoTogle(state) {
		state.showVideo = !state.showVideo;
	},
	iframeVideoToggle(state, payload) {
		state.iframeVideo = payload;
	},
	iframeAddStore(state, payload) {
		state.iframeInitial = payload;
	},
	closeVideo(state) {
		state.iframeVideo = "";
	},
};
