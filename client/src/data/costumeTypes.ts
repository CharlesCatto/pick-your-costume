export type CostumeCategory =
	| "fantasy"
	| "horror"
	| "movie"
	| "animal"
	| "professional"
	| "historical";

export type CostumeDifficulty = "easy" | "medium" | "hard";
export type PriceRange = "low" | "medium" | "high" | "luxury";

export interface Costume {
	id: number;
	name: string;
	category: CostumeCategory;
	difficulty: CostumeDifficulty;
	price_range: PriceRange;
	description: string;
	image_url: string;
	tags: string[];
	popularity: number;
	created_at: string;
	updated_at: string;
}

export interface CostumeFilters {
	categories?: CostumeCategory[];
	difficulties?: CostumeDifficulty[];
	priceRanges?: PriceRange[];
	tags?: string[];
	searchQuery?: string;
}
