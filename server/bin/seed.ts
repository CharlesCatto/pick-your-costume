import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false, // obligatoire avec Render
	},
});

async function seed() {
	console.log("🌱 Seeding database...");

	try {
		await pool.query("BEGIN");

		// Exemple de costumes
		await pool.query(`
      INSERT INTO costumes (category, difficulty, price_range, image_url, popularity)
      VALUES
      ('Halloween', 'Easy', 'Low', 'https://example.com/vampire.png', 10),
      ('Christmas', 'Medium', 'Medium', 'https://example.com/elf.png', 15),
      ('Carnival', 'Hard', 'High', 'https://example.com/clown.png', 5)
    `);

		await pool.query(`
      INSERT INTO costume_translations (costume_id, language_code, name, description)
      VALUES
      (1, 'en', 'Vampire', 'Classic vampire costume with cape'),
      (2, 'en', 'Elf', 'Santa''s little helper'),
      (3, 'en', 'Clown', 'Colorful clown outfit'),
      (1, 'fr', 'Vampire', 'Costume de vampire classique avec cape'),
      (2, 'fr', 'Lutin', 'Petit assistant du Père Noël'),
      (3, 'fr', 'Clown', 'Costume de clown coloré')
    `);

		await pool.query(`
      INSERT INTO costume_tags (costume_id, tag)
      VALUES
      (1, 'scary'),
      (1, 'classic'),
      (2, 'festive'),
      (3, 'funny'),
      (3, 'colorful')
    `);

		await pool.query(`
      INSERT INTO costume_materials (costume_id, material, quantity)
      VALUES
      (1, 'Cape', '1'),
      (1, 'Teeth', '1'),
      (2, 'Hat', '1'),
      (2, 'Shoes', '2'),
      (3, 'Wig', '1'),
      (3, 'Makeup', 'set')
    `);

		await pool.query("COMMIT");

		console.log("✅ Seed completed successfully!");
	} catch (error) {
		await pool.query("ROLLBACK");
		console.error("❌ Seed failed:", error);
	} finally {
		await pool.end();
	}
}

seed();
