import { createMuiTheme, Theme } from '@material-ui/core/styles';
import commonThemeSettings from './commonThemeSettings';

const theme:Theme = createMuiTheme({
  palette: {
    type: 'dark',
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
