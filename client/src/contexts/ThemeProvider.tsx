import type React from "react";
import { useState, useEffect, type ReactNode } from "react";
import {
	ThemeContext,
	type ThemeContextType,
	type Theme,
} from "./ThemeContext";

const THEMES = [
	{ id: "halloween" as Theme, name: "Halloween", emoji: "🎃" },
	{ id: "christmas" as Theme, name: "Noël", emoji: "🎄" },
	{ id: "carnival" as Theme, name: "Carnaval", emoji: "🎭" },
];

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("halloween");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as Theme;
		if (savedTheme && THEMES.some((t) => t.id === savedTheme)) {
			setTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const value: ThemeContextType = {
		theme,
		setTheme,
		themes: THEMES,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
