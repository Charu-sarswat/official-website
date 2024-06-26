import React from 'react'
import { BiHeartCircle } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { Icon, VStack, Container, Box, Heading, Flex, HStack, Spacer, useColorModeValue } from '@chakra-ui/react'

const Members = () => {
    return (
        <Box bg={'blue.800'}>
            <Flex color={'green.200'} p={8} justifyContent={'space-around'} flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
                <VStack align={'center'} h={120} textAlign={'center'} >
                    <HStack h={10} spacing='0px' pt={'20px'} >
                        <Icon as={BiHeartCircle} w={'35px'} h={10} p={0} mr={2} />
                        <Heading>300+</Heading>
                    </HStack>
                    <Box style={{ marginLeft: '38px' }} color={'white'} >Members</Box>
                </VStack>
                <VStack align={'center'} h={120} textAlign={'center'} >
                    <HStack h={10} spacing='0px' pt={'20px'} >
                        <Icon as={FaUsers} w={'35px'} h={10} p={0} mr={2} />
                        <Heading>54</Heading>
                    </HStack>
                    <Box color={'white'} style={{ marginLeft: '38px' }}>Core Members</Box>
                </VStack>
                <VStack align={'center'} h={120} textAlign={'center'} >
                    <HStack h={10} spacing='0px' pt={'20px'} >
                        <Icon as={BiHeartCircle} w={'35px'} h={10} p={0} mr={2} />
                        <Heading>10+</Heading>
                    </HStack>
                    <Box color={'white'} style={{ marginLeft: '38px' }}>Alumnis</Box>
                </VStack>
            </Flex>
        </Box>
    )
}

export default Members;