import {Router} from "express";
import {validateLogin, validateUserRegister} from "../middleware/ValidationMiddleware.js";

const authRouter = Router();
import {getAllUser, getOneUser, login, register} from "../controller/AuthController.js";

authRouter.get('/user', getAllUser);
authRouter.post('/register', validateUserRegister, register);
authRouter.post('/login', validateLogin, login);
authRouter.post('/getUser', getOneUser);

export default authRouter;
