import { createContext, useContext } from 'react';

export enum Theme {
  angstblitz = 'angstblitz',
  weihnachten = 'weihnachten',
  default = 'default',
  baellebad = 'baellebad',
}

const keyToName = {
  angstblitz: 'Angst Blitz',
  weihnachten: 'Weihnachten Vergessen',
  default: 'Standard',
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
