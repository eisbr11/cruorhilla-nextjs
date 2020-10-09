import angstBlitzTheme from './angstblitz.theme';
import defaultTheme from './default.theme';

const getTheme = (themeString: string) => {
  switch (themeString) {
    case 'angstblitz':
      return angstBlitzTheme;
    default:
      return defaultTheme;
  }
};

export default getTheme;
