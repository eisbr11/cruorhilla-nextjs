import { createTheme, Theme } from '@mui/material/styles';
import commonThemeSettings from './commonThemeSettings';

const theme:Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#222323',
    },
    secondary: {
      main: '#de8787',
    },
  },
  ...commonThemeSettings,
});

export default theme;
