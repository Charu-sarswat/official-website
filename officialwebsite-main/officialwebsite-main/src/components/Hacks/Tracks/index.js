import { Flex, Text, Heading } from '@chakra-ui/react';
import Card from "./Card"
import React from 'react'
import './styles.css';

const content = [
  {
    headingText: 'Education',
    description: `The goal of education initiatives is to minimize the entry barrier to knowledge. The education track is for hackers who want to increase access to knowledge and raise awareness of particular issues.`
  },
  {
    headingText: 'Health',
    description: `Health-related projects can address issues with either personal wellbeing or public health (like COVID-19, etc). (mental health, fitness, etc).`
  },
  {
    headingText: 'Other',
    description: `This track is open to all your unique ideas in any sector. :)`
  }
]
const Tracks = () => {
  return (
    <Flex className='tracks' justify={'space-around'} direction={'column'} align='center'>
      <Heading mb={5} mt={0} fontSize={'5xl'} className="accord-heading text-1">
        Tracks
      </Heading>
      <Flex color='white' width='80%' className='items' justify={'space-between'} direction={['column', 'column', 'column', 'row']}>
        {
          content.map(item => (<Card headingText={item.headingText} description={item.description} />))
        }
      </Flex>
    </Flex>
  )
}

export default Tracks;