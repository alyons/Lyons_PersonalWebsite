/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import {
  Box,
  Typography
} from '@mui/material';

const ErrorPage = (props) => {
  return (
    <Box>
      <Typography align='center' variant='h4'>Uh oh...</Typography>
      <Typography>
        I don't know how you got here.
        Chances are either you are futzing with the site to see if you can break it.
        Or I set up a bad link... we're not going to talk about that if that's the case.
      </Typography>
    </Box>
  );
};

export default ErrorPage;
