import express from "express";
const router = express.Router();
import { getSize } from "../controller/SizeController.js";

router.get("/size", getSize);

export default router;
