
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import JobRouter from "./router/JobRouter.js";
import mongoose from "mongoose";
import ErrorHandlerMiddleware from "./middleware/ErrorHandlerMiddleware.js";
import AuthRouter from "./router/AuthRouter.js";


const app = express();
const port = process.env.PORT || 5100;


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());
app.use('/api/v1/jobs', JobRouter);
app.use('/api/v1/auth', AuthRouter);

//for handling not found resource
app.use('*', (req, res)=>{
    res.status(404).json({message:'not found'});
});

//handling error
app.use(ErrorHandlerMiddleware);

//port exe
try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, ()=>{
        console.log(`server is running on port ${port}`);
    });
}catch (e) {
    console.log(e);
    process.exit(1);
}
