import {body, param, validationResult} from "express-validator";
import {BadRequestError, NotFoundError} from "../errors/CustomErrors.js";
import {JOB_STATUS, JOB_TYPE, SUB_DIVISION} from "../utils/Constant.js";
import mongoose from "mongoose";
import Job from "../model/JobModel.js";

const validate = (validationContext) => {
    return [
        validationContext,
        (req, res, next) => {
            const valResult = validationResult(req);
            if(!valResult.isEmpty()){
                const errMsg = valResult.array().map(val =>val.msg);
                if(errMsg[0].startsWith('no jobs')) throw new NotFoundError(errMsg);
                throw new BadRequestError(errMsg);
            }
            next();
        },
    ];
};

export const validateJobInput = validate(
    [
        body('company').notEmpty().withMessage('company is required'),
        body('position').notEmpty().withMessage('position is required'),
        body('jobLocation').notEmpty().withMessage('jobLocation is required'),
        body('subdivision').isIn(Object.values(SUB_DIVISION)).withMessage('invalid subdivision'),
        body('jobStatus').isIn(Object.values(JOB_STATUS)).withMessage('invalid jobStatus'),
        body('jobType').isIn(Object.values(JOB_TYPE)).withMessage('invalid jobType'),
    ]
);

export const validateJobParam = validate(
    param('id').custom(async (val) => {
        const err = mongoose.Types.ObjectId.isValid(val);
        if(!err){
            throw new BadRequestError('invalid MongoDB id');
        }
        const job = await Job.findById(val);
        if(!job) throw new NotFoundError(`no jobs with id ${val}`);
    })
);