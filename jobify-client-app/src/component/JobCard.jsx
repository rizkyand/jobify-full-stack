import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react'
import day from "dayjs";
import Wrapper from "../assets/wrappers/Job.js";
import {Link} from'react-router-dom';

export default function JobCard({_id,
                                position,
                                company,
                                jobLocation,
                                jobType,
                                jobStatus,
                                subdivision,
                                createdAt}) {
    const dates = day(createdAt).format('DD MMM, YYYY');
    return (
        <Wrapper>

        <Center py={6}>
            <Box
                maxW={'400px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
            borderRadius={'10'}>

                {/*<Avatar*/}
                {/*    size={'xl'}*/}
                {/*    src={*/}
                {/*        'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'*/}
                {/*    }*/}
                {/*    mb={4}*/}
                {/*    pos={'relative'}*/}
                {/*    _after={{*/}
                {/*        content: '""',*/}
                {/*        w: 4,*/}
                {/*        h: 4,*/}
                {/*        bg: 'green.300',*/}
                {/*        border: '2px solid white',*/}
                {/*        rounded: 'full',*/}
                {/*        pos: 'absolute',*/}
                {/*        bottom: 0,*/}
                {/*        right: 3,*/}
                {/*    }}*/}
                {/*/>*/}
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {position}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    {company}
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    {subdivision}
                </Text>

                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        {jobType}
                    </Badge>
                </Stack>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}
                    py={3}>
                    Published at {dates}
                </Text>

                <Stack mt={8} direction={'row'} spacing={4}>

                    <Button
                        as={Link}
                        to={`../edit-job/${_id}`}
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        Edit Job
                    </Button>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'red.400'}
                        color={'white'}
                        _hover={{
                            bg: 'red.600',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Delete Job
                    </Button>
                </Stack>
            </Box>
        </Center>
        </Wrapper>
    )
}
