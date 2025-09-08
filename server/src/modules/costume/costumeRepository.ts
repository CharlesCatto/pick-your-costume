import type { RowDataPacket } from "mysql2";
import connection from "../../database/client";
import type {
	CostumeWithDetails,
	CostumeCategory,
	CostumeDifficulty,
	PriceRange,
} from "./costumeTypes";

type DBRow = RowDataPacket & {
	id: number;
	category: string;
	difficulty: string;
	price_range: string;
	image_url: string | null;
	popularity: number | null;
	created_at: string | Date | null;
	updated_at: string | Date | null;
	name?: string | null;
	description?: string | null;
	tags?: string | null;
	materials?: string | null;
};

const mapRowToCostume = (row: DBRow): CostumeWithDetails => {
	const materialsArr =
		row.materials && row.materials.length > 0
			? String(row.materials)
					.split(",")
					.map((m) => {
						const [material, quantity] = m.split("|||");
						return { material, quantity: quantity ?? undefined };
					})
			: [];

	return {
		id: row.id,
		name: row.name || "Unknown Costume",
		description: row.description || "No description available",
		category: row.category as CostumeCategory,
		difficulty: row.difficulty as CostumeDifficulty,
		price_range: row.price_range as PriceRange,
		image_url: row.image_url ?? null,
		popularity: Number(row.popularity ?? 0),
		created_at: row.created_at ? String(row.created_at) : "",
		updated_at: row.updated_at ? String(row.updated_at) : "",
		tags: row.tags && row.tags.length > 0 ? String(row.tags).split(",") : [],
		materials: materialsArr,
	};
};

export const costumeRepository = {
	// tous les costumes
	async findAll(lang = "en") {
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
        t.name AS name,
        t.description AS description,
        GROUP_CONCAT(DISTINCT ct.tag) AS tags,
        GROUP_CONCAT(DISTINCT CONCAT(cm.material, '|||', cm.quantity)) AS materials
      FROM costumes c
      LEFT JOIN costume_translations t ON c.id = t.costume_id AND t.language_code = ?
      LEFT JOIN costume_tags ct ON c.id = ct.costume_id
      LEFT JOIN costume_materials cm ON c.id = cm.costume_id
      GROUP BY 
        c.id, c.category, c.difficulty, c.price_range, c.image_url, 
        c.popularity, c.created_at, c.updated_at, t.name, t.description
      ORDER BY c.id
    `;

		const [rows] = await (await connection).execute<RowDataPacket[]>(sql, [
			lang,
		]);
		return (rows as DBRow[]).map(mapRowToCostume);
	},

	// costume par ID
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
        t.name AS name,
        t.description AS description,
        GROUP_CONCAT(DISTINCT ct.tag) AS tags,
        GROUP_CONCAT(DISTINCT CONCAT(cm.material, '|||', cm.quantity)) AS materials
      FROM costumes c
      LEFT JOIN costume_translations t ON c.id = t.costume_id AND t.language_code = ?
      LEFT JOIN costume_tags ct ON c.id = ct.costume_id
      LEFT JOIN costume_materials cm ON c.id = cm.costume_id
      WHERE c.id = ?
      GROUP BY 
        c.id, c.category, c.difficulty, c.price_range, c.image_url, 
        c.popularity, c.created_at, c.updated_at, t.name, t.description
      LIMIT 1
    `;

		const [rows] = await (await connection).execute<RowDataPacket[]>(sql, [
			lang,
			id,
		]);
		const dbRows = rows as DBRow[];
		if (!dbRows || dbRows.length === 0) return null;
		return mapRowToCostume(dbRows[0]);
	},

	// costumes par catégorie
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
        t.name AS name,
        t.description AS description,
        GROUP_CONCAT(DISTINCT ct.tag) AS tags,
        GROUP_CONCAT(DISTINCT CONCAT(cm.material, '|||', cm.quantity)) AS materials
      FROM costumes c
      LEFT JOIN costume_translations t ON c.id = t.costume_id AND t.language_code = ?
      LEFT JOIN costume_tags ct ON c.id = ct.costume_id
      LEFT JOIN costume_materials cm ON c.id = cm.costume_id
      WHERE c.category = ?
      GROUP BY 
        c.id, c.category, c.difficulty, c.price_range, c.image_url, 
        c.popularity, c.created_at, c.updated_at, t.name, t.description
      ORDER BY c.id
    `;

		const [rows] = await (await connection).execute<RowDataPacket[]>(sql, [
			lang,
			category,
		]);
		return (rows as DBRow[]).map(mapRowToCostume);
	},
};
