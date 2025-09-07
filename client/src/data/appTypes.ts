// Types pour le thème
export type ThemeName = "halloween" | "christmas" | "carnival";

// Types pour les traductions
export type Language = "en" | "fr";

// Types pour la navigation
export interface NavItem {
	path: string;
	label: string;
	icon?: string;
	requiresAuth?: boolean;
}
