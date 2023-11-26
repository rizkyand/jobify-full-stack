import React, {useEffect, useState} from 'react';
import customFetch from "../utils/CustomFetch.js";
import {toast} from "react-toastify";
import {redirect, useLoaderData, useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDashboardContext} from "./DashboardLayout.jsx";
import {getAllLocs, getDetailJob, getJobStatus, getJobType} from "../utils/JobDataFetching.js";
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Input,
    Menu,
    MenuButton, MenuItem, MenuList,
    Stack, Text,
    useColorModeValue
} from "@chakra-ui/react";
import {IoIosArrowDropdown} from "react-icons/io";

export const loader = async (params)=>{
    try{
        const {data} = await customFetch.get(`/jobs/${params.id}`);
        return data;
    }catch (e){
        toast.error(e.response.data.msg);
        return redirect('/dashboard/all-job');
    }
}

function EditJob() {
    const params = useParams();
    const {data} = useLoaderData();
    const navigate = useNavigate();
    const {handleSubmit, register, setValue} = useForm();
    const [error, setError] = useState(false);
    const {userDummy} = useDashboardContext();
    const [selectedLocation, setSelectedLocation] = useState(data.jobLocation);
    const [selectedJobType, setSelectedJobType] = useState(data.jobType);
    const [selectedJobDetail, setSelectedJobDetail] = useState(data.jobDetail);
    const [selectedJobStatus, setSelectedJobStatus] = useState(data.jobStatus);
    const [searchHintLocs, setSearchHintLocs] = useState('');
    const [searchHintJobs, setSearchHintJobs] = useState('');
    const [locs, setLocs] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [jobStatus, setJobStatus] = useState([]);
    const [detailJob, setDetailJob] = useState([]);
    const [compName, setCompName] = useState(data.company.toUpperCase());
    const [positionName, setPositionName] = useState(data.position.toUpperCase());

    const handleLocationClick = (location) => {
        setValue('jobLocation', location);
        setSelectedLocation(location);
    };
    const handleJobTypeClick = (jobType) => {
        setValue('jobType', jobType);
        setSelectedJobType(jobType);
    };
    const handleDetailJobClick = (dtl) => {
        setValue('subdivision', dtl);
        setSelectedJobDetail(dtl);
    };

    const handleJobStatusClick = (sts) => {
        setValue('jobStatus', sts);
        setSelectedJobStatus(sts);
    }

    useEffect(() =>{
        const fetchData = async () => {
            const dataJobType = await getJobType();
            const dataJobStatus = await getJobStatus();
            const dataDetailJob = await getDetailJob();
            const dataLocation = await getAllLocs();
            setJobType(dataJobType.data);
            setJobStatus(dataJobStatus.data);
            setDetailJob(dataDetailJob.data);
            setLocs(dataLocation.data);
        }
        fetchData();
    },[]);

    const filteredLocation = searchHintLocs === '' ? locs : locs.filter(loc =>{
        return loc.toLowerCase().match(new RegExp(`${searchHintLocs.toLowerCase()}`));
    });

    const filteredJobDetail = searchHintJobs === '' ? detailJob : detailJob.filter(job => job.toLowerCase().match(new RegExp(`${searchHintJobs}`)));


    const onSubmit = async data => {
        try {
            if(!data?.jobStatus){
                data.jobStatus = 'pending';
            }
            console.log(data);
            const response = await customFetch.post('/jobs', data);
            toast.success('success create job!');
            setTimeout(() => {
                navigate('/dashboard/all-job');

            }, 1000)
        }catch (err){
            toast.error(err?.response?.data?.msg);
            console.log(err);
        }
    }


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('white')}>
            <Container
                maxW={'xl'}
                bg={useColorModeValue('white', 'whiteAlpha.100')}
                boxShadow={'xl'}
                rounded={'lg'}
                p={6}>
                <Heading
                    as={'h2'}
                    fontSize={{ base: 'xl', sm: '2xl' }}
                    textAlign={'center'}
                    mb={5}>
                    Edit Job
                </Heading>
                <Box as={'form'} mt={10} onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={4}>
                        <Input
                            {...register('company')}
                            placeholder="Company name..."
                            bg={'gray.100'}
                            border={0}
                            color={'gray.500'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                            type="text"
                            textAlign='center'
                            value={compName}
                            required
                            onChange={e=> {
                                setValue('company', e.target.value);
                                setCompName(e.target.value.toUpperCase());
                            }
                            }
                        />
                        <Input
                            {...register('position')}
                            placeholder="Position name..."
                            bg={'gray.100'}
                            border={0}
                            color={'gray.500'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                            type="text"
                            textAlign='center'
                            value={positionName}
                            onChange={e=> {
                                setValue('position', e.target.value);
                                setPositionName(e.target.value.toUpperCase());
                            }}
                        />
                        <Menu>
                            <MenuButton
                                as={Button}
                                rightIcon={<IoIosArrowDropdown/>}
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            >
                                {selectedJobDetail? `Detail Position: ${selectedJobDetail}` : 'Select detail job'}
                            </MenuButton>
                            <MenuList maxH="150px" overflowY="auto">
                                <Input placeholder='search here...'
                                       position = 'sticky'
                                       top="0"
                                       zIndex="1"
                                       value={searchHintJobs}
                                       onChange={e => setSearchHintJobs(e.target.value)}
                                />
                                {filteredJobDetail.map((a, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => {
                                            handleDetailJobClick(a);
                                        }}
                                    >
                                        {a}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rightIcon={<IoIosArrowDropdown/>}
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            >
                                {selectedJobType? `Job Type: ${selectedJobType}` : 'Select job type'}
                            </MenuButton>
                            <MenuList maxH="150px" overflowY="auto" position='relative'>
                                {jobType.map((a, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => {
                                            handleJobTypeClick(a);
                                        }}
                                    >
                                        {a}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rightIcon={<IoIosArrowDropdown/>}
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            >
                                {`Job Status: ${selectedJobStatus}`}
                            </MenuButton>
                            <MenuList maxH="150px" overflowY="auto" position='relative'>
                                {jobStatus.map((a, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => {
                                            handleJobStatusClick(a);
                                        }}
                                    >
                                        {a}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rightIcon={<IoIosArrowDropdown/>}
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            >
                                {selectedLocation || 'Select your location'}
                            </MenuButton>
                            <MenuList maxH="150px" overflowY="auto" position='relative'>
                                <Input placeholder='search here...'
                                       position = 'sticky'
                                       top="0"
                                       zIndex="1"
                                       value={searchHintLocs}
                                       onChange={e => setSearchHintLocs(e.target.value)}
                                />
                                {filteredLocation.map((location, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => {
                                            handleLocationClick(location);
                                        }}
                                    >
                                        {location}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>

                    </Stack>
                    <Button
                        type='submit'
                        fontFamily={'heading'}
                        mt={8}
                        w={'full'}
                        bgColor="#2cb1bc"
                        color={'white'}
                        _hover={{
                            bgColor: '#238d95',
                            boxShadow: 'xl',
                        }}>
                        Submit
                    </Button>
                </Box>
                <Text mt={2} textAlign={'center'} color={error ? 'red.500' : 'gray.500'}>
                    {error
                        ? 'Oh no an error occured! 😢 Please try again later.'
                        : `Hello! ${userDummy?.name.toUpperCase()}✌️`}
                </Text>
            </Container>
        </Flex>
    )
}

export default EditJob;