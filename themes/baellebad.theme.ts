import { createTheme, Theme } from '@material-ui/core/styles';
import commonThemeSettings from '@themes/commonThemeSettings';

const theme:Theme = createTheme({
  palette: {
    type: 'dark',
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
