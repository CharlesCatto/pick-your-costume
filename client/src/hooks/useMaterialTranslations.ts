import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import {
	materialTranslations,
	type MaterialKey,
} from "../data/materialTranslations";

export function useMaterialTranslation() {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error(
			"useMaterialTranslation must be used within a LanguageProvider",
		);
	}

	const { language } = context;

	const translateMaterial = (materialKey: string): string => {
		return (
			materialTranslations[language]?.[materialKey as MaterialKey] ||
			materialKey
		);
	};

	return { translateMaterial };
}
