import { createTheme, Theme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import commonThemeSettings from './commonThemeSettings';

// Create a theme instance.
const theme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  ...commonThemeSettings,
});

export default theme;
