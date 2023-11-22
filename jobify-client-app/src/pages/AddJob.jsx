import React, {useEffect} from 'react';
import { useState } from 'react'
import {
    Stack,
    Input,
    Button,
    useColorModeValue,
    Heading,
    Text,
    Container,
    Flex, Menu, MenuButton, MenuList, MenuItem, Box,
} from '@chakra-ui/react';
import { IoIosArrowDropdown } from "react-icons/io";
import {useDashboardContext} from "./DashboardLayout.jsx";
import {useForm} from "react-hook-form";
import {getJobType, getDetailJob, getJobStatus, getAllLocs} from "../utils/JobDataFetching.js";
import customFetch from "../utils/CustomFetch.js";
import {toast} from "react-toastify";


function AddJob() {
    const {handleSubmit, register, setValue, reset} = useForm();
    const [error, setError] = useState(false);
    const {userDummy} = useDashboardContext();
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedJobType, setSelectedJobType] = useState(null);
    const [selectedJobDetail, setSelectedJobDetail] = useState(null);
    const [selectedJobStatus, setSelectedJobStatus] = useState('pending');
    const [searchHint, setSearchHint] = useState('');
    const [locs, setLocs] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [jobStatus, setJobStatus] = useState([]);
    const [detailJob, setDetailJob] = useState([]);
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

    const filteredLocation = searchHint === '' ? locs : locs.filter(loc =>{
        return loc.toLowerCase().match(new RegExp(`${searchHint.toLowerCase()}`));
    });

    function resetAll(){
        reset();
        setSelectedJobType(null);
        setSelectedLocation(null);
        setSelectedJobDetail(null);
        setSearchHint('');
        setSelectedJobStatus('pending');
    }

    const onSubmit = async data => {
        try {
            if(!data?.jobStatus){
                data.jobStatus = 'pending';
            }
            console.log(data);
            const response = await customFetch.post('/jobs', data);
            toast.success('success create job!');
            setTimeout(() => {
                resetAll();
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
                    Add New Job
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
                            required
                            onChange={e=> setValue('company', e.target.value)}
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
                            onChange={e=> setValue('position', e.target.value)}
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
                            <MenuList maxH="150px" overflowY="auto" position='relative'>
                                {detailJob.map((a, index) => (
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
                                <Input placeholder='search location'
                                       position = 'sticky'
                                       top="0"
                                       zIndex="1"
                                       value={searchHint}
                                       onChange={e => setSearchHint(e.target.value)}
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

export default AddJob;