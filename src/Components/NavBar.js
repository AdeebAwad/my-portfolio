import {
  Box,
  Flex,
  Icon,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  useDisclosure,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import {
  FaStackOverflow,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';
import {
  FACEBOOK_LINK,
  TWITTER_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  STACKOVERFLOW_LINK,
} from '../Links';

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('#062C30', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Heading fontFamily={'cursive'} size="md" color="#E2D784">
              My Portfolio
            </Heading>
          </Box>
          <Flex alignItems={'center'}>
            <Menu closeOnSelect={false}>
              <MenuButton
                as={Button}
                rounded={'3xl'}
                variant={'outline'}
                cursor={'pointer'}
                borderWidth="2px"
                minW={0}
                fontFamily={'cursive'}
                color="#F5F5F5"
                _hover={{ bg: '#05595B' }}
                _expanded={{ bg: '#05595B' }}
                _focus={{ boxShadow: 'outline' }}
              >
                Find Me On
              </MenuButton>
              <MenuList>
                <MenuItem
                  as={Link}
                  href={LINKEDIN_LINK}
                  _hover={{ textDecoration: 'none' }}
                  isExternal
                  icon={<Icon boxSize="6" color="blue.800" as={FaLinkedin} />}
                >
                  Linkedin
                </MenuItem>
                <MenuItem
                  as={Link}
                  href={FACEBOOK_LINK}
                  _hover={{ textDecoration: 'none' }}
                  isExternal
                  icon={<Icon boxSize="6" color="blue.800" as={FaFacebook} />}
                >
                  Facebook
                </MenuItem>
                <MenuItem
                  as={Link}
                  href={TWITTER_LINK}
                  _hover={{ textDecoration: 'none' }}
                  isExternal
                  icon={<Icon boxSize="6" color="blue.300" as={FaTwitter} />}
                >
                  Twitter
                </MenuItem>
                <MenuItem
                  as={Link}
                  href={GITHUB_LINK}
                  _hover={{ textDecoration: 'none' }}
                  isExternal
                  icon={<Icon boxSize="6" color="gray.700" as={FaGithub} />}
                >
                  Github
                </MenuItem>
                <MenuItem
                  as={Link}
                  href={STACKOVERFLOW_LINK}
                  _hover={{ textDecoration: 'none' }}
                  isExternal
                  icon={
                    <Icon boxSize="6" color="orange.700" as={FaStackOverflow} />
                  }
                >
                  Stack overflow
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
