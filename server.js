
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import JobRouter from "./router/JobRouter.js";
import mongoose from "mongoose";


const app = express();
const port = process.env.PORT || 5100;


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());

app.use('/api/v1/jobs', JobRouter);
app.post('/', (req, res)=>{
   console.log(req);
   res.json({message : 'data received', data : req.body});
});

app.get('/', (req, res)=>{
    res.send('Hello this is simple get API');
});


//for handling not found resource
app.use('*', (req, res)=>{
    res.status(404).json({message:'not found'});
});

//handling error
app.use((err, req,res, next) =>{
    console.log(err);
    res.status(500).json({message: 'something went wrong'});
});

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
