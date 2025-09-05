import { createTheme, Theme } from '@mui/material/styles';

import commonThemeSettings from './commonThemeSettings';

const theme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#DDDDDD',
    },
  },
  ...commonThemeSettings,
});

export default theme;
