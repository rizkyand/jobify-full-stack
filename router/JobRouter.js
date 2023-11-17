import {Router} from "express";
import {getAllJobs, getJob, createJobs, updateJob, deleteJob} from "../controller/JobController.js";
import {validateJobInput, validateJobParam} from "../middleware/ValidationMiddleware.js";

const router = Router();

router.route('/').get(getAllJobs)
                    .post(validateJobInput, createJobs);
router.route('/:id').get(validateJobParam, getJob)
                    .patch(validateJobInput, validateJobParam, updateJob)
                    .delete(validateJobParam, deleteJob);

export default router;
