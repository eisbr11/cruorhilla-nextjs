import { ThemeOptions } from '@mui/material';

const commonThemeSettings: ThemeOptions = {
  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
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
