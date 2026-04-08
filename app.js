document.addEventListener("DOMContentLoaded", () => {
	AOS.init({
		once: false,
		duration: 800,
		easing: "ease-out-cubic",
	});

	initThemeToggle();
	initMobileNav();
	initPortfolioFilter();
	initPortfolioModal();
	initActiveSectionObserver();
});

function initThemeToggle() {
	const root = document.documentElement;
	const button = document.getElementById("themeToggle");
	if (!button) return;

	const getTheme = () => root.getAttribute("data-theme") || "light";

	const syncButton = (theme) => {
		const isLight = theme === "light";
		button.innerHTML = isLight
			? '<i class="fas fa-moon"></i>'
			: '<i class="fas fa-sun"></i>';
		button.setAttribute(
			"aria-label",
			isLight ? "Switch to dark theme" : "Switch to light theme"
		);
		button.setAttribute(
			"title",
			isLight ? "Switch to dark theme" : "Switch to light theme"
		);
	};

	syncButton(getTheme());

	button.addEventListener("click", () => {
		const nextTheme = getTheme() === "light" ? "dark" : "light";
		root.classList.add("theme-switching");
		root.setAttribute("data-theme", nextTheme);
		localStorage.setItem("portfolio-theme", nextTheme);
		syncButton(nextTheme);

		window.setTimeout(() => {
			root.classList.remove("theme-switching");
		}, 350);
	});
}

function initMobileNav() {
	const toggleButton = document.querySelector(".nav-toggle");
	const navList = document.querySelector(".navbar ul");
	if (!toggleButton || !navList) return;

	const closeMenu = () => {
		navList.classList.remove("is-open");
		toggleButton.setAttribute("aria-expanded", "false");
	};

	toggleButton.addEventListener("click", () => {
		const isOpen = navList.classList.toggle("is-open");
		toggleButton.setAttribute("aria-expanded", String(isOpen));
	});

	navList.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", closeMenu);
	});

	document.addEventListener("click", (event) => {
		if (!navList.classList.contains("is-open")) return;
		const target = event.target;
		if (
			target instanceof Node &&
			!navList.contains(target) &&
			!toggleButton.contains(target)
		) {
			closeMenu();
		}
	});
}

function initPortfolioFilter() {
	const buttons = document.querySelectorAll(".categories button");
	const items = document.querySelectorAll(".portfolio-item");
	if (!buttons.length || !items.length) return;
	const HIDE_DURATION = 280;

	items.forEach((item) => {
		item.classList.remove("hide", "is-hidden");
		item.classList.add("show");
	});

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const selected = button.getAttribute("data-category") || "all";

			buttons.forEach((btn) => btn.classList.remove("active"));
			button.classList.add("active");

			items.forEach((item) => {
				const itemCategory = item.getAttribute("data-category");
				const shouldShow = selected === "all" || selected === itemCategory;

				if (item.hideTimer) {
					window.clearTimeout(item.hideTimer);
					item.hideTimer = null;
				}

				if (shouldShow) {
					item.classList.remove("is-hidden", "hide");
					window.requestAnimationFrame(() => {
						item.classList.add("show");
					});
				} else {
					item.classList.remove("show");
					item.classList.add("hide");
					item.hideTimer = window.setTimeout(() => {
						item.classList.add("is-hidden");
						item.hideTimer = null;
					}, HIDE_DURATION);
				}
			});
		});
	});
}

function initPortfolioModal() {
	const modal = document.getElementById("imageModal");
	if (!modal) return;

	const modalImages = modal.querySelector(".modal-images");
	const closeButton = modal.querySelector(".close");
	const viewButtons = document.querySelectorAll(".hover-overlay .icon");
	if (!modalImages || !closeButton || !viewButtons.length) return;

	const closeModal = () => {
		modal.classList.remove("is-open");
		modalImages.innerHTML = "";
	};

	viewButtons.forEach((icon) => {
		icon.addEventListener("click", () => {
			const portfolioItem = icon.closest(".portfolio-item");
			if (!portfolioItem) return;

			const image1Src = portfolioItem.querySelector("img")?.src;
			const image2Src = portfolioItem.getAttribute("data-image2");
			if (!image1Src) return;

			modalImages.innerHTML = "";

			const imagePrimary = document.createElement("img");
			imagePrimary.src = image1Src;
			imagePrimary.alt = "Portfolio preview";
			modalImages.appendChild(imagePrimary);

			if (image2Src && image2Src.trim()) {
				const imageSecondary = document.createElement("img");
				imageSecondary.src = image2Src;
				imageSecondary.alt = "Portfolio detail preview";
				modalImages.appendChild(imageSecondary);
			}

			modal.classList.add("is-open");
		});
	});

	closeButton.addEventListener("click", closeModal);
	modal.addEventListener("click", (event) => {
		if (event.target === modal) closeModal();
	});
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") closeModal();
	});
}

function initActiveSectionObserver() {
	const sections = document.querySelectorAll("section[id]");
	if (!sections.length) return;
	const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
	if (!navLinks.length) return;

	const getOffset = () => {
		const header = document.getElementById("header");
		return (header?.offsetHeight || 0) + 28;
	};

	const setActiveLink = (id) => {
		navLinks.forEach((link) => {
			const target = link.getAttribute("href");
			link.classList.toggle("active", target === `#${id}`);
		});
	};

	const resolveCurrentSection = () => {
		const scrollPosition = window.scrollY + getOffset();
		let currentId = sections[0].getAttribute("id");

		sections.forEach((section) => {
			if (scrollPosition >= section.offsetTop) {
				currentId = section.getAttribute("id");
			}
		});

		const nearPageBottom =
			window.innerHeight + window.scrollY >=
			document.documentElement.scrollHeight - 2;
		if (nearPageBottom) {
			currentId = sections[sections.length - 1].getAttribute("id");
		}

		return currentId;
	};

	let ticking = false;
	const onScroll = () => {
		if (ticking) return;
		ticking = true;
		window.requestAnimationFrame(() => {
			const currentId = resolveCurrentSection();
			if (currentId) setActiveLink(currentId);
			ticking = false;
		});
	};

	window.addEventListener("scroll", onScroll, { passive: true });
	window.addEventListener("resize", onScroll);
	onScroll();
}
