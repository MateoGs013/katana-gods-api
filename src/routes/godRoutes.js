import { Router } from "express";
import {
  getGods,
  getGodById,
  createGod,
  updateGod,
  deleteGod,
} from "../controllers/godController.js";

const router = Router();

router.get("/", getGods);
router.get("/:id", getGodById);
router.post("/", createGod);
router.put("/:id", updateGod);
router.delete("/:id", deleteGod);

export default router;
