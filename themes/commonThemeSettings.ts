import raleway from './fonts/raleway.fontface';

const commonThemeSettings = {
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
      },
    },
  },
  typography: {
    fontFamily: ['Raleway', 'Arial'],
    fontSize: 20,
  },
};

export default commonThemeSettings;
