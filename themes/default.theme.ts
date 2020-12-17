import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import commonThemeSettings from '@themes/commonThemeSettings';

// Create a theme instance.
const theme:Theme = createMuiTheme({
  palette: {
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
}, commonThemeSettings);

export default theme;
