export interface Costume {
	id: number;
	name: string;
	category: string;
	difficulty: string;
	price_range: string;
	description: string;
	image_url: string;
	popularity: number;
	created_at: Date;
	updated_at: Date;
}

export interface CostumeWithDetails extends Costume {
	tags: string[];
	materials: CostumeMaterial[];
}

export interface CostumeMaterial {
	material: string;
	quantity: string;
}

export interface CostumeRepository {
	findAll(): Promise<CostumeWithDetails[]>;
	findById(id: number): Promise<CostumeWithDetails | null>;
	findByCategory(category: string): Promise<CostumeWithDetails[]>;
}
