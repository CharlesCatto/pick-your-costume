import { readFileSync } from "node:fs";
import { join } from "node:path";
import connection from "../src/database/client";

const migrate = async () => {
	try {
		console.log("Starting database migration...");

		const schemaPath = join(__dirname, "../src/database/schema.sql");
		const schema = readFileSync(schemaPath, "utf8");

		const statements = schema
			.split(";")
			.map((statement) => statement.trim())
			.filter((statement) => statement.length > 0);

		for (const statement of statements) {
			if (statement) {
				console.log(`Executing: ${statement.substring(0, 50)}...`);
				await connection.execute(statement);
			}
		}

		console.log("✅ Database migrated successfully!");
		process.exit(0);
	} catch (error) {
		console.error("❌ Migration failed:", error);
		process.exit(1);
	}
};

migrate();
