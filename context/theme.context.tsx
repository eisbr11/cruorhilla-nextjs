import { createContext, useContext } from 'react';

export enum Theme {
  angstblitz = 'angstblitz',
  weihnachten = 'weihnachten',
  default = 'default',
  baellebad = 'baellebad',
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.angstblitz,
  // eslint-disable-next-line no-console
  setTheme: () => console.warn('no theme provider'),
});

export const useTheme = () => useContext(ThemeContext);
