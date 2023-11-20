import {UnauthenticatedError} from "../errors/CustomErrors.js";
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