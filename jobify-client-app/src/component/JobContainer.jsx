import React from 'react';
import Wrapper from "../assets/wrappers/JobsContainer.js";
import {useAllJobsContext} from "../pages/AllJob.jsx";
import JobCard from "./JobCard.jsx";
import {Container, Flex, Grid} from "@chakra-ui/react";

const JobContainer = () => {
    const {data} = useAllJobsContext();
    const {jobs} = data;
    if(jobs.length === 0){
        return (
          <Wrapper>
              <h2>No Jobs to Display</h2>
          </Wrapper>
        );
    }
    return (<Wrapper>
            <Grid templateColumns={"repeat(auto-fit, minmax(350px, 1fr))"}
                    gap={4}>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
            </Grid>
    </Wrapper>
    );
};

export default JobContainer;