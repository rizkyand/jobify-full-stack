import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';

import {Link} from "react-router-dom";
import {Logo, MainLogo} from "../component/";


export default function AnotherLending() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        {/*<Image src={logo} paddingBottom={"6"}></Image>*/}
                        <Logo style="10px"/>

                        <Text color={'black'}>Job <Text color={'#2cb1bc'} as={'span'}>
                            Tracking
                        </Text>{' '}App</Text>
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        The journey doesn't end with securing a position. It continues with ongoing growth and skill development.
                        Web job seekers embark on a lifelong learning journey,
                        continuously honing their skills and staying up-to-date with the evolving industry trends.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Link to='/register'>
                            <Button
                                rounded={'full'}
                                bg={'#2cb1bc'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Register
                            </Button>
                        </Link>
                        <Link to='/login'>
                            <Button rounded={'full'}>Login</Button>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'fill'}
                    src={
                        main
                    }
                />
            </Flex>
        </Stack>
    )
}
