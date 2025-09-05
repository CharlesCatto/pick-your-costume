import connection from "../../database/client";
import type { CostumeWithDetails } from "./costumeTypes";

export const costumeRepository = {
	async findAll(): Promise<CostumeWithDetails[]> {
		const [rows] = await connection.execute(
			`SELECT c.*, 
              GROUP_CONCAT(DISTINCT ct.tag) as tags,
              GROUP_CONCAT(DISTINCT CONCAT(cm.material, '|||', cm.quantity)) as materials
       FROM costumes c
       LEFT JOIN costume_tags ct ON c.id = ct.costume_id
       LEFT JOIN costume_materials cm ON c.id = cm.costume_id
       GROUP BY c.id`,
		);

		return (rows as any[]).map((row) => ({
			...row,
			tags: row.tags ? row.tags.split(",") : [],
			materials: row.materials
				? row.materials.split(",").map((mat: string) => {
						const [material, quantity] = mat.split("|||");
						return { material, quantity };
					})
				: [],
		}));
	},

	async findById(id: number): Promise<CostumeWithDetails | null> {
		const [rows] = await connection.execute(
			`SELECT c.*, 
              GROUP_CONCAT(DISTINCT ct.tag) as tags,
              GROUP_CONCAT(DISTINCT CONCAT(cm.material, '|||', cm.quantity)) as materials
       FROM costumes c
       LEFT JOIN costume_tags ct ON c.id = ct.costume_id
       LEFT JOIN costume_materials cm ON c.id = cm.costume_id
       WHERE c.id = ?
       GROUP BY c.id`,
			[id],
		);

		const costume = (rows as any[])[0];
		if (!costume) return null;

		return {
			...costume,
			tags: costume.tags ? costume.tags.split(",") : [],
			materials: costume.materials
				? costume.materials.split(",").map((mat: string) => {
						const [material, quantity] = mat.split("|||");
						return { material, quantity };
					})
				: [],
		};
	},

	async findByCategory(category: string): Promise<CostumeWithDetails[]> {
		const [rows] = await connection.execute(
			`SELECT c.*, 
              GROUP_CONCAT(DISTINCT ct.tag) as tags,
              GROUP_CONCAT(DISTINCT CONCAT(cm.material, '|||', cm.quantity)) as materials
       FROM costumes c
       LEFT JOIN costume_tags ct ON c.id = ct.costume_id
       LEFT JOIN costume_materials cm ON c.id = cm.costume_id
       WHERE c.category = ?
       GROUP BY c.id`,
			[category],
		);

		return (rows as any[]).map((row) => ({
			...row,
			tags: row.tags ? row.tags.split(",") : [],
			materials: row.materials
				? row.materials.split(",").map((mat: string) => {
						const [material, quantity] = mat.split("|||");
						return { material, quantity };
					})
				: [],
		}));
	},
};
