import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';

import Router from './Router';

const App = (props) => {
  return (
    <BrowserRouter>
      <Box>
        <Router />
      </Box>
    </BrowserRouter>
  );
};

export default App;
