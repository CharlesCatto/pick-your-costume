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
				<NavLink to="/" className={styles.navLogo} onClick={closeMobileMenu}>
					Pick your Costume
					<img
						src={logo}
						alt="logo of Pick your Costume"
						className={styles.logo}
					/>
					<i className="fas fa-code" />
				</NavLink>

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
										? `${styles.navLinks} ${styles.active}`
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

				{/* Conteneur pour les boutons d'actions */}
				<div className={styles.navActions}>
					{/* Bouton de langue */}
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

					{/* Sélecteur de thème */}
					<ThemeSelector />
				</div>

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
