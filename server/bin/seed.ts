import { Pool } from "pg";
import dotenv from "dotenv";
import { costumes } from "../src/database/seedData";

dotenv.config();

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

async function seed() {
	console.log("🌱 Seeding database with CLEAN data...");

	try {
		await pool.query("BEGIN");

		for (const costumeData of costumes) {
			// 1. Clamp la popularité pour qu'elle soit toujours entre 1 et 5
			const popularity = Math.max(1, Math.min(costumeData.popularity || 0, 5));

			// 2. Le costume principal
			const costumeResult = await pool.query(
				`INSERT INTO costumes (category, difficulty, price_range, image_url, popularity)
         VALUES ($1, $2, $3, $4, $5) RETURNING id`,
				[
					costumeData.category,
					costumeData.difficulty,
					costumeData.price_range,
					costumeData.image_url,
					popularity,
				],
			);

			const costumeId = costumeResult.rows[0].id;

			// 3. Les traductions (noms et descriptions)
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

			// 4. Les tags
			if (Array.isArray(costumeData.tags)) {
				for (const tag of costumeData.tags) {
					await pool.query(
						"INSERT INTO costume_tags (costume_id, tag) VALUES ($1, $2)",
						[costumeId, tag],
					);
				}
			}

			// 5. Les matériaux avec leurs clés techniques
			if (Array.isArray(costumeData.materials)) {
				for (const material of costumeData.materials) {
					await pool.query(
						`INSERT INTO costume_materials (costume_id, material, quantity)
             VALUES ($1, $2, $3)`,
						[costumeId, material.material, material.quantity],
					);
				}
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
