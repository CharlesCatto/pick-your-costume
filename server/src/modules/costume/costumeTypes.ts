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

export interface CostumeMaterial {
	material: string;
	quantity?: string;
}

/**
 * Costume principal tel que renvoyé par l'API (traductions appliquées).
 */
export interface Costume {
	id: number;
	name: string;
	description: string;
	category: CostumeCategory;
	difficulty: CostumeDifficulty;
	price_range: PriceRange;
	image_url: string | null;
	popularity?: number;
	created_at: string;
	updated_at: string;
}

export interface CostumeWithDetails extends Costume {
	tags: string[];
	materials: CostumeMaterial[];
}
