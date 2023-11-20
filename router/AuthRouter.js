import {Router} from "express";
import {validateLogin, validateUserRegister} from "../middleware/ValidationMiddleware.js";

const authRouter = Router();
import {getAllUser, getOneUser, login, logout, register} from "../controller/AuthController.js";

authRouter.get('/user', getAllUser);
authRouter.post('/register', validateUserRegister, register);
authRouter.post('/login', validateLogin, login);
authRouter.get('/logout', logout);
authRouter.post('/getUser', getOneUser);

export default authRouter;
