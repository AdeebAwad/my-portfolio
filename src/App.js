import React from 'react';
import { ChakraProvider, Container, Heading, theme } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import ProjectCM from './Components/ProjectCM';
import ProjectSP from './Components/ProjectSP';
import ProjectSA from './Components/ProjectSA';
import Footer from './Components/Footer';
import ProjectPO from './Components/ProjectPO';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Hero />
      <Container maxW="container.8xl" py="4em" bg="#F5F5F5">
        <Heading
          fontWeight={'700'}
          letterSpacing={'0.5em'}
          color={'#062C30'}
          textAlign={'center'}
        >
          MY PROJECTS
        </Heading>
      </Container>
      <ProjectCM />
      <ProjectSP />
      <ProjectSA />
      <ProjectPO />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
