import { useCostumeData } from "../hooks/useCostumeData";
import type {
	Costume,
	CostumeCategory,
	CostumeDifficulty,
	PriceRange,
} from "../data/costumeTypes";

// Mapping complet des catégories avec emojis - METS À JOUR CET OBJET
export const CATEGORY_MAP: Record<string, { name: string; emoji: string }> = {
	fantasy: { name: "Fantasy", emoji: "🧙" },
	halloween: { name: "Halloween", emoji: "🎃" },
	horror: { name: "Horror", emoji: "👻" },
	movie: { name: "Movie & TV", emoji: "🎬" },
	animal: { name: "Animals", emoji: "🐾" },
	professional: { name: "Professions", emoji: "💼" },
	historical: { name: "Historical", emoji: "🏛️" },
	funny: { name: "Funny", emoji: "😂" },
	holiday: { name: "Holiday", emoji: "🎄" },
} as const;

// Helper sécurisé pour obtenir le nom d'une catégorie avec emoji
export const getCategoryDisplayName = (category: string): string => {
	// Vérifie d'abord si la catégorie existe dans le mapping
	const categoryInfo = CATEGORY_MAP[category];

	if (!categoryInfo) {
		// Fallback pour les catégories inconnues
		console.warn(`⚠️ Category "${category}" not found in CATEGORY_MAP`);
		return `❓ ${category.charAt(0).toUpperCase() + category.slice(1)}`;
	}

	return `${categoryInfo.emoji} ${categoryInfo.name}`;
};

// Helper pour obtenir seulement l'emoji d'une catégorie
export const getCategoryEmoji = (category: string): string => {
	const categoryInfo = CATEGORY_MAP[category];
	return categoryInfo?.emoji || "❓";
};

// Helper pour obtenir seulement le nom d'une catégorie
export const getCategoryName = (category: string): string => {
	const categoryInfo = CATEGORY_MAP[category];
	return (
		categoryInfo?.name || category.charAt(0).toUpperCase() + category.slice(1)
	);
};

// Helper pour obtenir le nom complet de la difficulté
export const getDifficultyDisplayName = (
	difficulty: CostumeDifficulty,
): string => {
	const difficultyMap: Record<CostumeDifficulty, string> = {
		easy: "Easy",
		medium: "Medium",
		hard: "Hard",
	};
	return difficultyMap[difficulty];
};

// Helper pour obtenir le nom complet de la fourchette de prix
export const getPriceRangeDisplayName = (priceRange: string): string => {
	const priceMap: Record<string, { name: string; symbol: string }> = {
		low: { name: "Low", symbol: "$" },
		medium: { name: "Medium", symbol: "$$" },
		high: { name: "High", symbol: "$$$" },
		luxury: { name: "Luxury", symbol: "$$$$" },
	};

	const priceInfo = priceMap[priceRange];

	// Fallback pour les price_range inconnus
	if (!priceInfo) {
		return `${priceRange} (unknown)`;
	}

	return `${priceInfo.symbol} ${priceInfo.name}`;
};

// Obtenir toutes les catégories disponibles depuis le mapping
export const getAllCategories = (): string[] => {
	return Object.keys(CATEGORY_MAP);
};

// Filtrer les costumes par catégorie
export const filterCostumesByCategory = (
	costumes: Costume[],
	category: string,
): Costume[] => {
	return costumes.filter((costume) => costume.category === category);
};

// Filtrer les costumes par difficulté
export const filterCostumesByDifficulty = (
	costumes: Costume[],
	difficulty: CostumeDifficulty,
): Costume[] => {
	return costumes.filter((costume) => costume.difficulty === difficulty);
};

// Filtrer les costumes par fourchette de prix
export const filterCostumesByPriceRange = (
	costumes: Costume[],
	priceRange: PriceRange,
): Costume[] => {
	return costumes.filter((costume) => costume.price_range === priceRange);
};

// Hook personnalisé pour les helpers de costumes
export const useCostumeHelpers = () => {
	const { costumes, loading, error } = useCostumeData();

	// Obtenir toutes les catégories uniques depuis les données
	const getUniqueCategoriesFromData = (): string[] => {
		const categories = [
			...new Set(costumes.map((costume: Costume) => costume.category)),
		];
		return categories;
	};

	// Obtenir le nombre de costumes par catégorie
	const getCostumeCountByCategory = (): Record<string, number> => {
		const count: Record<string, number> = {};

		costumes.forEach((costume: Costume) => {
			count[costume.category] = (count[costume.category] || 0) + 1;
		});

		return count;
	};

	return {
		costumes,
		loading,
		error,
		getAllCategories,
		getUniqueCategoriesFromData,
		getCostumeCountByCategory,
		getCategoryDisplayName,
		getCategoryEmoji,
		getCategoryName,
		getDifficultyDisplayName,
		getPriceRangeDisplayName,
		filterCostumesByCategory,
		filterCostumesByDifficulty,
		filterCostumesByPriceRange,
	};
};
