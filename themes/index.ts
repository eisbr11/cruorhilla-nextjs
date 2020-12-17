import angstBlitzTheme from './angstblitz.theme';
import baelleBadTheme from './baellebad.theme';
import weihnachtenTheme from './weihnachten.theme';
import defaultTheme from './default.theme';

const getTheme = (themeString: string) => {
  switch (themeString) {
    case 'angstblitz':
      return angstBlitzTheme;
    case 'baellebad':
      return baelleBadTheme;
    case 'weihnachten':
      return weihnachtenTheme;
    default:
      return defaultTheme;
  }
};

export default getTheme;
