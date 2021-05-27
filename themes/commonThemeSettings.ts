import { ThemeOptions } from '@material-ui/core';

const commonThemeSettings:ThemeOptions = {
  overrides: {
    MuiCssBaseline: {
      '@global': {
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
    h3: {
      fontWeight: 200,
    },
  },
};

export default commonThemeSettings;
