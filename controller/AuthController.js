import User from "../model/UserModel.js";
import {StatusCodes} from "http-status-codes";
import {USER_ROLE} from "../utils/Constant.js";
import bcrypt from 'bcryptjs';
import {comparePassword, hashPassword} from "../utils/HashedUtil.js";
import {UnauthenticatedError} from "../errors/CustomErrors.js";
import {genJWT} from "../utils/WebToken.js";


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
    const user = await User.findOne({
        email : req.body.email
    });
    const isValidCredential = user && await comparePassword(req.body.password, user.password);
    if(!isValidCredential) throw new UnauthenticatedError('invalid credentials');
    const userCookie = genJWT({userId : user._id, role: user.userRole});
    const oneDay = 1000 * 60 * 60 * 24 ;
    res.cookie('token', userCookie, {
        httpOnly : true,
        expires : new Date(Date.now() + oneDay),
        secure : process.env.NODE_ENV === 'producion'
    })
    res.status(StatusCodes.OK).json({msg : `success login`});
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

export const logout = async (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly : true,
        expires : new Date(Date.now())
    })
    res.status(StatusCodes.OK).json({msg : 'user logout!'});
}