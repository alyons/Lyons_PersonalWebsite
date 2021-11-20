import { createTheme } from '@mui/material';

import typography from './typography';

const baseTheme = (mode) => {
  return createTheme({
    typography,
    themeName: 'Base'
  });
};

export default baseTheme;
