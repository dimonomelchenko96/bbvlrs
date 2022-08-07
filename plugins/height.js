function setVH(timeout = 0) {
	setTimeout(() => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	}, timeout);
};

window.addEventListener("resize", () => setVH(), true);
window.addEventListener("orientationchange", () => setVH(500));

setVH();
