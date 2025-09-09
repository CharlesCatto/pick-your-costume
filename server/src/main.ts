import express from "express";
import cors from "cors";
import router from "./router";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configuration CORS pour tous les environnements
const corsOptions = {
	origin: [
		"http://localhost:5173", // Dev
		"https://pick-your-costume-front.onrender.com", // Production
		"https://*.onrender.com", // Tous les sous-domaines Render
	],
	credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api", router);

app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`);
});
