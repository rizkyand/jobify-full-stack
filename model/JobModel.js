import mongoose from "mongoose";
import {JOB_STATUS, JOB_TYPE, SUB_DIVISION} from "../utils/Constant.js";

const JobSchema = new mongoose.Schema(
    {
        company: String,
        position: String,
        subdivision: {
            type: String,
            enum : Object.values(SUB_DIVISION),
            default: SUB_DIVISION.JAVA
        },
        jobStatus: {
            type: String,
            enum: Object.values(JOB_STATUS),
            default: JOB_STATUS.PENDING,
        },
        jobType: {
            type: String,
            enum: Object.values(JOB_TYPE),
            default: JOB_TYPE.FULL_TIME,
        },
        jobLocation: {
            type: String,
            default: 'my city',
        },
        createdBy : {
            type : mongoose.Types.ObjectId,
            ref : 'user'
        }
    },
    { timestamps: true }
);

export default mongoose.model('Job', JobSchema);