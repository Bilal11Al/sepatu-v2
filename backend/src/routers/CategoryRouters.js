import express from "express";
import {
  getCategory,
  createCategory,
  categoryUpdate,
  categoryDelete,
} from "../controller/CategoryController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";
import AdminMidleware from "../middleware/AdminMidleware.js";
const router = express.Router();

router.get("/category", authMiddleware, AdminMidleware, getCategory);
router.post("/category", authMiddleware, AdminMidleware, createCategory);
router.patch("/category/:id", authMiddleware, AdminMidleware, categoryUpdate);
router.delete("/category/:id", authMiddleware, AdminMidleware, categoryDelete);

export default router;
