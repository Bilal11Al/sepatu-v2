import express from "express";
import authMiddleware from "../middleware/AuthMiddleware.js";
import {
  getUsers,
  createUsers,
  usersUpdate,
  usersDelete,
} from "../controller/UserController.js";
import AdminMidleware from "../middleware/AdminMidleware.js";
const router = express.Router();

router.get("/users", authMiddleware,AdminMidleware, getUsers);
router.post("/users", authMiddleware,AdminMidleware, createUsers);
router.patch("/users/:id", authMiddleware,AdminMidleware, usersUpdate);
router.delete("/users/:id", authMiddleware,AdminMidleware, usersDelete);

export default router;
