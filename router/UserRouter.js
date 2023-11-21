import {Router} from "express";
const router = Router();
import {getApplicationStats, getCurrentUser, updateUser} from "../controller/UserController.js";
import {validateUserUpdate} from "../middleware/ValidationMiddleware.js";
import {authenticatePermission} from "../middleware/AuthMiddleware.js";


router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', [authenticatePermission('admin'),getApplicationStats]);
router.patch('/update-user', validateUserUpdate,updateUser);

export default router;