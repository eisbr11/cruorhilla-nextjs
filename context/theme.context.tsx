import { createContext, useContext } from 'react';

export enum Theme {
  kater = 'kater',
  angstblitz = 'angstblitz',
  baellebad = 'baellebad',
  weihnachten = 'weihnachten',
  default = 'default',
}

const keyToName = {
  kater: 'Warten auf den Kater',
  angstblitz: 'Angst Blitz',
  weihnachten: 'Weihnachten Vergessen',
  default: 'Blau',
  baellebad: 'Bällebad',
};

export const getThemeName = (themeKey: string) => keyToName[themeKey];

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.angstblitz,
  // eslint-disable-next-line no-console
  setTheme: () => console.warn('no theme provider'),
});

export const useTheme = () => useContext(ThemeContext);
