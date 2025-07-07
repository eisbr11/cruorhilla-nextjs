import { createContext, use } from 'react';

export enum ETheme {
  corona = 'corona',
  kater = 'kater',
  angstblitz = 'angstblitz',
  baellebad = 'baellebad',
  weihnachten = 'weihnachten',
  default = 'default',
}

const keyToName = {
  corona: 'Corona',
  kater: 'Warten auf den Kater',
  angstblitz: 'Angst Blitz',
  weihnachten: 'Weihnachten Vergessen',
  default: 'Blau',
  baellebad: 'Bällebad',
};

export const getThemeName = (themeKey: string) => keyToName[themeKey];

export type TThemeContextType = {
  theme: ETheme;
  setTheme: (Theme: ETheme) => void;
};

export const ThemeContext = createContext<TThemeContextType>({
  theme: ETheme.corona,
  // eslint-disable-next-line no-console
  setTheme: () => console.warn('no theme provider'),
});

export const useTheme = () => use(ThemeContext);
