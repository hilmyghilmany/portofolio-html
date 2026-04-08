const EDUCATION_DATA = [
	{
		status: "active",
		school: "MAN 1 Gresik",
		year: "2017 - 2020",
		degree: "High School Education",
		detail:
			"I learned the fundamental concepts of life that laid the foundation for both my personal and academic growth. This included critical thinking, problem-solving skills, and a strong understanding of the world around me. It was here that I developed a curiosity for technology and innovation.",
	},
	{
		status: "active",
		school: "UIN Maulana Malik Ibrahim Malang",
		year: "2020 - 2024",
		degree: "Bachelor of Informatics Engineering",
		detail:
			"I focused on mastering web development technologies, including HTML, CSS, JavaScript, and various backend frameworks. Through hands-on projects, I’ve gained expertise in designing responsive, user-friendly websites.",
	},
];

const EXPERIENCE_DATA = [
	{
		status: "active",
		company: "Trojan Production",
		year: "2022 - Present",
		role: "Lighting Designer",
		detail:
			"Arrange the crew to set up the lighting in the appropriate locations, as well as arrange the lighting design to enhance the beauty of the event. Operate the lighting console to ensure it aligns with the desired emotions or atmosphere by changing colors and manipulating specific effects.",
	},
	{
		status: "inactive",
		company: "Just Tech Smart 2",
		year: "2023 - 2023",
		role: "Frontend Web Developer",
		detail:
			"Create a website according to the design available in Figma, then implement it into a website using the Laravel framework and PHP programming language.",
	},
	{
		status: "active",
		company: "HLA12 Studio",
		year: "2024 - Present",
		role: "Frontend Web Developer",
		detail:
			"Develop the Xendit payment gateway feature on WordPress for the Masterclass Saham website, improve performance on the Sewakantorcbd website to ensure faster and more efficient loading times, and carry out the website revamp project for PDaja Bank Sampoerna to create a more polished and user-friendly design.",
	},
];

const PORTFOLIO_DATA = [
	{
		status: "inactive",
		category: "web developer",
		image: "img/arbitech.webp",
		image2: "img/arbitech2.webp",
		url: "",
		title: "Arbitech",
		description:
			"Designed and built a responsive company website aligned with brand guidelines and usability goals.",
	},
	{
		status: "active",
		category: "web developer",
		image: "img/justtech.webp",
		image2: "img/justtech2.webp",
		url: "",
		title: "Just Tech Smart 2",
		description:
			"Implemented modern frontend pages from design files with clean structure and consistent interactions.",
	},
	{
		status: "active",
		category: "web developer",
		image: "img/tigerpepe.webp",
		url: "",
		title: "Tiger Pepe",
		description:
			"Delivered a clear promotional landing page focused on fast comprehension and mobile-first readability.",
	},
	{
		status: "active",
		category: "web developer",
		image: "img/sdnsekarpuro.webp",
		url: "",
		title: "SDN Sekarpuro",
		description:
			"Built a school information website during KKN to improve public communication and digital presence.",
	},
	{
		status: "active",
		category: "web developer",
		image: "img/masterclasssaham.webp",
		url: "https://www.masterclasssaham.com",
		title: "Masterclass Saham",
		description:
			"Enhanced WordPress frontend components and integrated Xendit payment flow for reliable transactions.",
	},
	{
		status: "active",
		category: "web developer",
		image: "img/sewakantorcbd.webp",
		url: "https://www.sewakantorcbd.com",
		title: "SewakantorCBD",
		description:
			"Optimized page performance to reduce load times and improve overall browsing experience.",
	},
	{
		status: "active",
		category: "web developer",
		image: "img/pdaja.webp",
		url: "https://www.pdaja.com",
		title: "PDaja Bank Sampoerna",
		description:
			"Contributed to platform revamp by improving backend form workflows and integrating updated frontend modules.",
	},
	{
		status: "active",
		category: "web developer",
		image: "img/totalenviro.png",
		url: "https://cms.pelatihanbnsp.id/auth/login",
		title: "CMS Total Enviro",
		description:
			"Built a CMS for Total Enviro Solusindo using Next.js to manage users enrolled in BNSP training and their certificates.",
	},
	{
		status: "active",
		category: "web developer",
		image: "img/topupid.png",
		url: "https://topup.id",
		title: "Topup.id",
		description:
			"Built Topup.id client and admin frontends with Next.js for game top-up transactions.",
	},
	{
		status: "active",
		category: "web developer",
		image: "img/mokos.png",
		url: "https://mokos.id",
		title: "Mokos",
		description:
			"Built a website to promote kost properties and improve online visibility.",
	},

	{
		status: "active",
		category: "lighting designer",
		image: "img/muspar.webp",
		url: "",
		title: "Musik Parkir 2024",
		description:
			"Created stage lighting concepts and live cues for a high-energy campus music showcase.",
	},
	{
		status: "active",
		category: "lighting designer",
		image: "img/accountingfest.webp",
		url: "",
		title: "Accounting Fest Polinema 2024",
		description:
			"Designed visual lighting sequences for a major annual student festival with guest performers.",
	},
	{
		status: "active",
		category: "lighting designer",
		image: "img/TDOK.webp",
		url: "",
		title: "The Day of Kommust",
		description:
			"Handled show lighting for Kommust’s anniversary event, balancing atmosphere and stage visibility.",
	},
	{
		status: "active",
		category: "lighting designer",
		image: "img/standup.webp",
		url: "",
		title: "Stand Up Comedy",
		description:
			"Programmed focused cue transitions for comedy performances to support timing and audience engagement.",
	},
	{
		status: "active",
		category: "lighting designer",
		image: "img/kommuststage.webp",
		url: "",
		title: "Kommust Stage 2",
		description:
			"Produced dynamic concert lighting for a student-organized live music event featuring local artists.",
	},
	{
		status: "active",
		category: "lighting designer",
		image: "img/partilibur.webp",
		url: "",
		title: "Parti Libur Lumajang",
		description:
			"Executed concert lighting operations for multi-act performances, including guest national talent.",
	},
	{
		status: "active",
		category: "lighting designer",
		image: "img/malangmods.webp",
		url: "",
		title: "Malang Mods",
		description:
			"Delivered event lighting design for the annual Malang Mods stage featuring nationally recognized acts.",
	},
	{
		status: "active",
		category: "lighting designer",
		image: "img/danilla.jpg",
		url: "",
		title: "Jambore Jazz Kampus",
		description:
			"Designing and operatoring lighting in Jambore Jazz Kampus Malang with artist Danilla.",
	}
];

