import { createTheme, Theme } from '@mui/material/styles';

import commonThemeSettings from './commonThemeSettings';

const theme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c16b51',
    },
    secondary: {
      main: '#c1c1c1',
    },
  },
  ...commonThemeSettings,
});

export default theme;
