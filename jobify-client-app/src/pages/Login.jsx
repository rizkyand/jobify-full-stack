'use client'

import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image, Box,
} from '@chakra-ui/react';
import logins from '../assets/images/login-img.jpg';
import {Logo} from "../component/index.js";
import {Link, useNavigate, useNavigation} from "react-router-dom";
import {useForm} from 'react-hook-form';
import customFetch from "../utils/CustomFetch.js";
import {toast} from "react-toastify";


export default function Login() {
    const {handleSubmit, register, setValue} = useForm();
    const navigate = useNavigate();
    const onLogin = async data => {
        try {
            const response = await customFetch.post('auth/login', data);
            console.log(response);
            toast.success(response?.data?.msg);
            navigate('/dashboard');
        }catch (e){
            toast.error(e?.response?.data?.msg);
            console.log(e);
        }
    }

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                    <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                    <Box as='form' onSubmit={handleSubmit(onLogin)}>
                        <FormControl id="email" >
                            <FormLabel>Email address</FormLabel>
                            <Input type="email"
                                   {...register('email')}
                                   onChange={e => setValue('email', e.target.value)}/>
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password"
                                   {...register('password')}
                                   onChange={e => setValue('password', e.target.value)}/>
                        </FormControl>
                        <Stack spacing={6}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Text color={'blue.500'}>Forgot password?</Text>
                            </Stack>
                            <Button bgColor={'#2cb1bc'}
                                    type='submit'>
                                Sign in
                            </Button>
                            <Flex  justifyContent={'center'}>
                                <Heading fontSize={'sm'}>
                                    Don't have an Account? <Link to='/register'> Register
                                </Link>
                                </Heading>
                            </Flex>
                        </Stack>
                    </Box>

                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={logins}
                />
            </Flex>
        </Stack>
    )
}
