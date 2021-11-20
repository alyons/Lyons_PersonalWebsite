import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';

import Router from './Router';
import Header from './components/Header';

const App = (props) => {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Router />
      </Box>
    </BrowserRouter>
  );
};

export default App;
