import { createMuiTheme, Theme } from '@material-ui/core/styles';
import commonThemeSettings from './commonThemeSettings';

const theme:Theme = createMuiTheme({
  palette: {
    type: 'dark',
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
