import { useCostumeData } from "../hooks/useCostumeData";
import type {
	Costume,
	CostumeCategory,
	CostumeDifficulty,
	PriceRange,
} from "../data/costumeTypes";

// Helper pour obtenir le nom d'une catégorie avec emoji
export const getCategoryDisplayName = (category: CostumeCategory): string => {
	const categoryMap: Record<CostumeCategory, { name: string; emoji: string }> =
		{
			fantasy: { name: "Fantasy", emoji: "🧙" },
			horror: { name: "Horror", emoji: "👻" },
			movie: { name: "Movie", emoji: "🎬" },
			animal: { name: "Animal", emoji: "🐾" },
			professional: { name: "Professional", emoji: "💼" },
			historical: { name: "Historical", emoji: "🏛️" },
		};

	const categoryInfo = categoryMap[category];
	return `${categoryInfo.emoji} ${categoryInfo.name}`;
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

// Hook personnalisé pour les helpers de costumes
export const useCostumeHelpers = () => {
	const { costumes, loading, error } = useCostumeData();

	// Obtenir toutes les catégories uniques
	const getAllCategories = (): CostumeCategory[] => {
		const categories = [
			...new Set(costumes.map((costume: Costume) => costume.category)),
		];
		return categories as CostumeCategory[];
	};

	return {
		costumes,
		loading,
		error,
		getAllCategories,
		getCategoryDisplayName,
		getDifficultyDisplayName,
		getPriceRangeDisplayName,
	};
};
