import { ThemeOptions } from '@material-ui/core';
import raleway from './fonts/raleway.fontface';

const commonThemeSettings:ThemeOptions = {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [raleway.fw200, raleway.regular, raleway.fw800],
        html: {
          WebkitFontSmoothing: 'auto',
        },
        p: {
          marginTop: 0,
          marginBottom: '1.5rem',
        },
        iframe: {
          maxWidth: '100%',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Raleway',
    fontSize: 20,
  },
};

export default commonThemeSettings;
