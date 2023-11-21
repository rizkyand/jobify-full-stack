import {UnauthenticatedError, UnauthorizedError} from "../errors/CustomErrors.js";
import {verifyJWT} from "../utils/WebToken.js";

export const authenticateUser = (req, res, next) => {
    const {token} = req.cookies;
    if(!token) throw UnauthenticatedError('authentication invalid');
    try{
        const {userId, role} = verifyJWT(token);
        req.user = {
            userId, role
        }
        next();
    }catch (e) {
        throw new UnauthenticatedError('authentication invalid');
    }
}

export const authenticatePermission = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) throw new UnauthorizedError('unauthorized to access this route');
        next();
    }
}
