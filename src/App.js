import React from 'react';
import { LanguageContextProvider } from './context/LanguageContext';

import './App.scss';

import { CssBaseline, Container, Box, Typography } from '@material-ui/core';
import { AppHome } from './components/AppHome';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <Box my={4}>
          <Typography variant='h4' component='h1' gutterBottom>
            Application
          </Typography>
          <LanguageContextProvider>
            <AppHome />
          </LanguageContextProvider>
        </Box>
      </Container>
    </>
  );
}

export default App;
