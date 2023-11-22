import {Router} from "express";
const router = Router();
import {getAllLocation} from "../controller/ListOfViewController.js";


router.get('/location/all', getAllLocation);

export default router;