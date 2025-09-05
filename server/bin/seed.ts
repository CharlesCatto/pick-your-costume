import { readFileSync } from "node:fs";
import { join } from "node:path";
import connection from "../src/database/client";

const seed = async () => {
	try {
		console.log("Starting database seeding...");

		const seedPath = join(__dirname, "../src/database/seed.sql");
		const seedData = readFileSync(seedPath, "utf8");

		const statements = seedData
			.split(";")
			.map((statement) => statement.trim())
			.filter((statement) => statement.length > 0);

		for (const statement of statements) {
			if (statement) {
				console.log(`Executing: ${statement.substring(0, 50)}...`);
				await connection.execute(statement);
			}
		}

		console.log("✅ Database seeded successfully!");
		process.exit(0);
	} catch (error) {
		console.error("❌ Seeding failed:", error);
		process.exit(1);
	}
};

seed();
