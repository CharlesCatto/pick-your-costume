import pool from "../../database/client";
import type {
	CostumeWithDetails,
	CostumeCategory,
	CostumeDifficulty,
	PriceRange,
} from "./costumeTypes";

export const costumeRepository = {
	// Récupère tous les costumes
	async findAll(lang = "en"): Promise<CostumeWithDetails[]> {
		const sql = `
			SELECT
				c.id,
				c.category,
				c.difficulty,
				c.price_range,
				c.image_url,
				c.popularity,
				c.created_at,
				c.updated_at,
				t.name,
				t.description,
				COALESCE(array_agg(DISTINCT ct.tag) FILTER (WHERE ct.tag IS NOT NULL), '{}') AS tags,
				COALESCE(json_agg(DISTINCT jsonb_build_object('material', cm.material, 'quantity', cm.quantity))
				 FILTER (WHERE cm.material IS NOT NULL), '[]') AS materials
			FROM costumes c
			LEFT JOIN costume_translations t ON c.id = t.costume_id AND t.language_code = $1
			LEFT JOIN costume_tags ct ON c.id = ct.costume_id
			LEFT JOIN costume_materials cm ON c.id = cm.costume_id
			GROUP BY c.id, t.name, t.description
			ORDER BY c.id;
		`;

		const { rows } = await pool.query(sql, [lang]);
		return rows as CostumeWithDetails[];
	},

	// Costume par ID
	async findById(id: number, lang = "en") {
		const sql = `
			SELECT
				c.id,
				c.category,
				c.difficulty,
				c.price_range,
				c.image_url,
				c.popularity,
				c.created_at,
				c.updated_at,
				t.name,
				t.description,
				COALESCE(array_agg(DISTINCT ct.tag) FILTER (WHERE ct.tag IS NOT NULL), '{}') AS tags,
				COALESCE(json_agg(DISTINCT jsonb_build_object('material', cm.material, 'quantity', cm.quantity))
				 FILTER (WHERE cm.material IS NOT NULL), '[]') AS materials
			FROM costumes c
			LEFT JOIN costume_translations t ON c.id = t.costume_id AND t.language_code = $1
			LEFT JOIN costume_tags ct ON c.id = ct.costume_id
			LEFT JOIN costume_materials cm ON c.id = cm.costume_id
			WHERE c.id = $2
			GROUP BY c.id, t.name, t.description;
		`;

		const { rows } = await pool.query(sql, [lang, id]);
		return rows[0] || null;
	},

	// Costumes par catégorie
	async findByCategory(category: string, lang = "en") {
		const sql = `
			SELECT
				c.id,
				c.category,
				c.difficulty,
				c.price_range,
				c.image_url,
				c.popularity,
				c.created_at,
				c.updated_at,
				t.name,
				t.description,
				COALESCE(array_agg(DISTINCT ct.tag) FILTER (WHERE ct.tag IS NOT NULL), '{}') AS tags,
				COALESCE(json_agg(DISTINCT jsonb_build_object('material', cm.material, 'quantity', cm.quantity))
				 FILTER (WHERE cm.material IS NOT NULL), '[]') AS materials
			FROM costumes c
			LEFT JOIN costume_translations t ON c.id = t.costume_id AND t.language_code = $1
			LEFT JOIN costume_tags ct ON c.id = ct.costume_id
			LEFT JOIN costume_materials cm ON c.id = cm.costume_id
			WHERE c.category = $2
			GROUP BY c.id, t.name, t.description
			ORDER BY c.id;
		`;

		const { rows } = await pool.query(sql, [lang, category]);
		return rows as CostumeWithDetails[];
	},
};
