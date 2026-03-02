import express from "express";
import authMiddleware from "../middleware/AuthMiddleware.js"
const router = express.Router()
import { getAll,createRoles,updateRoles,deleteRole } from "../controller/RoleController.js";

router.get('/roles',authMiddleware,getAll);
router.post('/roles',authMiddleware,createRoles);
router.patch('/roles/:id',authMiddleware,updateRoles);
router.delete('/roles/:id',authMiddleware,deleteRole);


export default router;