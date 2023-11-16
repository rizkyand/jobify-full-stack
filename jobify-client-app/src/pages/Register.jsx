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
    Image, RadioGroup, HStack, Radio,
} from '@chakra-ui/react';
import logins from '../assets/images/register-bg.jpg';
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Register() {
    const [radioGender, setRadioGender] = useState('male');
    const radioCheck = (e)=>{
        setRadioGender(e.target.value);
    }
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                    <FormControl id="firs-name">
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" placeholder={'your first name'}/>
                    </FormControl>
                    <FormControl id="last-name">
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" placeholder={'your last name'}/>
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder={'your email here'}/>
                    </FormControl>
                    <FormControl id="birth-date">
                        <FormLabel>Birth Date</FormLabel>
                        <Input type="date" placeholder={'pick your date'}/>
                    </FormControl>
                    <FormControl id="gender">
                        <RadioGroup value={radioGender}>
                            <HStack spacing="24px">
                                <Radio value="male" onClick={radioCheck}>Male</Radio>
                                <Radio value="female" onClick={radioCheck}>Female</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder={'fill your strong password'}/>
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            <Text color={'blue.500'}>Forgot password?</Text>
                        </Stack>
                        <Button colorScheme={'blue'} variant={'solid'}>
                            Sign in
                        </Button>
                        <Flex direction={"column"} align={"center"} justify={"center"} flex={1} gap={5}>
                            <Text fontSize={'small'}>Already have an Account?</Text>
                            <Link to='/login'>
                                <Button colorScheme={'blue'} variant={'solid'}>
                                    Login
                                </Button>
                            </Link>
                        </Flex>
                    </Stack>
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
