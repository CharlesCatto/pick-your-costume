import { readFileSync } from "node:fs";
import { join } from "node:path";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Charge les variables d'environnement
dotenv.config();

const migrate = async () => {
	let connection: mysql.Connection | undefined;

	try {
		console.log("Starting database migration...");

		// Connexion initiale (sans sélectionner de database)
		connection = await mysql.createConnection({
			host: process.env.DB_HOST || "localhost",
			user: process.env.DB_USER || "root",
			password: process.env.DB_PASSWORD || "",
			multipleStatements: true, // permet d'exécuter plusieurs requêtes dans un seul script
		});

		const schemaPath = join(__dirname, "../src/database/schema.sql");
		const schema = readFileSync(schemaPath, "utf8");

		// 1️⃣ Crée la base de données si elle n'existe pas
		console.log("Creating database if not exists...");
		await connection.execute("CREATE DATABASE IF NOT EXISTS costume_db");

		// 2️⃣ Change de base avec `query` (PAS execute)
		console.log("Switching to costume_db...");
		await connection.query("USE costume_db");

		// 3️⃣ Exécute le schéma SQL
		console.log("Executing schema...");
		await connection.query(schema);

		console.log("✅ Database migrated successfully!");
		process.exit(0);
	} catch (error) {
		console.error("❌ Migration failed:", error);
		process.exit(1);
	} finally {
		if (connection) {
			await connection.end();
		}
	}
};

migrate();
