import express from "express";
const router = express.Router();
import { getSize, sizeAllInserts } from "../controller/SizeController.js";

router.get("/size", getSize);
router.post("/size", sizeAllInserts);

export default router;
