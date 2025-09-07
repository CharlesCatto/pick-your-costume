// import { useCostumeData } from "../hooks/useCostumeData";
// import type {
// 	Costume,
// 	CostumeCategory,
// 	CostumeDifficulty,
// 	PriceRange,
// } from "../data/costumeTypes";

// // Helper pour obtenir le nom d'une catégorie avec emoji
// export const getCategoryDisplayName = (category: CostumeCategory): string => {
// 	const categoryMap: Record<CostumeCategory, { name: string; emoji: string }> =
// 		{
// 			fantasy: { name: "Fantasy", emoji: "🧙" },
// 			horror: { name: "Horror", emoji: "👻" },
// 			movie: { name: "Movie", emoji: "🎬" },
// 			animal: { name: "Animal", emoji: "🐾" },
// 			professional: { name: "Professional", emoji: "💼" },
// 			historical: { name: "Historical", emoji: "🏛️" },
// 		};

// 	const categoryInfo = categoryMap[category];
// 	return `${categoryInfo.emoji} ${categoryInfo.name}`;
// };

// // Helper pour obtenir le nom complet de la difficulté
// export const getDifficultyDisplayName = (
// 	difficulty: CostumeDifficulty,
// ): string => {
// 	const difficultyMap: Record<CostumeDifficulty, string> = {
// 		easy: "Easy",
// 		medium: "Medium",
// 		hard: "Hard",
// 	};
// 	return difficultyMap[difficulty];
// };

// // Helper pour obtenir le nom complet de la fourchette de prix
// export const getPriceRangeDisplayName = (priceRange: PriceRange): string => {
// 	const priceMap: Record<PriceRange, { name: string; symbol: string }> = {
// 		low: { name: "Low", symbol: "$" },
// 		medium: { name: "Medium", symbol: "$$" },
// 		high: { name: "High", symbol: "$$$" },
// 		luxury: { name: "Luxury", symbol: "$$$$" },
// 	};

// 	const priceInfo = priceMap[priceRange];
// 	return `${priceInfo.symbol} ${priceInfo.name}`;
// };

// // Hook personnalisé pour les helpers de costumes
// export const useCostumeHelpers = () => {
// 	const { costumes, loading, error } = useCostumeData();

// 	// Obtenir toutes les catégories uniques
// 	const getAllCategories = (): CostumeCategory[] => {
// 		const categories = [
// 			...new Set(costumes.map((costume: Costume) => costume.category)),
// 		];
// 		return categories as CostumeCategory[];
// 	};

// 	return {
// 		costumes,
// 		loading,
// 		error,
// 		getAllCategories,
// 		getCategoryDisplayName,
// 		getDifficultyDisplayName,
// 		getPriceRangeDisplayName,
// 	};
// };
import { useCostumeData } from "../hooks/useCostumeData";
import type {
	Costume,
	CostumeCategory,
	CostumeDifficulty,
	PriceRange,
} from "../data/costumeTypes";

// Mapping complet des catégories avec emojis
export const CATEGORY_MAP: Record<string, { name: string; emoji: string }> = {
	fantasy: { name: "Fantasy", emoji: "🧙" },
	horror: { name: "Horror", emoji: "👻" },
	movie: { name: "Movie & TV", emoji: "🎬" },
	animal: { name: "Animals", emoji: "🐾" },
	professional: { name: "Professions", emoji: "💼" },
	historical: { name: "Historical", emoji: "🏛️" },
	funny: { name: "Funny", emoji: "😂" },
	holiday: { name: "Holiday", emoji: "🎄" },
} as const;

// Helper pour obtenir le nom d'une catégorie avec emoji (sécurisé)
export const getCategoryDisplayName = (category: string): string => {
	const categoryInfo = CATEGORY_MAP[category];

	// Fallback pour les catégories inconnues
	if (!categoryInfo) {
		console.warn(`Category "${category}" not found in CATEGORY_MAP`);
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
export const getPriceRangeDisplayName = (priceRange: PriceRange): string => {
	const priceMap: Record<PriceRange, { name: string; symbol: string }> = {
		low: { name: "Low", symbol: "$" },
		medium: { name: "Medium", symbol: "$$" },
		high: { name: "High", symbol: "$$$" },
		luxury: { name: "Luxury", symbol: "$$$$" },
	};

	const priceInfo = priceMap[priceRange];
	return `${priceInfo.symbol} ${priceInfo.name}`;
};

// Obtenir toutes les catégories disponibles depuis le mapping
export const getAllCategories = (): CostumeCategory[] => {
	return Object.keys(CATEGORY_MAP) as CostumeCategory[];
};

// Filtrer les costumes par catégorie
export const filterCostumesByCategory = (
	costumes: Costume[],
	category: CostumeCategory,
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
	const getUniqueCategoriesFromData = (): CostumeCategory[] => {
		const categories = [
			...new Set(costumes.map((costume: Costume) => costume.category)),
		];
		return categories as CostumeCategory[];
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

// Export des types pour une utilisation externe
export type { Costume, CostumeCategory, CostumeDifficulty, PriceRange };
