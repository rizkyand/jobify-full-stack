import {Router} from "express";
import {getAllJobs, getJob, createJobs,
        updateJob, deleteJob, getAllJobStatus,
        getAllJobTypes, getAllSubdivision, getJobSortingMode, getAllJobsRedis} from "../controller/JobController.js";
import {validateJobInput, validateJobParam} from "../middleware/ValidationMiddleware.js";

const router = Router();

router.route('/').get(getAllJobs)
                    .post(validateJobInput, createJobs);
router.route('/:id').get(validateJobParam, getJob)
                    .patch(validateJobInput, validateJobParam, updateJob)
                    .delete(validateJobParam, deleteJob);
//try redis
router.route('/all').get(getAllJobsRedis);

//the constant
router.route('/jobStatus/all').get(getAllJobStatus);
router.route('/jobType/all').get(getAllJobTypes);
router.route('/subDivision/all').get(getAllSubdivision);
router.route('/jobSorting/all').get(getJobSortingMode);

export default router;
