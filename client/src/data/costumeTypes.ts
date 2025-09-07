export type CostumeCategory =
	| "fantasy"
	| "horror"
	| "movie"
	| "animal"
	| "professional"
	| "historical"
	| "funny"
	| "holiday";

export type CostumeDifficulty = "easy" | "medium" | "hard";
export type PriceRange = "low" | "medium" | "high" | "luxury";

export interface Material {
	material: string;
	quantity?: string;
}

export interface Costume {
	id: number;
	name: string;
	category: CostumeCategory;
	difficulty: CostumeDifficulty;
	price_range: PriceRange;
	description: string;
	image_url: string;
	popularity?: number;
	tags?: string[];
	materials?: Material[];
	created_at?: string;
	updated_at?: string;
}

// Pour les réponses API
export interface ApiResponse<T> {
	data: T;
	message?: string;
	error?: string;
}

// Pour les filtres
export interface CostumeFilters {
	categories?: CostumeCategory[];
	difficulties?: CostumeDifficulty[];
	priceRanges?: PriceRange[];
	searchTerm?: string;
}
