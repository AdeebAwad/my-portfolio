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
import SP from '../assets/SP.png';
import { SP_LINK } from '../Links';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import { GrIntegration } from 'react-icons/gr';
import Perks from './Perks';

const ProjectSP = () => {
  return (
    <Container maxW="container.8xl" py="4em" bg="#FAFAFA">
      <SimpleGrid
        px={{ base: 'none', md: '8em' }}
        columns={{ base: 1, md: 2 }}
        spacing={10}
      >
        <Stack spacing={4}>
          <Heading color={'#062C30'}>
            Syrian Electronic Payments A.K.A "Madfouat"
          </Heading>
          <Text color={'gray.600'} fontSize={'lg'}>
            The national Electronic Bill Presentment and Payment service
            provider. The primary function of "Madfouat" is to be a central
            entity connecting all banks and billers in the country to an
            integrated infrastructure. "Madfouat" provides a mechanism to handle
            all payment transactions for periodic bills (water, electricity,
            fixed-line phone… etc) and one-time fees (traffic fines, taxes, air
            tickets… etc) through all channels of operating banks in Syria.
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
              icon={
                <Icon
                  as={AiOutlineDeploymentUnit}
                  color={'teal.600'}
                  w={5}
                  h={5}
                />
              }
              iconBg={'teal.100'}
              text={
                'Central entity connecting banks & billers in the country to an integrated infrastructure.'
              }
            />
            <Perks
              icon={
                <Icon as={GrIntegration} color={'orange.600'} w={5} h={5} />
              }
              iconBg={'orange.100'}
              text={'MTN Bank Integration With Madfouat Provided Services.'}
            />
          </Stack>
          <Box py={'2em'} alignSelf={'center'}>
            <Button
              as={Link}
              _hover={{ bg: '#05595B', color: 'white', textDecoration: 'none' }}
              href={SP_LINK}
              isExternal
            >
              Explore More
            </Button>
          </Box>
        </Stack>
        <Flex>
          <Image rounded={'md'} alt={'Madfouat'} src={SP} objectFit={'fill'} />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default ProjectSP;
