import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import './styles.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const FAQ = () => {
  return (
    <Box>
    <Box py={'30px'} display={'flex'} className="accord-container" bg={'#090910'} m={0}>
      <Heading m={5} className="accord-heading text-1">
        Frequently Asked Questions
      </Heading>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        w={{ base: '80%', md: '70%', lg: '50%' }}
        alignSelf="center"
      >
        <AccordionItem className="accord-item">
          <h2>
            <AccordionButton>
              <Box className='accord-faq' flex="1" textAlign="left">
                What is BinaryHacks?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            BinaryHacks is 33-hour long hackathon sprint where you can build
            your dream project with the help of mentors and industry experts.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className="accord-item">
          <h2>
            <AccordionButton>
              <Box className='accord-faq' flex="1" textAlign="left">
                Who can participate?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Anyone with a passion for technology and a desire to learn can
            participate in BinaryHacks. You don't need to be a computer science
            student to participate in BinaryHacks. We welcome students from all
            backgrounds and disciplines from RKGIT.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className="accord-item">
          <h2>
            <AccordionButton>
              <Box className='accord-faq' flex="1" textAlign="left">
                How much does it cost to participate?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Admission to BinaryHacks is free. We will provide food and
            accomodation for the entire event and all the necessary resources to
            the participants for free.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className="accord-item">
          <h2>
            <AccordionButton>
              <Box className='accord-faq' flex="1" textAlign="left">
                What if I never participated in a hackathon before?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            BinaryHacks welcomes students of all skill levels. We will have a lot of workshops and mentors to help you get started.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className="accord-item">
          <h2>
            <AccordionButton>
              <Box className='accord-faq' flex="1" textAlign="left">
                How many people can be on a team?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            You can form a team of up to 5 people. There are no restrictions for who they can be, so you can team up with hackers from any year of our college. Teams can be formed before or during the hackathon.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className="accord-item">
          <h2>
            <AccordionButton>
              <Box className='accord-faq' flex="1" textAlign="left">
                Will BinaryHacks happen in person or virtually?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            BinaryHacks 2022 will be an in in-person hackathon, hosted at RKGIT. Stay tuned to have the latest updates by following us on social media.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
    </Box>
  );
};

export default FAQ;
