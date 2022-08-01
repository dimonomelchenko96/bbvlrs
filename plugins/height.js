function setVH() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
}

window.addEventListener(
	"resize",
	() => {
		setTimeout(setVH, 0);
	},
	true
);

window.addEventListener("orientationchange", () => {
	setTimeout(setVH, 500);
});
