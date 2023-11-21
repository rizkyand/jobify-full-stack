import JobModel from "../model/JobModel.js";
import UserModel from "../model/UserModel.js";
import {StatusCodes} from "http-status-codes";

export const getCurrentUser = async (req, res) => {
    const user = await UserModel.findOne({_id: req.user.userId});
    res.status(StatusCodes.OK).json({msg: 'get current user', user});
}

export const getApplicationStats = async (req, res) => {
    const user = await UserModel.countDocuments();
    const jobs = await JobModel.countDocuments();
    res.status(StatusCodes.OK).json({msg :'success getting stats', data: {user, jobs}});
}

export const updateUser = async (req, res) => {
    const obj = {...req.body};
    delete obj.password;
    const updatedUser = await UserModel.findByIdAndUpdate(req.user.userId, obj);
    res.status(StatusCodes.OK).json({msg: 'success update data', user: updatedUser});
}