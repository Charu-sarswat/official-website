import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import'./styles.css';

const Sponsor = () => {
  return (
    <Box>
        <Flex alignContent='center' justify={'center'} textAlign='center' py={'30px'} px={'20px'}>
            <Text>
                <Heading>Interested in sponsoring?</Heading>
                <Text fontSize={'lg'} py={'10px'} maxW={'lg'}>If you and your company is interested in sponsoring a special weekend for the future of computer science, contact us at <Link
                 to='#'
                 onClick={(e) => {
                     window.location.href = 'mailto:binaryclub@rkgit.edu.in';
                     e.preventDefault();
                 }}
                ><span fontSize='48px' fontWeight='bolder' style={{color:'green', fontWeight:'bold'}} typeof='mail'>binaryclub@rkgit.edu.in</span></Link></Text>
            </Text>
        </Flex>
    </Box>
  )
}

export default Sponsor;