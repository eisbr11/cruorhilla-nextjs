import { createMuiTheme, Theme } from '@material-ui/core/styles';
import commonThemeSettings from './commonThemeSettings';

const theme:Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#222323',
    },
    secondary: {
      main: '#de8787',
    },
  },
  typography: {
    fontSize: 20,
  },
}, commonThemeSettings);

export default theme;
