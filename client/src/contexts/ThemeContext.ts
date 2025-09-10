import { createContext } from "react";

export type Theme = "halloween" | "christmas" | "carnival";

export interface ThemeItem {
	id: Theme;
	name: string;
	emoji: string;
	color: string;
}

export interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	themes: ThemeItem[];
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined,
);
