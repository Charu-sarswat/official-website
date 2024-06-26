import { Box, Icon, Text, Stack, Flex, Image, Spacer, useColorModeValue } from '@chakra-ui/react';
import { icons } from 'react-icons';
import { FcAssistant } from 'react-icons/fc';
import { Parallax } from 'react-scroll-parallax';
import './domain.css';
import { aiml_icon, cloud_icon, cp_icon, web_icon, devops_icon, mobile_icon, uiux_icon, blockchain_icon } from './Icons/index';


const Feature = ({ title, text = "", icon, style }) => {
    console.log(icon.props['as']);
    return (
        <Box
        className='domain-box'
            // justifyContent={'space-between'}
            _hover={{ bg: `blue.800`, color: 'white' }}
            mt={10} p={4}
            fontFamily={'alice'}
            w={'400px'}
            maxWidth={'80vw'}
            bg={useColorModeValue('#2B2D42')}
color={'white'}
        >
            <Text fontWeight={800}  fontSize='3xl' >{title}</Text>
            <Flex
                align={'start'}
                justify={'start'}
                color={'white'}
                rounded={'full'}
                // bg={'gray.100'}
                mb={2}
                >
                <Image src={icon.props['as']} w={'200px'} h={'200px'} />
            </Flex>
            <Stack w={'100%'} color={'white'}>
            <Text>{text}</Text>
            </Stack>
            {/* <Box w={'250px'} h={'200px'}>
            </Box> */}
        </Box>

    );
};


export default function Domain() {
    return (
        <div style={{ minwidth: '100vw', minheight: '100vh' }}>

            <Box
                py={20}
                px={{ base: 4, sm: 10, md: 20, lg: 20 }}
                width='100%'
                minHeight={'100vh'}
                style={{ position: 'relative', backgroundColor: '' }}
            >
                <Flex
                    pt={5}
                    minH={'60px'}
                    py={{ base: 2 }}
                >
                    <Box
                        p={2}
                    >
                        <Text
                            fontSize='5xl'
                            fontFamily={'alice'}
                            style={{
                                border: '2px solid purple ',
                                borderTopLeftRadius: '35px',
                                borderBottomRightRadius: '35px'
                            }}
                            maxW={'fit-content'}
                            p={{base: 2, lg: 2, md: 2}}
                        >Domains</Text>
                        <Text
                            fontSize='2xl'
                            // fontFamily={'Alex Brush'}
                            pt={2}
                        >Everything is covered at Binary Club</Text>
                    </Box>
                    <Box maxW={170} alignItems="center" pos={'absolute'} p={2} style={{
                        left: '250px',
                        top: '40px'
                    }}
                    ml={{base: 1, lg: 8, md: 8}}
                    >
                        <Parallax
                            speed={0}
                        >
                            <Image src={'/images/png/domain.png'} w={'100%'} h={'100%'} />
                        </Parallax>
                    </Box>
                </Flex>
                <Box
                    py={10}
                    width={[
                        '100%', 
                    ]}
                >
                    <Flex wrap={'wrap'}
                        // directon={['row', 'col']} 
                        w={'fit-content'}
                        style={{ padding: '0px', width: 'auto' }}>
                        {
                            Domains.map((domain) => {
                                return (
                                    <>
                                        <Feature
                                            title={domain.title}
                                            text={domain.description}
                                            icon={<Icon as={domain.icon} w={20} h={20} />}
                                        />
                                        <Spacer />
                                    </>
                                )
                            })
                        }
                    </Flex>
                </Box>
            </Box>
        </div>
    );
}


const Domains = [
    {
        title: 'AI/ML',
        icon: `${aiml_icon}`,
        description: "AI/ML an important evolution in computer science and data processing that is quickly transforming a vast array of industries.\
         Here at The Binary Club we'll dive in this technology together and will help you to start your journey in this field"
    },
    {
        title: 'Competitive Programming',
        icon: `${cp_icon}`,
        description: "Competitive programming is solving well-defined problems by writing computer programs under specified limits.\
        Binary club provides you with the best environment to cope up with the Data structures and algorithms to master them"
    },
    {
        title: "Devops",
        icon: `${devops_icon}`,
        description: "The most powerful tool we have as developers is automation. \
        At The Binary Club, you'll get hands-on experience, exposure, and we'll dive deep into this technology together"
    },
    {
        title: "Cloud",
        icon: `${cloud_icon}`,
        description: "Cloud computing facilitates the access of applications and information from any place globally and \
        from any device connected to internet. Cloud services are touching almost every corner around us so we need to \
        start with something, at Binary we'll enable students to get hands-on experience and learn more about it ."
    },
    {
        title: "UI/UX",
        icon: `${uiux_icon}`,
        description: "A UI (User Interface) deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions, and so on. In short, UI is all about how things look.\
        UX (User Experience) design deals with how users interact with the system. Logical navigation and how smooth and intuitive the experience is all fall under UX design. In short, this type of design helps users have a positive experience. \
        At Binary we are going to offer comprehensive UI/UX Design knowledge and looking forward to work for mutual benefit and growth."
    },
    {
        title: "Web Development",
        icon: `${web_icon}`,
        description: "In our heavily digital world, nearly every company has a website. \
        A highly skilled web developer knows how to analyze user needs to ensure the content, \
        graphics, and navigation provide a positive user experience. Depending on the level of skill demanded by the job position, s/he may be tasked with designing simple website layouts or more complex interactive website features.\
        We, the Binary Club, are going to share our knowledge and experience to ride you in web world."
    },
    {
        title: "Mobile App Development",
        icon: `${mobile_icon}`,
        description: "Mobile development is the process to making software for smartphones and digital assistants, most commonly for Android and iOS.\
        Here at The Binary Club we'll help you dive in  technology and start your journey in app development and android studio."
    },
    { 
        title: "Blockchain",
        icon: `${blockchain_icon}`,
        description: "Blockchain has become a buzzword these days with the rising popularity of cryptocurrencies. \
        Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. \
        Confused by these heavy terminologies? Don't worry!! \
        Join Binary, here we devour this technology together and utter that one from our technologies list."
    }
]