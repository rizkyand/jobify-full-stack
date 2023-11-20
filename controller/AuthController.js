import User from "../model/UserModel.js";
import {StatusCodes} from "http-status-codes";
import {USER_ROLE} from "../utils/Constant.js";
import bcrypt from 'bcryptjs';
import {hashPassword} from "../utils/HashedUtil.js";


export const register = async (req, res) => {
    const isFirstUSer = await User.countDocuments() === 0;
    req.body.userRole = isFirstUSer? USER_ROLE.ADMIN : USER_ROLE.USER;
    //hashing pass
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({message : 'success register new User'});
}

export const login = async (req, res) => {
    res.send('login');
}

export const getAllUser = async (req, res) =>{
    const user = await User.find({});
    res.status(StatusCodes.OK).json({message : 'success', data : user});
}

export const getOneUser = async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({email});
    res.status(StatusCodes.OK).json({message : 'found 1 user', data: user});
}