import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';

const Card = ({ headingText, description }) => {
  return (
    <Center py={6}  w={'100%'}>
      <Box
        mx={2}
        bg='#11111c'
        boxShadow={'2xl'}
        rounded={'2xl'}
        overflow={'hidden'}
        height='50vh'
        maxH={'full'}>

        <Stack>
          <Heading
            p={3}
            bg='#1d0534'
            color='white'
            fontSize={'4xl'}
            fontFamily={'Nunito'}
          >
            {headingText}
          </Heading>
          <Text color={'white'} fontSize='1.4rem' p={5} >
            {description}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
export default Card;