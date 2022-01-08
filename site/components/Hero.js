/** @jsx jsx */

import React from 'react';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Card,
  Typography
} from '@mui/material';
import Book from '@mui/icons-material/Book';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';

import { jsx } from '@emotion/react';

import profile_picture from '../assets/images/me/profile_icon_alex.jpg';

const ROOT_SX = {
  height: '100vh',
  background: 'red'
};

const CONTAINER_SX = {
  x: 1,
  background: '#fafafa',
  display: 'block',
  p: 4,
  // my: 'auto'
};

const IMAGE_SX = {
  display: 'flex',
  mx: 'auto',
  width: '50%',
  clipPath: 'circle(50%)',
  // my: 1
};

const LINK_BAR_SX = {
  display: 'inline-flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%'
};

const Hero = (props) => {
  return (
    <Box sx={ROOT_SX}>
      <Box sx={CONTAINER_SX}>
        <Box component='img' src={profile_picture} sx={IMAGE_SX} />
        <Box>
          <Typography align='center' variant='h3'>Alex Lyons</Typography>
          <Typography align='center'>Altanta, GA</Typography>
          <Typography align='center' variant='h6'>Senior Consultant - Slalom, LLC</Typography>
          <Typography align='center'>
            Hey! If you found this website, you were probably looking for me, so glad you found me.
            I am a Senior DevOps Engineer who dabbles in one too many hobbies.
          </Typography>
          <Box sx={LINK_BAR_SX}>
            <IconButton href='https://www.linkedin.com/in/alexander-lyons-b2058659/' target='_blank'>
              <LinkedIn />
            </IconButton>
            <IconButton href='https://github.com/alyons' target='_blank'>
              <GitHub />
            </IconButton>
            <IconButton href='https://breadoralive.com' target='_blank'>
              <Book />
            </IconButton>
          </Box>
          <Box sx={LINK_BAR_SX}>
            <Button href='https://docs.google.com/document/d/1YMHX4Qe8o2GR_OK-EeklxIRSWFMn3mZc9M-uENi8OWY/edit?usp=sharing' target='_blank'>Resume</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
