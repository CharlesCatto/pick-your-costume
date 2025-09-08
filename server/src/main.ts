import express from "express";
import cors from "cors";
import router from "./router";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router); // <-- Vérifie cette ligne !

app.listen(PORT, () => {
	console.log(`🚀 Server running at http://localhost:${PORT}`);
});
