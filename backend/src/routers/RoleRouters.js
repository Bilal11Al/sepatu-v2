import express from "express";
import authMiddleware from "../middleware/AuthMiddleware.js"
const router = express.Router()
import { getAll,createRoles,updateRoles,deleteRole } from "../controller/RoleController.js";
import AdminMidleware from "../middleware/AdminMidleware.js";

router.get('/roles',authMiddleware,AdminMidleware,getAll);
router.post('/roles',authMiddleware,AdminMidleware,createRoles);
router.patch('/roles/:id',authMiddleware,AdminMidleware,updateRoles);
router.delete('/roles/:id',authMiddleware,AdminMidleware,deleteRole);


export default router;