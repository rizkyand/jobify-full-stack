import jwt from 'jsonwebtoken';

export const genJWT =  payload => {
    const token = jwt.sign(payload, process.env.JWT_SALT, {
        expiresIn: process.env.JWT_EXPIRED
    });
    return token;
}

export const verifyJWT = token => {
    const decodedToken = jwt.verify(token, process.env.JWT_SALT);
    return decodedToken;
}