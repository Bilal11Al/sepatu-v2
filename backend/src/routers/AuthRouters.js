import express from "express";
import { register,login,me } from "../controller/AuthController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";
const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login",login);
router.get("/me",authMiddleware,me);
export default router;
