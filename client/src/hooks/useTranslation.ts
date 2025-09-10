import { translations } from "../data/translations";
import { useLanguage } from "./useLanguage";

type TranslationValue = string | { [key: string]: TranslationValue };

export const useTranslation = () => {
	const { language } = useLanguage();

	/**
	 * t function with optional interpolation.
	 * @param key - The translation key, e.g., "home.title"
	 * @param variables - Optional variables to replace in the string, e.g., { count: 3 }
	 */
	const t = (
		key: string,
		variables?: Record<string, string | number>,
	): string => {
		const keys = key.split(".");
		let value: TranslationValue = translations[language];

		// Navigate through nested keys
		for (const k of keys) {
			if (value && typeof value === "object" && k in value) {
				value = value[k];
			} else {
				console.warn(`Translation key not found: ${key}`);
				return key;
			}
		}

		// Ensure the value is a string
		if (typeof value !== "string") {
			console.warn(`Translation value is not a string: ${key}`);
			return key;
		}

		// If there are variables, replace them in the string
		if (variables) {
			return Object.entries(variables).reduce(
				(str, [variableKey, variableValue]) =>
					str.replace(
						new RegExp(`{${variableKey}}`, "g"),
						variableValue.toString(),
					),
				value,
			);
		}

		return value;
	};

	return { t, language };
};
