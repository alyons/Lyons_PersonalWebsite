import React from 'react';
import { render } from 'react-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import './index.css';
import App from './App';
import getThemeByName from './themes';

const theme = getThemeByName('base');

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root') // eslint-disable-line no-undef
);

if (module.hot) module.hot.accept(); // eslint-disable-line no-undef
