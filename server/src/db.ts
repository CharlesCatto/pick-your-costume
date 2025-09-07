import mysql from "mysql2/promise";

export const connection = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "password",
	database: "pick_your_costume",
	waitForConnections: true,
	connectionLimit: 10,
});
