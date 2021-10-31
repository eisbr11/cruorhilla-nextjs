import { createTheme, Theme } from '@mui/material/styles';
import commonThemeSettings from '@themes/commonThemeSettings';

const theme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#663399',
    },
    secondary: {
      main: '#9144df',
    },
  },
  ...commonThemeSettings,
});

export default theme;
