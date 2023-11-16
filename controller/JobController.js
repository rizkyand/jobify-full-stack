import 'express-async-errors';
import Job from "../model/JobModel.js";
import mongoose from "mongoose";

//generating id
//global id
let cId = 0;
function genId(){
    let gen = cId++;
    return gen;
}
export const getAllJobs = async (req, res)=>{
    const jobs = await Job.find({});
    res.status(200).json({jobs});
}
export const getJob = async (req,res)=>{
    const {id} = req.params;
    const job = await Job.findById(id);
    if(!job){
        return res.status(404).json({message: `no jobs with id ${id} found`, data: job});
    }
    res.status(200).json({message: 'found job!', data: job});
}
export const createJobs = async (req, res)=>{
    const job = await Job.create(req.body);
    res.status(200).json({message: 'success insert new job!', data : job});
}
export const updateJob = async (req, res) =>{
    const {id} = req.params;
    const{company, position, subdivision} = req.body;
    if(!company || !position){
        return res.status(400).json({message :'company and position are mandatory!', data: null});
    }
    const job = jobs.find(jb => jb.id == id);
    if(!job){
        return res.status(404).json({message: 'data not found', data:job})
    }
    job.company = company;
    job.position = position;
    job.subdivision = subdivision;

    res.status(200).json({message : 'data wes diupdate', data:job});
}
export const deleteJob = async (req, res) =>{
    const {id} = req.params;
    const job = jobs.find(jb => jb.id == id);
    if(!job){
        return res.status(404).json({message: `no jobs with id ${id}`, data: null});
    }
    const newJob = jobs.filter(jb => jb.id != id);
    jobs = [...newJob];
    res.status(200).json({message: `data with id ${id} has been deleted`, data: job});
}