import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../data/translations";
import ThemeSelector from "../ThemeSelector/ThemeSelector";

const NavBar = () => {
	const [click, setClick] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);
	const { language, toggleLanguage } = useLanguage();

	const handleClick = () => setClick((prev) => !prev);
	const closeMobileMenu = () => setClick(false);

	// Fermer le menu si clic à l'extérieur
	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setClick(false);
			}
		};

		if (click) {
			document.addEventListener("mousedown", handleOutsideClick);
		} else {
			document.removeEventListener("mousedown", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [click]);

	const navItems = [
		{ path: "/", label: translations[language].navbar.home },
		{ path: "/costumes", label: translations[language].navbar.costumes },
		{ path: "/about", label: translations[language].navbar.about },
		{ path: "/categories", label: translations[language].navbar.categories },
	];

	return (
		<nav
			className={styles.navbar}
			style={{
				background: "var(--navbar-gradient)",
			}}
		>
			<div className={styles.navContainer} ref={navRef}>
				{/* Brand (avec texte + logo) */}
				<NavLink
					to="/"
					className={styles.navLogo}
					onClick={closeMobileMenu}
					aria-label="Pick your Costume - Home"
				>
					{/* Texte normal, masqué sur très petits écrans via CSS */}
					<span className={styles.brandFull}>Pick your Costume</span>
					{/* Abrégé visible uniquement sur mobile (CSS contrôle l’affichage) */}
					<span className={styles.brandShort}>PYC</span>
					<img
						src={logo}
						alt="Pick your Costume logo"
						className={styles.logo}
					/>
				</NavLink>

				{/* Menu principal */}
				<ul
					className={
						click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
					}
				>
					{navItems.map((item) => (
						<li key={item.path} className={styles.navItem}>
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									isActive
										? `${styles.navLinks} ${styles.linkActive}`
										: styles.navLinks
								}
								onClick={closeMobileMenu}
								end
							>
								{item.label}
							</NavLink>
						</li>
					))}
				</ul>

				{/* Actions (langue + thème) */}
				<div className={styles.navActions}>
					<button
						type="button"
						onClick={toggleLanguage}
						className={styles.langButton}
						aria-label={
							language === "en" ? "Switch to French" : "Passer en Anglais"
						}
					>
						{language === "en" ? "🇫🇷" : "🇬🇧"}
					</button>

					<ThemeSelector />
				</div>

				{/* Burger menu (mobile) */}
				<button
					type="button"
					className={`${styles.navIcon} ${click ? styles.open : ""}`}
					onClick={handleClick}
					aria-label={click ? "Fermer le menu" : "Ouvrir le menu"}
				>
					<span />
					<span />
					<span />
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
