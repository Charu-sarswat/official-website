import { Flex, Text, Box, Image, useColorModeValue, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react'
import TeamItem from './TeamItem';
import styled, { keyframes } from 'styled-components';

export const Foo = keyframes`
  0% {
    transform: translate(100vw, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`;

export const ItemMover = styled.div`
  animation: ${Foo} 25s linear 0s infinite;
  &:hover {
    animation-play-state: paused;
  }
`;
// const ChakraBox = chakra(motion.div, {
//   /**
//    * Allow motion props and the children prop to be forwarded.
//    * All other chakra props not matching the motion props will still be forwarded.
//    */
//   shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
// });

export const Team = () => {
  const { colorMode } = useColorMode();

  return (
    <div id={'Team'} style={{position: 'relative'}}>
    <Box py={10} px={{ base: 4, sm: 10, md: 20, lg: 20 }} width='100%' minHeight={'100vh'} style={{ position: 'relative' }}>
      <Flex
        pt={5}
        minH={'60px'}
        py={{ base: 2 }}
      >
        <Box
          // style={{
          //         border: '2px solid purple ',
          //         borderTopLeftRadius: '35px',
          //         borderBottomRightRadius: '35px'
          //     }}
          p={2}
        >
          <Text fontSize='5xl'
            //   bg={'pink.400'}
            fontFamily={'alice'}
            style={{
              border: '2px solid purple ',
              borderTopLeftRadius: '35px',
              borderBottomRightRadius: '35px'
            }}
            maxW={'auto'}
            p={2}
          >Meet the team</Text>
        </Box>
      </Flex>
      <Box overflow={'hidden'} style={{ overflow:'hidden'}}>

        <Flex

          direction={'row'} justifyContent={'space-between'} mt={'50px'} >

          <ItemMover>
            <Flex direction={['row']} justifyContent={'space-around'} overflow={'hidden'}
              style={{ overflow: 'hidden' }}>
              {teamNames.map((member) => (
                <>
                  <TeamItem name={member.name} title={member.title} image={member.image} description={member.description} link={member.link} />
                </>
              ))}
            </Flex>
          </ItemMover>

        </Flex>
      </Box>
      <Box  position="absolute" bottom={0} bg={'primary'} style={{
        zIndex:'-1',
        left: '0px',
        width: '100%'
      }}>
        <Image src={`/images/background/teams-wave-${colorMode}.svg`} w={'100%'} h={'100%'}/>
      </Box>
    </Box>
    </div>
  )
}


const teamNames = [
  {
    name: 'Aditya Bhadauriya',
    title: 'President',
    image: '/images/members/aditya.png',
    description: 'I am a junior majoring in CSE',
    link: "https://9aditya9.biz",
  }, 
  {
    name: 'Nitin',
    title: 'Vice-President',
    image: '/images/members/nitin.png'
  },
  { 
    name: 'Amit Vikram Seth',
    title: 'Management Head',
    image: '/images/members/amit.png'
  },
  { 
    name: 'Indramani Pandey',
    title: 'Community Manager',
    image: '/images/members/indramani.png',
  },
  { 
    name: 'Ravi Singh',
    title: 'Technical Manager',
    image: '/images/members/ravi.png'
  },
  { 
    name: 'Avneesh Singh',
    title: 'Event Manager',
    image: '/images/human.svg'
  },
  { 
    name: 'Bharat Bhushan Anand',
    title: 'Web & Member Coordinator',
    image: '/images/members/bharat.png'
  },
  // { 
  //   name: 'Sidharth Singh',
  //   title: 'Web',
  //   image: '/images/members/'
  // },
  // { 
  //   name: 'Avneesh Singh',
  //   title: 'Event Manager',
  //   image: '/images/members/'
  // }
]