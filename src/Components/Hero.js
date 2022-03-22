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
import ProfilePic from '../assets/Me.png';
import Perks from './Perks';
import { GrCode } from 'react-icons/gr';
import { FaUserGraduate } from 'react-icons/fa';
import { GMAIL_LINK } from '../Links';

const Hero = () => {
  return (
    <Container maxW={'10xl'} py="8em" bg="#FAFAFA" centerContent>
      <SimpleGrid
        px={{ base: 'none', md: '8em' }}
        columns={{ base: 1, md: 2 }}
        spacing={10}
      >
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            letterSpacing="0.2em"
            color={'#05595B'}
            fontWeight={400}
            fontSize={'lg'}
            bg={'#dedac1'}
            px={6}
            py={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            My Story
          </Text>
          <Heading color={'#062C30'}>Hi! I'm Mhd Adib Awad</Heading>
          <Heading color={'#062C30'} size="md">
            And I'm a Software engineer &#128522;
          </Heading>
          <Text color={'gray.600'} fontSize={'lg'} noOfLines={5}>
            Graduated From Damascus University I hold a degree in Software
            Engineering, with 2+ years of hands on experience designing,
            developing, and implementing applications and solutions using a
            range of technologies and programming languages.
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
                <Icon as={FaUserGraduate} color={'yellow.600'} w={5} h={5} />
              }
              iconBg={'yellow.100'}
              text={'Graduate In Software Engineering'}
            />
            <Perks
              icon={<Icon as={GrCode} color={'green.600'} w={5} h={5} />}
              iconBg={'green.100'}
              text={'2+ Years Of Experience in Software Development'}
            />
          </Stack>
          <Box py={'2em'} alignSelf={'center'}>
            <Button
              as={Link}
              href={`mailto:${GMAIL_LINK}`}
              _hover={{ bg: '#05595B', color: 'white' }}
            >
              Let's Talk
            </Button>
          </Box>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'Mhd Adib'}
            src={ProfilePic}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Hero;
