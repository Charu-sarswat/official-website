import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  import { Icon } from '@chakra-ui/react'
  import { FaGithub } from 'react-icons/fa';
  import {RiHomeHeartFill} from 'react-icons/ri'
  
  // import styled, { keyframes } from 'styled-components';
  
  const IMAGE = 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  
  const DomainItem = ({ image = IMAGE, name = "Name", description, title }) => {
    return (
      <Center p={2} pr={20}>
        <Box
          role={'group'}
          px={6}
          // p={5}
          w={'250px'}
          h={'450px'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            align="center"
            style={{
              alignItems: 'center',
            }}
            // mt={5}
            pos={'relative'}
         >
            <Image
              rounded={'lg'}
              objectFit={'cover'}
              src={image}
              w={'200px'}
              h={'200px'}
            />
          </Box>
          <Stack align={'center'} mt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {name}
            </Heading>
            <Stack align={'center'}>
              {title.includes('President') ? (
                <Text fontWeight={1000} fontSize={'xl'} color='green.500'>
                  {title}
                </Text>
              ) : <Text fontWeight={800} fontSize={'xl'}>
                {title}
              </Text>}
              <Text color={'gray.400'}>
                {description}
              </Text>
            </Stack>
            <Stack align={'center'} direction={'row'} spacing={'25px'} pos={'absolute'} style={{bottom: 0}}>
              <Icon w={8} h={8} as={FaGithub} />
              <Icon w={8} h={8} as={RiHomeHeartFill} />
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }
  
  
  
  export default DomainItem;