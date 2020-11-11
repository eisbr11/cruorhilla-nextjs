import angstBlitzTheme from './angstblitz.theme';
import baelleBadTheme from './baellebad.theme';
import defaultTheme from './default.theme';

const getTheme = (themeString: string) => {
  switch (themeString) {
    case 'angstblitz':
      return angstBlitzTheme;
    case 'baellebad':
      return baelleBadTheme;
    default:
      return defaultTheme;
  }
};

export default getTheme;
