import { Router } from "express";
import { costumeActions } from "./modules/costume/costumeActions";

const router = Router();

// Tous les costumes (avec langue)
router.get("/costumes", costumeActions.getAllCostumes);

// Par catégorie (avec langue)
router.get(
	"/costumes/category/:category",
	costumeActions.getCostumesByCategory,
);

// Par ID (avec langue)
router.get("/costumes/:id", costumeActions.getCostumeById);

export default router;
