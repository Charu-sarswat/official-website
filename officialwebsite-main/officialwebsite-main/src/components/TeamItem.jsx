import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Link,
} from '@chakra-ui/react';

const IMAGE = 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';


const TeamItem = ({ image = IMAGE, name = "Name", description, title, link="#" }) => {
  return (
    <Center pr={20}>
      <Box
        role={'group'}
        // px={6}
        // p={5}
        w={'250px'}
        h={'325px'}
        bg={'transparent'}
        // boxShadow={'2xl'}
        // rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          // rounded={'lg'}
          align="center"
          style={{
            alignItems: 'center',
          }}
          // mt={5}
          pos={'relative'}
       >
          <Image
          borderRadius={'50%'}
            objectFit={'cover'}
            src={image}
            w={'230px'}
            h={'230px'}
          />
        </Box>
        <Stack align={'center'} mt={2}>
          <Link href={link}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={600}>
            {name}
          </Heading>
          </Link> 
          <Stack align={'center'}>
             <Text fontWeight={500} fontSize={'xl'}>
              {title}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}



export default TeamItem;