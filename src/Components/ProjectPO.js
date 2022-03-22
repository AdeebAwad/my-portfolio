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
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from 'react';
import PO from '../assets/PO.svg';
import { PO_LINK } from '../Links';

const ProjectPO = () => {
  return (
    <Container maxW="container.8xl" py="4em" bg="#FAFAFA">
      <SimpleGrid
        px={{ base: 'none', md: '8em' }}
        columns={{ base: 1, md: 2 }}
        spacing={10}
      >
        <Stack spacing={4}>
          <Heading color={'#062C30'}>My Portfolio</Heading>
          <Text color={'gray.600'} fontSize={'lg'}>
            The Portfolio you'r scrolling through was made by Me the source code
            can be found on my Github account.
          </Text>
          <StackDivider
            borderColor={useColorModeValue('gray.100', 'gray.700')}
          />
          <Box py={'2em'} alignSelf={'center'}>
            <Button
              mt={{ base: 'none', md: '2em' }}
              as={Link}
              _hover={{ bg: '#05595B', color: 'white', textDecoration: 'none' }}
              href={PO_LINK}
              isExternal
            >
              <ExternalLinkIcon mx="2px" />
              Source Code
            </Button>
          </Box>
        </Stack>

        <Flex boxSize={'sm'}>
          <Image
            rounded={'md'}
            alt={'Portfoilio'}
            src={PO}
            objectFit={'fill'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default ProjectPO;
