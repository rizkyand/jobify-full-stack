import React, {createContext, useContext, useEffect} from 'react';
import {getAllJobs} from "../utils/JobDataFetching.js";
import {useLoaderData} from "react-router-dom";
import {JobContainer, SearchContainer} from "../component/index.js";


const AllJobsContext = createContext();

export const loader = async () => {
    try {
        const data = await getAllJobs();
        console.log('all jobs');
        console.log(data);
        return {data,};
    }catch (e) {
        console.log(e);
        return e;
    }
}

function AllJob() {
    const {data} = useLoaderData();
    console.log(data);
    return (<AllJobsContext.Provider value = {{data}}>
        <SearchContainer/>
        <JobContainer/>
    </AllJobsContext.Provider>

    );
}

export const useAllJobsContext = ()=> useContext(AllJobsContext);
export default AllJob;
