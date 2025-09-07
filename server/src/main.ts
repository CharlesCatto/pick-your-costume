import express from "express";
import cors from "cors";
import router from "./router";

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	}),
);

app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`🚀 Server running at http://localhost:${port}`);
});
