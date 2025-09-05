import type { Request, Response } from "express";
import { costumeRepository } from "./costumeRepository";

export const costumeActions = {
	async getAllCostumes(req: Request, res: Response) {
		try {
			const costumes = await costumeRepository.findAll();
			res.json(costumes);
		} catch (error) {
			console.error("Error fetching costumes:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},

	async getCostumeById(req: Request, res: Response) {
		try {
			const id = parseInt(req.params.id);
			if (isNaN(id)) {
				return res.status(400).json({ error: "Invalid costume ID" });
			}

			const costume = await costumeRepository.findById(id);
			if (!costume) {
				return res.status(404).json({ error: "Costume not found" });
			}
			res.json(costume);
		} catch (error) {
			console.error("Error fetching costume:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},

	async getCostumesByCategory(req: Request, res: Response) {
		try {
			const { category } = req.params;
			const validCategories = [
				"fantasy",
				"horror",
				"movie",
				"animal",
				"professional",
				"historical",
			];

			if (!validCategories.includes(category)) {
				return res.status(400).json({ error: "Invalid category" });
			}

			const costumes = await costumeRepository.findByCategory(category);
			res.json(costumes);
		} catch (error) {
			console.error("Error fetching costumes by category:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},
};
