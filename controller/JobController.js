import 'express-async-errors';
import Job from "../model/JobModel.js";
import {StatusCodes} from "http-status-codes";
import {NotFoundError} from "../errors/CustomErrors.js";
import {JOB_SORT_BY, JOB_STATUS, JOB_TYPE, SUB_DIVISION} from "../utils/Constant.js";


//without redis
export const getAllJobs = async (req, res)=>{
    const jobs = await Job.find({});
    res.status(StatusCodes.OK).json({jobs});
}
export const getJob = async (req,res)=>{
    const job = await Job.findById(req.params.id);
    res.status(StatusCodes.OK).json({message: 'found job!', data: job});
}
export const createJobs = async (req, res)=>{
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({message: 'success insert new job!', data : job});
}
export const updateJob = async (req, res) =>{
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new : true
    });
    res.status(StatusCodes.OK).json({message : 'data successfully updated', data:job});
}
export const deleteJob = async (req, res) =>{
    const job = await Job.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({message: `data with id ${req.params.id} has been deleted`, data: job});
}

export const getAllJobStatus = async(req, res) => {
    const jobStatus = Object.values(JOB_STATUS);
    res.status(StatusCodes.OK).json({message: 'success', data : jobStatus});
}

//api constant
export const getAllJobTypes = async (req, res) => {
    const jobTypes  = Object.values(JOB_TYPE);
    res.status(StatusCodes.OK).json({message: 'success', data : jobTypes});
}

export const getAllSubdivision = async (req, res) => {
    const subDivision = Object.values(SUB_DIVISION);
    res.status(StatusCodes.OK).json({message: 'success', data : subDivision});
}

export const getJobSortingMode = async (req,res) => {
    const sortingBy = Object.values(JOB_SORT_BY);
    res.status(StatusCodes.OK).json({message: 'success', data : sortingBy});
}