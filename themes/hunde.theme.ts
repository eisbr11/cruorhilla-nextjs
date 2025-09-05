import { createTheme, Theme } from '@mui/material/styles';

import commonThemeSettings from './commonThemeSettings';

const theme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#222222',
    },
    secondary: {
      main: '#DDDDDD',
    },
  },
  ...commonThemeSettings,
});

export default theme;
