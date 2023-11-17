import 'express-async-errors';
import Job from "../model/JobModel.js";
import {StatusCodes} from "http-status-codes";
import {NotFoundError} from "../errors/CustomErrors.js";

//generating id
//global id
let cId = 0;
function genId(){
    let gen = cId++;
    return gen;
}
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