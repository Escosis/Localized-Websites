(function() {
	"use strict";

	const layer = document.getElementById("modalLayer");
	const mask = document.getElementById("modalMask");
	const closeBtn = document.getElementById("modalCloseBtn");
	const scrollEl = document.getElementById("scrollContainer");
	const scrollThumb = document.getElementById("scrollThumb");
	const modalBody = document.getElementById("modalContent");
	const trigger = document.getElementById("readmeBox");

	if (!layer || !scrollEl || !trigger) return;

	let readmeLoaded = false;
	let readmeLoading = null;
	let closing = false;
	let animTimer = null;

	function ensureMarked() {
		if (window.marked && typeof window.marked.parse === "function") {
			return Promise.resolve();
		}
		if (ensureMarked._p) return ensureMarked._p;
		ensureMarked._p = new Promise((resolve, reject) => {
			const s = document.createElement("script");
			s.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
			s.onload = () => resolve();
			s.onerror = () => reject(new Error("marked.js 加载失败"));
			document.head.appendChild(s);
		});
		return ensureMarked._p;
	}

	function updateThumb() {
		const viewH = scrollEl.clientHeight;
		const totalH = scrollEl.scrollHeight;
		if (totalH <= viewH) {
			scrollThumb.style.display = "none";
			return;
		}
		scrollThumb.style.display = "block";

		const ratio = viewH / totalH;
		const thumbH = Math.max(viewH * ratio, 32);
		const maxScroll = totalH - viewH;
		const maxThumbTop = viewH - thumbH;
		const thumbTop = maxScroll > 0 ? (scrollEl.scrollTop / maxScroll) * maxThumbTop : 0;

		scrollThumb.style.height = thumbH + "px";
		scrollThumb.style.top = thumbTop + "px";
	}

	scrollEl.addEventListener("scroll", updateThumb);
	window.addEventListener("resize", updateThumb);

	function loadReadme() {
		if (readmeLoaded) return Promise.resolve();
		if (readmeLoading) return readmeLoading;

		readmeLoading = ensureMarked()
			.then(() => fetch("./README.md", {
				cache: "no-cache"
			}))
			.then(res => {
				if (!res.ok) throw new Error("HTTP " + res.status);
				return res.text();
			})
			.then(text => {
				let html;
				if (window.marked && typeof window.marked.parse === "function") {
					html = window.marked.parse(text);
				} else {
					html = "<pre style='white-space:pre-wrap;'>" +
						text.replace(/[&<>]/g, c => ({
							"&": "&amp;",
							"<": "&lt;",
							">": "&gt;"
						} [c])) +
						"</pre>";
				}
				html += '<p class="thanks">致谢：明日方舟：终末地“活动中心”界面 UI</p>';
				modalBody.innerHTML = html;
				readmeLoaded = true;
			})
			.catch(err => {
				modalBody.innerHTML = '<div class="error">无法加载 README.md：' + err.message +
					'<br><br>请确认 README.md 与 index.html 在同一目录下，并通过 http 方式访问。</div>';
			})
			.finally(() => {
				readmeLoading = null;
			});

		return readmeLoading;
	}

	function openModal() {
		if (closing) return;
		clearTimeout(animTimer);

		layer.style.display = "";
		layer.classList.remove(
			"enter", "enter-active", "enter-done",
			"exit", "exit-active", "exit-done"
		);
		layer.classList.add("enter");

		scrollEl.scrollTop = 0;
		loadReadme().then(() => requestAnimationFrame(updateThumb));

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				layer.classList.remove("enter");
				layer.classList.add("enter-active");
				animTimer = setTimeout(() => layer.classList.add("enter-done"), 300);
			});
		});
	}

	function closeModal() {
		if (closing) return;
		if (layer.style.display === "none") return;
		closing = true;
		clearTimeout(animTimer);

		layer.classList.remove("enter-active", "enter-done");
		layer.classList.add("exit");
		requestAnimationFrame(() => layer.classList.add("exit-active"));

		animTimer = setTimeout(() => {
			layer.classList.add("exit-done");
			layer.style.display = "none";
			closing = false;
		}, 300);
	}

	trigger.addEventListener("click", (e) => {
		e.preventDefault();
		openModal();
	});
	closeBtn.addEventListener("click", closeModal);
	mask.addEventListener("click", closeModal);
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") closeModal();
	});

	window.openReadmeModal = openModal;
	window.closeReadmeModal = closeModal;
})();