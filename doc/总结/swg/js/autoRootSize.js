window.addEventListener("resize", (function () {
	document.documentElement.style.fontSize = (document.body.clientWidth / 490/*根据设计稿*/) * 100 + "px";
	return arguments.callee
})(), false);