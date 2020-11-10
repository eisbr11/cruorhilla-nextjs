import angstBlitzTheme from './angstblitz.theme';
import baelleBadTheme from './baellebad.theme';
import defaultTheme from './default.theme';
import ITheme from './theme.interface';

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

export type { ITheme };

export default getTheme;
