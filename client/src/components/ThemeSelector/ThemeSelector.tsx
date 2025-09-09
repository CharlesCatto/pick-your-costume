import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../contexts/useTheme";
import type { Theme } from "../../contexts/ThemeContext";
import styles from "./ThemeSelector.module.css";

const ThemeSelector: React.FC = () => {
	const { theme, setTheme, themes } = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const handleThemeChange = (newTheme: Theme) => {
		setTheme(newTheme);
		setIsOpen(false);
	};

	const currentTheme = themes.find((t) => t.id === theme);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className={styles.themeSelector}>
			<button
				type="button"
				className={styles.triggerButton}
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Changer le thème"
			>
				<span className={styles.themeEmoji}>{currentTheme?.emoji}</span>
				<span className={styles.themeName}>{currentTheme?.name}</span>
				<span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
			</button>

			{isOpen && (
				<div className={styles.dropdown}>
					{themes.map((themeOption) => (
						<button
							type="button"
							key={themeOption.id}
							className={`${styles.themeOption} ${theme === themeOption.id ? styles.active : ""}`}
							onClick={() => handleThemeChange(themeOption.id)}
						>
							<span className={styles.optionEmoji}>{themeOption.emoji}</span>
							<span className={styles.optionName}>{themeOption.name}</span>
							{theme === themeOption.id && (
								<span className={styles.checkmark}>✓</span>
							)}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default ThemeSelector;
