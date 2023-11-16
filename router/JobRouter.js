import {Router} from "express";
import {getAllJobs, getJob, createJobs, updateJob, deleteJob} from "../controller/JobController.js"


const router = Router();

router.route('/').get(getAllJobs).post(createJobs);
router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

export default router;
