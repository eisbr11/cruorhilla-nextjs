import { createMuiTheme, Theme } from '@material-ui/core/styles';

const theme:Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#663399',
    },
    secondary: {
      main: '#9144df',
    },
  },
});

export default theme;
