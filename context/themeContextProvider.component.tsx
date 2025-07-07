import React, { useEffect } from 'react';
import { get as lsGet, remove as lsRemove } from 'local-storage';

import Config from 'lib/Config';
import { ThemeContext, ETheme } from './theme.context';

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const defaultTheme = ETheme.kater;
  const [theme, setTheme] = React.useState(defaultTheme);

  useEffect(() => {
    const persistedTheme = lsGet<string>(Config.theme_ls_key);
    // check if persisted string exists and is set in Theme enum
    if (
      persistedTheme &&
      Object.values(ETheme).includes(persistedTheme as ETheme)
    ) {
      setTheme(persistedTheme as ETheme);
    } else {
      lsRemove(Config.theme_ls_key);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
