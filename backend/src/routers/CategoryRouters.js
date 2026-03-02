import express from "express";
import { getCategory,createCategory,categoryUpdate,categoryDelete } from "../controller/CategoryController.js";
import authMiddleware from "../middleware/AuthMiddleware.js"
const router = express.Router();


router.get("/category",authMiddleware,getCategory);
router.post("/category",authMiddleware,createCategory);
router.patch("/category/:id",authMiddleware,categoryUpdate);
router.delete("/category/:id",authMiddleware,categoryDelete);



export default router;