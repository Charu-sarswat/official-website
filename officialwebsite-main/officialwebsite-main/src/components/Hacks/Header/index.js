import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import './styles.css';

const Header = () => {
  return (
    <Box position="relative" overflow={'hidden'}>
      <Box bg="white" className="bg-container">
        <Image
          objectFit="center"
          align="center"
          className="bg-image"
          src={require('./bg.png')}
          alt="header"
        />
      
      <Flex className='head-text-container' top={{ base: '90%', md: '70%', lg: '85%' }} flexDirection="column">
        {/* <Text color={'white'} mt={6}><span className="text-1">In-person event</span> @ RKGIT</Text> */}
        <Button  mt={6} colorScheme='orange' size='lg' w={'9em'} >Apply Now</Button>
      </Flex>
      </Box>
    </Box>
  );
};

export default Header;
