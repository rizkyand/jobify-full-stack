'use client'

import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    Icon, Image,
    Menu, MenuButton, MenuList, MenuItem,
} from '@chakra-ui/react';
import signlogo from "../assets/images/sign-up-log.svg";
import logo from "../assets/images/logo.svg";
import {Link, useNavigate, useNavigation} from "react-router-dom";
import {useForm} from 'react-hook-form';
import customFetch from "../utils/CustomFetch.js";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const avatars = [
    {
        name: 'Ryan Florence',
        url: 'https://bit.ly/ryan-florence',
    },
    {
        name: 'Segun Adebayo',
        url: 'https://bit.ly/sage-adebayo',
    },
    {
        name: 'Kent Dodds',
        url: 'https://bit.ly/kent-c-dodds',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'https://bit.ly/prosper-baba',
    },
    {
        name: 'Christian Nwamba',
        url: 'https://bit.ly/code-beast',
    },
]

const Blur = (props) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#0984e3" />
            <circle cx="244" cy="106" r="139" fill="#00b894" />
            <circle cy="291" r="139" fill="#6c5ce7" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#fdcb6e" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#dfe6e9" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#a29bfe" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#81ecec" />
        </Icon>
    )
}

export default function JoinOurTeam() {
    const {handleSubmit, register, setValue} = useForm();
    const navigate = useNavigate();
    const navigation = useNavigation();
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [searchHint, setSearchHint] = useState('');
    const [locs, setLocs] = useState([]);
    const handleMenuItemClick = (location) => {
        setValue('location', location);
        setSelectedLocation(location);
    };
    const isSubmitting = navigation.state === 'submitting';
    const getAllLocation = async () =>{
        try {
            const {data} = await customFetch.get('lov/location/all');
            setLocs(data.data);
        }catch (e) {
            console.log(e);
            toast.error('error getting location datas');
        }
    }
    useEffect(() =>{
        getAllLocation();
    }, []);

    const filteredLocation = searchHint === '' ? locs : locs.filter(loc =>{
        return loc.toLowerCase().match(new RegExp(`${searchHint.toLowerCase()}`));
    });

    const onSubmit = async data => {
        try {
            const response = await customFetch.post('/auth/register', data);
            console.log(response);
            toast.success(response.data.msg);
            navigate('/login');
        }catch (err){
            toast.error(err?.response?.data?.msg);
            console.log(err);
        }
    }

    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Find your best{' '}
                        <Text as={'span'} bgColor='#2cb1bc' bgClip="text">
                            JOB
                        </Text>{' '}
                        with Us
                    </Heading>
                    <Image
                        alt={'Login Image'}
                        objectFit={'fill'}
                        src={
                            signlogo
                        }
                    />
                    <Stack direction={'row'} spacing={4} align={'center'}>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    size={useBreakpointValue({ base: 'md', md: 'lg' })}
                                    position={'relative'}
                                    zIndex={2}
                                    _before={{
                                        content: '""',
                                        width: 'full',
                                        height: 'full',
                                        rounded: 'full',
                                        transform: 'scale(1.125)',
                                        bgGradient: 'linear(to-bl, red.400,pink.400)',
                                        position: 'absolute',
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            ))}
                        </AvatarGroup>
                        <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                            +
                        </Text>
                        <Flex
                            align={'center'}
                            justify={'center'}
                            fontFamily={'heading'}
                            fontSize={{ base: 'sm', md: 'lg' }}
                            bg={'gray.800'}
                            color={'white'}
                            rounded={'full'}
                            minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                            minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                            position={'relative'}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                transform: 'scale(1.125)',
                                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}>
                            YOU
                        </Flex>
                    </Stack>
                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Link to='/'
                        style={{objectFit : 'fill', justifyContent: 'flex-end'}}>
                            <Image
                                alt={'Login Image'}
                                objectFit={'fill'}
                                src={
                                    logo
                                }
                                justifyContent={"flex-start"}
                            />
                        </Link>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={"2xl"}
                            paddingTop="10">
                            Come Join Us
                            <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
                                !
                            </Text>
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            Empowering Careers, Unleashing Potential
                            Navigate Your Future in the World of Web Jobs
                        </Text>
                    </Stack>
                    <Box as={'form'} mt={10} onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={4}>
                            <Input
                                {...register('name')}
                                placeholder="Firstname"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                type="text"
                                required
                                onChange={e=> setValue('name', e.target.value)}
                            />
                            <Input
                                {...register('lastName')}
                                placeholder="Lastname"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                type="text"
                                onChange={e => setValue('lastName', e.target.value)}
                            />
                            <Input
                                {...register('email')}
                                placeholder="firstname@lastname.io"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                type="email"
                                required
                                onChange={e => setValue('email', e.target.value)}
                            />

                            <Input
                                {...register('password')}
                                placeholder="your strong passwod"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                type="password"
                                required
                                onChange = {e => setValue('password', e.target.value)}
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
                                    {selectedLocation || 'Select your location'}
                                </MenuButton>
                                <MenuList maxH="150px" overflowY="auto" position='relative'>
                                    <Input placeholder='search location'
                                           value={searchHint}
                                           onChange={e => setSearchHint(e.target.value)}
                                           position = 'sticky'
                                           top="0"
                                           zIndex="1"
                                    />
                                    {filteredLocation.map((location, index) => (
                                        <MenuItem
                                            key={index}
                                            onClick={() => {
                                                handleMenuItemClick(location);
                                            }}
                                        >
                                            {location}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                            <Button fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}
                                    _hover={{
                                        bgColor: '#2cb1bc'
                                    }}>
                                Upload Your CV
                            </Button>
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
                            }}
                            disabled={isSubmitting}>
                            {isSubmitting? 'Submitting' : 'Submit'}
                        </Button>
                    </Box>
                    form
                </Stack>
            </Container>
            <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(100px)' }} />
        </Box>
    )
}
