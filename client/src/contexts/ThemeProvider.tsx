import type React from "react";
import { useState, useEffect, type ReactNode } from "react";
import {
	ThemeContext,
	type ThemeContextType,
	type Theme,
	type ThemeItem,
} from "./ThemeContext";

const THEMES: ThemeItem[] = [
	{ id: "halloween", name: "Halloween", emoji: "🎃", color: "#FF7518" },
	{ id: "christmas", name: "Christmas", emoji: "🎄", color: "#00FF00" },
	{ id: "carnival", name: "Carnival", emoji: "🎭", color: "#FF00FF" },
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
