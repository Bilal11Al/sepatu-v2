import express from "express";
import authMiddleware from "../middleware/AuthMiddleware.js";
import {
  getUsers,
  createUsers,
  usersUpdate,
  usersDelete,
} from "../controller/UserController.js";

const router = express.Router();

router.get("/users", authMiddleware, getUsers);
router.post("/users", authMiddleware, createUsers);
router.patch("/users/:id", authMiddleware, usersUpdate);
router.delete("/users/:id", authMiddleware, usersDelete);

export default router;
