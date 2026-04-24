import { Router } from "express";
import {
  getKatanas,
  getKatanaById,
  createKatana,
  updateKatana,
  deleteKatana,
} from "../controllers/katanaController.js";

const router = Router();

router.get("/", getKatanas);
router.get("/:id", getKatanaById);
router.post("/", createKatana);
router.put("/:id", updateKatana);
router.delete("/:id", deleteKatana);

export default router;
