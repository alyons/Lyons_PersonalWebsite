import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom'; 
import {
  Box,
  Button,
  Typography,
  ImageList,
  ImageListItem
} from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';

import contentData from '../assets/data/content';

const EmptyContent = ({ id, ...props }) => {
  return (
    <Box>
      <Typography>Unable to find content for {id}...</Typography>
    </Box>
  );
};

const AlbumContent = ({ images, ...props }) => {
  return (
    <ImageList>
      {images.map((item) => (
        <ImageListItem key={item.default}>
          <img src={item.default} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const CONTENT_SX = {
  margin: 2
};

const Content = ({ ...props }) => {
  const { id } = useParams();

  let content = contentData.find(item => item.id === id)?.content;
  let contentChild;

  if (!content) {
    contentChild = <EmptyContent id={id} />;
  }

  switch (content.type) {
    default: contentChild = <AlbumContent {...content} />;
  }

  return (
    <Box sx={CONTENT_SX}>
      <Button startIcon={<ArrowBack />} component={RouterLink} to='/'>
        Back Home
      </Button>
      {contentChild}
    </Box>
  );
};

export default Content;
