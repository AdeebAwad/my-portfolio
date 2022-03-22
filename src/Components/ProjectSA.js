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
import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { CM_LINK } from '../Links';
import SA from '../assets/SA.svg';
import Perks from './Perks';

const ProjectSA = () => {
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
            alt={'Service Aggregator'}
            src={SA}
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          <Heading color={'#062C30'}>Service Aggregator</Heading>
          <Text color={'gray.600'} fontSize={'lg'} noOfLines={5}>
            It's an extension for the services of the Cash Mobile where multiple
            service providers integrate their services through it and customers
            can interact with these services through the App.
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
              icon={<Icon as={MdDashboard} color={'purple.600'} w={5} h={5} />}
              iconBg={'purple.100'}
              text={'Services Are defined dynamically.'}
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

export default ProjectSA;
