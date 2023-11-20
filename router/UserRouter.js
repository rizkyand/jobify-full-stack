import {Router} from "express";
const router = Router();
import {getApplicationStats, getCurrentUser, updateUser} from "../controller/UserController.js";


router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', getApplicationStats);
router.patch('/update-user', updateUser);

export default router;