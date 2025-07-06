import { createTheme, Theme } from '@mui/material/styles';
import commonThemeSettings from 'themes/commonThemeSettings';

const theme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#005A9C',
    },
    secondary: {
      main: '#FFCB05',
    },
  },
  ...commonThemeSettings,
});

export default theme;
