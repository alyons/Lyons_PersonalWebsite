/** @jsx jsx */

import React from 'react';
import {
  Box,
  Typography
} from '@mui/material';
import { jsx } from '@emotion/react';

const Hero = (props) => {
  return (
    <Box>
      <Typography align='center' variant='h4'>Hi! I'm Alex!</Typography>
      <Typography align='center'>
        Sorry for the dust, I am currently building the website, so it's still a definite work in progress.
      </Typography>
      <Typography align='center'>
        I should get some good pictures done. In downtown Atlanta for the flex.
      </Typography>
      <Typography align='center'>
        If you found this website, you were probably looking for me, so good job!
        I am a software engineer with ADHD who like to just do random things.
        I enjoy tinkering with software, cooking, video games, table top RPGs, card games, and even more!
        Every year I try to participate in Extra Life to give back to the community.
        Oh, and I have cat named Lord Salem Windgrace Lyons. Or Ratfinx Twinkledinks. Or Asshole! Get out of the pantry!
      </Typography>
    </Box>
  );
};

export default Hero;
