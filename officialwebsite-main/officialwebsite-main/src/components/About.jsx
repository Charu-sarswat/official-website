import { Box, Flex, Image, Text, Heading, useColorMode, useColorModeValue, Spacer } from '@chakra-ui/react';
import React from 'react'
import './about.css'

const data = {
  why: "Are you interested in technology and curious to know how it works? Well it's just your luck, because Binary is here to help you \
  get you started and go beyond the limits while meeting other talented and passionate students. Binary provides students with the chance to interact with industry professionals,\
  develop new skills and collaborate with fellow innovators to stay ahead from the curve",
  about: "Binary is an all-inclusive RKGIT's largest student-run technical club focused in computer science to promote curiosity and \
  excitement for a future in technology, while guiding students on their paths to success. \
  Empowering students to realise their full potential, and \
  accordingly shape them into future pioneers \
  entrepreneurs and bridging the gap between \
  students and alumni of college through mentorships"
}


const About = () => {
  const { colorMode } = useColorMode();
  return (
    <div id={'About'} style={{ minHeight: '100vh', minWidth: '100%', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        zIndex: '-1',
        width: '100%',
        height: '100%'
      }}>
        {
          colorMode === 'dark' ? (<Image src={'/images/png/newbg.svg'} w={'100%'}
            objectFit='cover'
            align={'center'}
            h={'100%'} />) : ''
        }
      </div>
      <Box py={20} px={{ base: 4, sm: 10, md: 20, lg: 20 }} width='100%' minHeight={'100vh'} style={{ position: 'relative', backgroundColor: '' }}>
        <Flex
          minH={'100px'}
          py={{ base: 5 }}
        >
          <Heading
            // lineHeight={1.1}
            // fontWeight={600}
            fontSize={{ base: '4xl', sm: '4xl', lg: '5xl' }}
          >

            <Text
              // fontSize={{base: '2x1', sm: '2x1', lg: '4x1'}}
              style={{
                border: '2px solid purple',
                borderTopLeftRadius: '35px',
                borderBottomRightRadius: '35px',
                position: 'relative',
              }}
              fontFamily={'alice'}
              p={2}
            >About Binary Club</Text>
          </Heading>
        </Flex>
        <Box py={20}>
          <Flex
            justifyContent={'space-between'}
            wrap={'wrap'}
            style={{
              zIndex: '5'
            }}
          >
            <Box>
              <Text
                fontSize='xl'
                maxWidth={'45rem'}
                bg={useColorModeValue('#8D99AE', 'transparent')}
                className="about-box"
                p={10}
                color={useColorModeValue('black', 'white')}
              >
                <Heading 
                fontFamily={'alice'} 
                color={useColorModeValue('#10002b', 'white')} 
                p={2} 
                align={'center'} 
                >What is Binary?</Heading>
                {data.about}
              </Text>
              <Spacer />
              <Text
                mt={20}
                fontSize='xl'
                maxWidth={'45rem'}
                bg={useColorModeValue('#8D99AE', 'transparent')}
                p={10}
                className="about-box"
                color={useColorModeValue('black', 'white')}
              >
                <Heading 
                fontFamily={'alice'} 
                color={useColorModeValue('#10002b', 'white')} 
                p={2} 
                align={'center'} 
                >Why join?</Heading>
                {data.why}
              </Text>
            </Box>
            <Box w={'300px'} h={'300px'} className="box-move">
              <Image w={'100%'} h={'100%'} src={'/images/png/saly.png'} shadow={false} />
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  )
}

export default About;
