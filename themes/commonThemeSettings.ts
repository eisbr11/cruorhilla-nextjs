const commonThemeSettings = {
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
      },
    },
  },
  typography: {
    fontSize: 20,
  },
};

export default commonThemeSettings;
