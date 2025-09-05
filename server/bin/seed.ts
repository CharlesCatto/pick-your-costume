import { readFileSync } from "node:fs";
import { join } from "node:path";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Charge les variables d'environnement
dotenv.config();

const seed = async () => {
	let connection: mysql.Connection | undefined;

	try {
		console.log("Starting database seeding...");

		// Connection à la database
		connection = await mysql.createConnection({
			host: process.env.DB_HOST || "localhost",
			user: process.env.DB_USER || "root",
			password: process.env.DB_PASSWORD || "",
			database: "costume_db",
			multipleStatements: true,
		});

		const seedPath = join(__dirname, "../src/database/seed.sql");
		const seedData = readFileSync(seedPath, "utf8");

		// Exécute le seed SQL
		console.log("Executing seed data...");
		await connection.execute(seedData);

		console.log("✅ Database seeded successfully!");
		process.exit(0);
	} catch (error) {
		console.error("❌ Seeding failed:", error);
		process.exit(1);
	} finally {
		if (connection) {
			await connection.end();
		}
	}
};

seed();
