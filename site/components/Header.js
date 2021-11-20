/** @jsx jsx */

import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { jsx } from '@emotion/react';

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <Box>
      <AppBar position='sticky'>
        <Toolbar>
          <Box>
            <Button color='inherit' component={RouterLink} to='/'>
              Alex Lyons
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
