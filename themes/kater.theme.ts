import { createTheme, Theme } from '@mui/material/styles';

import commonThemeSettings from './commonThemeSettings';

const theme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9e4695',
    },
    secondary: {
      main: '#ff61ae',
    },
  },
  ...commonThemeSettings,
});

export default theme;
