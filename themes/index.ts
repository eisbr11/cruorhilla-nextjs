import { responsiveFontSizes } from '@mui/material/styles';

import coronaTheme from './corona.theme';
import katerTheme from './kater.theme';
import angstBlitzTheme from './angstblitz.theme';
import baelleBadTheme from './baellebad.theme';
import weihnachtenTheme from './weihnachten.theme';
import defaultTheme from './default.theme';
import hundeTheme from './hunde.theme';

const getTheme = (themeString: string) => {
  switch (themeString) {
    case 'hunde':
      return responsiveFontSizes(hundeTheme);
    case 'corona':
      return responsiveFontSizes(coronaTheme);
    case 'kater':
      return responsiveFontSizes(katerTheme);
    case 'angstblitz':
      return responsiveFontSizes(angstBlitzTheme);
    case 'baellebad':
      return responsiveFontSizes(baelleBadTheme);
    case 'weihnachten':
      return responsiveFontSizes(weihnachtenTheme);
    default:
      return responsiveFontSizes(defaultTheme);
  }
};

export default getTheme;
