import { useState, useEffect, useMemo, ReactNode } from 'react';
import { get as lsGet, remove as lsRemove } from 'local-storage';

import Config from 'lib/Config';
import { ThemeContext, ETheme } from './theme.context';

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const defaultTheme = ETheme.hunde;
  const [theme, setTheme] = useState(defaultTheme);

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

  const value = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme, setTheme]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
};

export default ThemeContextProvider;
