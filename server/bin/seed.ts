import connectionPromise from "../src/database/client";

async function seed() {
	console.log("🌱 Starting database seeding...");

	try {
		const connection = await connectionPromise; // On attend la connexion ici

		console.log("📥 Inserting data into database...");

		// --- 1. INSERT COSTUMES ---
		await connection.execute(`
      INSERT INTO costumes (name, category, difficulty, price_range, description, image_url)
      VALUES 
        ('Vampire', 'horror', 'easy', 'low', 'Classic vampire costume with cape and fangs', '/images/vampire.jpg'),
        ('Witch', 'fantasy', 'medium', 'low', 'Traditional witch costume with hat and broom', '/images/witch.jpg'),
        ('Superhero', 'movie', 'hard', 'medium', 'Custom superhero costume with cape and mask', '/images/superhero.jpg'),
        ('Zombie', 'horror', 'easy', 'low', 'Zombie costume with torn clothes and makeup', '/images/zombie.jpg'),
        ('Pirate', 'historical', 'medium', 'medium', 'Pirate costume with eye patch and sword', '/images/pirate.jpg');
    `);

		console.log("✅ Costumes inserted successfully!");

		// --- 2. INSERT COSTUME TAGS ---
		await connection.execute(`
      INSERT INTO costume_tags (costume_id, tag)
      VALUES 
        (1, 'blood'),
        (1, 'cape'),
        (1, 'fangs'),
        (2, 'broom'),
        (2, 'hat'),
        (2, 'magic'),
        (3, 'cape'),
        (3, 'mask'),
        (3, 'hero'),
        (4, 'undead'),
        (4, 'blood'),
        (4, 'apocalypse'),
        (5, 'sea'),
        (5, 'sword'),
        (5, 'treasure');
    `);

		console.log("✅ Costume tags inserted successfully!");

		// --- 3. INSERT COSTUME MATERIALS ---
		await connection.execute(`
      INSERT INTO costume_materials (costume_id, material, quantity)
      VALUES
        (1, 'Black cape', '1'),
        (1, 'Fangs', '1 set'),
        (2, 'Witch hat', '1'),
        (2, 'Broom', '1'),
        (3, 'Cape', '1'),
        (3, 'Mask', '1');
    `);

		console.log("✅ Costume materials inserted successfully!");

		console.log("🎉 Database seeding completed successfully!");
		process.exit(0);
	} catch (error) {
		console.error("❌ Seeding failed:", error);
		process.exit(1);
	}
}

seed();
