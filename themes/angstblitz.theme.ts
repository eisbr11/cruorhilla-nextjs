import { createMuiTheme, Theme } from '@material-ui/core/styles';

const theme:Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#de8787',
    },
    secondary: {
      main: '#222323',
    },
  },
});

export default theme;
