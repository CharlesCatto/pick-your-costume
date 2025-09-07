import connectionPromise from "../src/database/client";
import { costumes } from "../src/database/seedData";
import type { ResultSetHeader } from "mysql2";

console.log("Costumes au chargement:", costumes);

async function seed() {
	console.log("🌱 Starting database seeding...");

	try {
		const connection = await connectionPromise;

		console.log("📥 Inserting data into database...");

		// Insert costumes
		for (const costume of costumes) {
			const [result] = await connection.execute<ResultSetHeader>(
				`INSERT INTO costumes (name, category, difficulty, price_range, description, image_url)
   VALUES (?, ?, ?, ?, ?, ?)`,
				[
					costume.name,
					costume.category,
					costume.difficulty,
					costume.price_range,
					costume.description,
					costume.image_url,
				],
			);

			const costumeId = result.insertId;

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
					[costumeId, material, quantity],
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
