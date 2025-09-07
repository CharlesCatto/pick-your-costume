import type { RowDataPacket } from "mysql2";
import connection from "../../database/client";
import type { CostumeWithDetails } from "./costumeTypes";

export const costumeRepository = {
	async findAll(): Promise<CostumeWithDetails[]> {
		const [rows] = await (await connection).execute<RowDataPacket[]>(
			`SELECT c.*, 
              GROUP_CONCAT(DISTINCT ct.tag) as tags,
              GROUP_CONCAT(DISTINCT CONCAT(cm.material, '|||', cm.quantity)) as materials
       FROM costumes c
       LEFT JOIN costume_tags ct ON c.id = ct.costume_id
       LEFT JOIN costume_materials cm ON c.id = cm.costume_id
       GROUP BY c.id`,
		);
		console.log(
			"Costumes récupérés depuis la BDD:",
			rows.map((row) => row.image_url),
		);
		return rows.map((row) => ({
			...row,
			tags: row.tags ? (row.tags as string).split(",") : [],
			materials: row.materials
				? (row.materials as string).split(",").map((mat: string) => {
						const [material, quantity] = mat.split("|||");
						return { material, quantity };
					})
				: [],
		})) as CostumeWithDetails[];
	},

	async findById(id: number): Promise<CostumeWithDetails | null> {
		const [rows] = await (await connection).execute<RowDataPacket[]>(
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

		const costume = rows[0] as RowDataPacket | undefined;
		if (!costume) return null;

		return {
			...costume,
			tags: costume.tags ? (costume.tags as string).split(",") : [],
			materials: costume.materials
				? (costume.materials as string).split(",").map((mat: string) => {
						const [material, quantity] = mat.split("|||");
						return { material, quantity };
					})
				: [],
		} as CostumeWithDetails;
	},

	async findByCategory(category: string): Promise<CostumeWithDetails[]> {
		const [rows] = await (await connection).execute<RowDataPacket[]>(
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

		return rows.map((row) => ({
			...row,
			tags: row.tags ? (row.tags as string).split(",") : [],
			materials: row.materials
				? (row.materials as string).split(",").map((mat: string) => {
						const [material, quantity] = mat.split("|||");
						return { material, quantity };
					})
				: [],
		})) as CostumeWithDetails[];
	},
};
