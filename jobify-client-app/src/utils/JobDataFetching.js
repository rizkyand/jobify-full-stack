import customFetch from "./CustomFetch.js";

export const getJobType = async ()=> {
    try {
        const {data} = await customFetch.get('/jobs/jobType/all');
        return data;
    }catch (e) {
        console.log(e);
    }
}
export const getJobStatus = async ()=> {
    try {
        const {data} = await customFetch.get('/jobs/jobStatus/all');
        return data;
    }catch (e) {
        console.log(e);
    }
}
export const getDetailJob = async ()=> {
    try {
        const {data} = await customFetch.get('/jobs/subDivision/all');
        return data;
    }catch (e) {
        console.log(e);
    }
}

export const getAllLocs = async () =>{
    try {
        const {data} = await customFetch.get('/lov/location/all');
        return data;
    }catch (e) {
        console.log(e);
    }
}

export const getAllJobs = async () => {
    try {
        const {data} = await customFetch.get('/jobs');
        return data;
    }catch (e) {
        console.log(e);
    }
}