function isDataActive(item) {
	return (item.status || "active").toLowerCase() === "active";
}

document.addEventListener("DOMContentLoaded", () => {
	renderSectionData();

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

function renderSectionData() {
	const educationTimeline = document.getElementById("educationTimeline");
	const experienceTimeline = document.getElementById("experienceTimeline");
	const portfolioGrid = document.getElementById("portfolioGrid");

	if (educationTimeline) {
		educationTimeline.innerHTML = EDUCATION_DATA.filter(isDataActive).map(
			(item, index) => `
				<article class="timeline-item education-item" data-aos="fade-up" data-aos-delay="${index * 100}">
					<div class="timeline-left edu-left">
						<h3>${item.school}</h3>
						<p class="timeline-year edu-year">${item.year}</p>
					</div>
					<div class="timeline-dot edu-dot"></div>
					<div class="timeline-right edu-right">
						<h4>${item.degree}</h4>
						<p>${item.detail}</p>
					</div>
				</article>
			`
		).join("");
	}

	if (experienceTimeline) {
		experienceTimeline.innerHTML = EXPERIENCE_DATA.filter(isDataActive).map(
			(item, index) => `
				<article class="timeline-item experience-item" data-aos="fade-up" data-aos-delay="${index * 100}">
					<div class="timeline-left exp-left">
						<h3>${item.company}</h3>
						<p class="timeline-year exp-year">${item.year}</p>
					</div>
					<div class="timeline-dot exp-dot"></div>
					<div class="timeline-right exp-right">
						<h4>${item.role}</h4>
						<p>${item.detail}</p>
					</div>
				</article>
			`
		).join("");
	}

	if (portfolioGrid) {
		portfolioGrid.innerHTML = PORTFOLIO_DATA.filter(isDataActive).map((item) => {
			const categoryLabel = item.category.toUpperCase();
			const image2 = item.image2 ? `data-image2="${item.image2}"` : "";
			const hasUrl = Boolean(item.url && item.url.trim());
			const linkButton = hasUrl
				? `<a class="icon portfolio-link-btn" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="Go to ${item.title}"><i class="fas fa-arrow-up-right-from-square"></i></a>`
				: "";

			return `
				<div class="portfolio-item" data-category="${item.category}" ${image2}>
					<img src="${item.image}" alt="${item.title}" />
					<div class="hover-overlay">
						<button class="icon view-image-btn" type="button" aria-label="View image ${item.title}">
							<i class="fas fa-eye"></i>
						</button>
						${linkButton}
					</div>
					<div class="content">
						<div class="category">${categoryLabel}</div>
						<h3>${item.title}</h3>
						<p>${item.description}</p>
					</div>
				</div>
			`;
		}).join("");
	}
}

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
	const viewButtons = document.querySelectorAll(".hover-overlay .view-image-btn");
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
