import { Pool } from "pg";
import dotenv from "dotenv";
import { costumes } from "../src/database/seedData"; // IMPORTE TES VRAIES DONNÉES

dotenv.config();

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

async function seed() {
	console.log("🌱 Seeding database with REAL data...");

	try {
		await pool.query("BEGIN");

		for (const costumeData of costumes) {
			// 1. Insère le costume principal
			const costumeResult = await pool.query(
				`INSERT INTO costumes (category, difficulty, price_range, image_url, popularity)
         VALUES ($1, $2, $3, $4, $5) RETURNING id`,
				[
					costumeData.category,
					costumeData.difficulty,
					costumeData.price_range,
					costumeData.image_url,
					costumeData.popularity || 0,
				],
			);

			const costumeId = costumeResult.rows[0].id;

			// 2. Insère les traductions
			for (const translation of costumeData.translations) {
				await pool.query(
					`INSERT INTO costume_translations (costume_id, language_code, name, description)
           VALUES ($1, $2, $3, $4)`,
					[
						costumeId,
						translation.language_code,
						translation.name,
						translation.description,
					],
				);
			}

			// 3. Insère les tags
			for (const tag of costumeData.tags) {
				await pool.query(
					"INSERT INTO costume_tags (costume_id, tag) VALUES ($1, $2)",
					[costumeId, tag],
				);
			}

			// 4. Insère les matériaux
			for (const material of costumeData.materials) {
				await pool.query(
					`INSERT INTO costume_materials (costume_id, material, quantity)
           VALUES ($1, $2, $3)`,
					[costumeId, material.material, material.quantity],
				);
			}
		}

		await pool.query("COMMIT");
		console.log(
			`✅ Seed completed successfully! Inserted ${costumes.length} costumes.`,
		);
	} catch (error) {
		await pool.query("ROLLBACK");
		console.error("❌ Seed failed:", error);
		throw error;
	} finally {
		await pool.end();
	}
}

seed().catch(() => process.exit(1));
