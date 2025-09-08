import connectionPromise from "../src/database/client";
import { costumes } from "../src/database/seedData";
import type { ResultSetHeader } from "mysql2";

async function seed() {
	console.log("🌱 Starting database seeding...");

	try {
		const connection = await connectionPromise;

		console.log("📥 Inserting data into database...");

		// Insert costumes
		for (const costume of costumes) {
			console.log(`Processing costume ID: ${costume.id}`);

			const [result] = await connection.execute<ResultSetHeader>(
				`INSERT INTO costumes (category, difficulty, price_range, image_url, popularity)
				 VALUES (?, ?, ?, ?, ?)`,
				[
					costume.category,
					costume.difficulty,
					costume.price_range,
					costume.image_url || null,
					costume.popularity || 0,
				],
			);

			const costumeId = result.insertId;
			console.log(`  Inserted costume ID: ${costumeId}`);

			// Insert translations
			for (const translation of costume.translations) {
				console.log(`  Processing translation: ${translation.language_code}`);
				console.log(`    Name: ${translation.name}`);
				console.log(`    Description: ${translation.description}`);

				await connection.execute(
					`INSERT INTO costume_translations (costume_id, language_code, name, description)
					 VALUES (?, ?, ?, ?)`,
					[
						costumeId,
						translation.language_code,
						translation.name,
						translation.description || null,
					],
				);
			}

			// Insert tags
			for (const tag of costume.tags) {
				await connection.execute(
					"INSERT INTO costume_tags (costume_id, tag) VALUES (?, ?)",
					[costumeId, tag],
				);
			}

			// Insert materials
			for (const { material, quantity } of costume.materials) {
				await connection.execute(
					"INSERT INTO costume_materials (costume_id, material, quantity) VALUES (?, ?, ?)",
					[costumeId, material, quantity || null],
				);
			}
		}

		console.log("🎉 Database seeding completed successfully!");
		process.exit(0);
	} catch (error) {
		console.error("❌ Seeding failed:", error);
		process.exit(1);
	}
}

seed();
