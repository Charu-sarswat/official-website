import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'

const About = () => {
  return (
    <Box py={'40px'} bg={'black'} color="white">
      <Flex alignItems={'center'} justify={'space-evenly'} flexWrap="wrap" >
        <Flex direction={'column'} justify="space-between"  h={'100%'} p={'40px'} maxWidth={'650px'}>
          <Text>
            <Heading py={'10px'} className="" fontSize={'5xl'}>
              About <Text className="text-1" fontSize={'5xl'}>Binary Hacks</Text>
            </Heading>
            <Text fontWeight={'bold'} py={'10px'} fontSize={'lg'}>
            “THE BINARY CLUB” is organizing a hackathon named “BINARYHACKS” which will be a 33-hour-long event, which would be totally focused on solving real life from all kinds of tracks which include education, health and even sustainability. THE BINARY CLUB will also provide an appropriate workshop in each domain which will be training about how to look for problems and what approach should be followed to overcome that problem. Hackers need to form a group of 2-5 people for which they have to think of ideas for solving real-world problems and depending on the constraints, the evaluation would be done. This hackathon also includes fun activities for the participants as well as volunteers to freshen up their minds. The club has also invited a guest speaker who will provide valuable information from his industry experience.
            </Text>
          </Text>
          <Text>
            <Heading py={'10px'} className="text-1">
              You belong in tech
            </Heading>
            <Text fontWeight={'bold'} py={'10px'} fontSize={'lg'}>
            It might be challenging to break into the tech industry. To make that easier, we are here. BinaryHacks is committed to fostering an open and egalitarian environment for its participants, who hail from a variety of cultures and experiences around the world. By keeping diversity, equity, and inclusion in mind as we work, we hope to create a welcoming environment where everyone may feel free to follow their aspirations.
            </Text>
          </Text>
        </Flex>
        <Box>
        <Image src={require('./BinaryHacks.png')} w='450px' h="700px" />
        </Box>
      </Flex>
            
    </Box>
  )
}

export default About;