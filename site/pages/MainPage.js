import React from 'react';
import {
  Box,
  Grid
} from '@mui/material';

import ContentPreview from '../components/ContentPreview';
import Hero from '../components/Hero';

import contentData from '../assets/data/content';

const MainPage = (props) => {
  return (
    <Box>
      <Hero />
      <Grid container>
        {contentData.map((item, i) => (
          <ContentPreview {...item.preview} key={`content-preview-${i}`} />
        ))}
      </Grid>
    </Box>
  );
};

export default MainPage;
