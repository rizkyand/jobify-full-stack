import {body, param, validationResult} from "express-validator";
import {BadRequestError, NotFoundError, UnauthenticatedError, UnauthorizedError} from "../errors/CustomErrors.js";
import {JOB_STATUS, JOB_TYPE, SUB_DIVISION} from "../utils/Constant.js";
import mongoose from "mongoose";
import Job from "../model/JobModel.js";
import User from "../model/UserModel.js";

const validate = (validationContext) => {
    return [
        validationContext,
        (req, res, next) => {
            const valResult = validationResult(req);
            if(!valResult.isEmpty()){
                const errMsg = valResult.array().map(val =>val.msg);
                if(errMsg[0].startsWith('no jobs')) throw new NotFoundError(errMsg);
                if(errMsg[0].startsWith('not authorized')) throw new UnauthorizedError(errMsg);
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
    param('id').custom(async (val, {req}) => {
        const err = mongoose.Types.ObjectId.isValid(val);
        if(!err){
            throw new BadRequestError('invalid MongoDB id');
        }
        const job = await Job.findById(val);
        if(!job) throw new NotFoundError(`no jobs with id ${val}`);
        const isAdmin = req.user.role === 'admin';
        const isOwner = req.user.userId === job.createdBy.toString();
        if(!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to access the route');
    })
);

export const validateUserRegister = validate([
    body('name').notEmpty().withMessage('name is required'),
    body('email').notEmpty().withMessage('email is required')
        .isEmail().withMessage('invalid email format')
        .custom(async (email) =>{
            const users = await User.findOne({email});
            if(users){
                throw new BadRequestError('email already used!');
            }
        }),
    body('password').notEmpty().withMessage('password is required')
        .isLength({min : 8}).withMessage('password required minimal 8 character'),
    body('lastName').notEmpty().withMessage('lastname is required')]
);

export const validateLogin = validate([
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format'),
    body('password').notEmpty().withMessage('password is required'),
]);