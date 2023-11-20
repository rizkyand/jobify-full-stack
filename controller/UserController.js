import JobModel from "../model/JobModel.js";
import UserModel from "../model/UserModel.js";
import {StatusCodes} from "http-status-codes";

export const getCurrentUser = async (req, res) => {
    const user = await UserModel.findOne({_id: req.user.userId});
    res.status(StatusCodes.OK).json({msg: 'get current user', user});
}

export const getApplicationStats = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'get application statistics'});
}

export const updateUser = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'update user'});
}