/** @jsx jsx */

import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom'; 
import { jsx } from '@emotion/react';
import {
  Box,
  Typography
} from '@mui/material';

const Content = (props) => {
  const { contentId } = useParams();

  let content;

  // Logic to load content data and parse

  return (
    <Box>
      <Typography>This will be for the content</Typography>
    </Box>
  );
};

export default Content;
