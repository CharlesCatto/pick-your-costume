import { Router } from "express";
import { costumeActions } from "./modules/costume/costumeActions";

const router = Router();

router.get("/costumes", costumeActions.getAllCostumes);
router.get(
	"/costumes/category/:category",
	costumeActions.getCostumesByCategory,
);
router.get("/costumes/:id", costumeActions.getCostumeById);

export default router;
