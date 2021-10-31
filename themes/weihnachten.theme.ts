import { createTheme, Theme } from '@mui/material/styles';
import commonThemeSettings from './commonThemeSettings';

const theme:Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#de8787',
    },
    secondary: {
      main: '#f3d9d6',
    },
  },
  typography: {
    fontSize: 20,
  },
  ...commonThemeSettings,
});

export default theme;
