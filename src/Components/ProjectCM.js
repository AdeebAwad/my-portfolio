import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
  Box,
  Link,
} from '@chakra-ui/react';
import { GiTakeMyMoney } from 'react-icons/gi';
import { SiFreelancer } from 'react-icons/si';
import Perks from './Perks';
import CM from '../assets/CM.png';
import { CM_LINK } from '../Links';

const ProjectCM = () => {
  return (
    <Container maxW="container.8xl" py="4em" bg="#F5F5F5">
      <SimpleGrid
        px={{ base: 'none', md: '8em' }}
        columns={{ base: 1, md: 2 }}
        spacing={10}
      >
        <Flex>
          <Image
            rounded={'md'}
            alt={'Cash Mobile'}
            src={CM}
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          <Heading color={'#062C30'}>Cash Mobile</Heading>
          <Text color={'gray.600'} fontSize={'lg'} noOfLines={5}>
            It's the first application in Syria to support online payment
            transactions, Through a Customer account made by the MTN
            telecommunication company, One can transfer and pay for various
            services provided through the App.
          </Text>
          <Stack
            pt="3em"
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Perks
              icon={<Icon as={GiTakeMyMoney} color={'green.600'} w={5} h={5} />}
              iconBg={'green.100'}
              text={'Payment for various services.'}
            />
            <Perks
              icon={<Icon as={SiFreelancer} color={'blue.600'} w={5} h={5} />}
              iconBg={'blue.100'}
              text={'One of a kind and the first to provide this service.'}
            />
          </Stack>
          <Box py={'2em'} alignSelf={'center'}>
            <Button
              bg="yellow.400"
              as={Link}
              _hover={{
                bg: 'yellow.400',
                color: 'white',
                textDecoration: 'none',
              }}
              href={CM_LINK}
              isExternal
            >
              Explore More
            </Button>
          </Box>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProjectCM;
