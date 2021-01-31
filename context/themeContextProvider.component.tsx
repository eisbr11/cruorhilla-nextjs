import React from 'react';
import { ThemeContext, Theme } from '@context/theme.context';

const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  const [theme, setTheme] = React.useState(Theme.angstblitz);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
