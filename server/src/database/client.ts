import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

console.log("🔹 ENV Loaded:", {
	DB_HOST: process.env.DB_HOST,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD ? "****" : "MISSING",
	DB_NAME: process.env.DB_NAME,
});

const connectionPromise = mysql.createConnection({
	host: process.env.DB_HOST || "localhost",
	user: process.env.DB_USER || "root",
	password: process.env.DB_PASSWORD || "",
	database: process.env.DB_NAME || "costume_db",
});

export default connectionPromise;
