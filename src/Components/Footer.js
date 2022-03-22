import {
  Box,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import React from 'react';
import { GMAIL_LINK } from '../Links';

const Footer = () => {
  return (
    <Box bg={'#05595B'} color={'gray.700'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Flex>
          <Text fontWeight={'bold'} color={'#F5F5F5'}>
            Contact Me: &nbsp;
          </Text>
          <VStack alignItems={'left'} spacing={2}>
            <Text color={'#F5F5F5'} as={Link} href={`mailto:${GMAIL_LINK}`}>
              <EmailIcon boxSize={7} paddingBottom={'4px'} />
              Mhdadeebawad@Gmail.com
            </Text>
            <Text color={'#F5F5F5'}>
              <PhoneIcon boxSize={7} paddingBottom={'4px'} />
              +971582018865
            </Text>
          </VStack>
        </Flex>
        <Text color={'#F5F5F5'}>© All rights reserved</Text>
      </Container>
    </Box>
  );
};

export default Footer;
