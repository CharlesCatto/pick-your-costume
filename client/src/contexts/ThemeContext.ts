import { createContext } from "react";

export type Theme = "halloween" | "christmas" | "carnival";

export interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	themes: { id: Theme; name: string; emoji: string }[];
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined,
);
