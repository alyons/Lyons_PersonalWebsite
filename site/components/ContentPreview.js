import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  Typography
} from '@mui/material';

const CONTENT_PREVIEW_SX = {
  margin: 2
};

const IMAGE_SX = {
  // backgroundColor: 'red',
  width: {
    xs: 'calc(calc(100vw - 64px))'
  },
  height: {
    xs: 'auto'
  },
  padding: '16px'
};

const generateActionButton = (action, i) => {
  return (
    <Button component={RouterLink} to={action.to} key={`content-preview-action-${i}`}>{action.content}</Button>
  );
};

const ContentPreview = ({ title, text, images, actions, ...props }) => {
  return (
    <Grid item xs={12}>
      <Box sx={CONTENT_PREVIEW_SX}>
        <Typography align='center' variant='h4'>{title}</Typography>
        <Typography>{text}</Typography>
        <Box component='img' src={images[0].default} sx={IMAGE_SX} />
        {actions.map((action, i) => (
          generateActionButton(action, i)
        ))}
      </Box>
    </Grid>
  );
};

export default ContentPreview;
