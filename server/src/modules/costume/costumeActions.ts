import type { Request, Response } from "express";
import { costumeRepository } from "./costumeRepository";

export const costumeActions = {
	// Récupérer tous les costumes
	async getAllCostumes(req: Request, res: Response) {
		const lang = String(req.query.lang ?? "en");
		try {
			const costumes = await costumeRepository.findAll(lang);
			res.json(costumes);
		} catch (error) {
			console.error("Error fetching costumes:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},

	// Récupérer un costume par ID
	async getCostumeById(req: Request, res: Response) {
		const id = Number.parseInt(req.params.id, 10);
		const lang = String(req.query.lang ?? "en");

		if (Number.isNaN(id)) {
			return res.status(400).json({ error: "Invalid costume ID" });
		}

		try {
			const costume = await costumeRepository.findById(id, lang);
			if (!costume) {
				return res.status(404).json({ error: "Costume not found" });
			}
			res.json(costume);
		} catch (error) {
			console.error("Error fetching costume:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},

	// Récupérer des costumes par catégorie
	async getCostumesByCategory(req: Request, res: Response) {
		const category = String(req.params.category);
		const lang = String(req.query.lang ?? "en");

		try {
			const costumes = await costumeRepository.findByCategory(category, lang);
			res.json(costumes);
		} catch (error) {
			console.error("Error fetching costumes by category:", error);
			res.status(500).json({ error: "Internal server error" });
		}
	},
};
