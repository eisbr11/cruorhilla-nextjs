import React, { FC } from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ISbStoryData } from 'storyblok-js-client';

import { useTheme } from 'context/theme.context';
import getTheme from 'themes';
import LayoutContent from './components/LayoutContent';

interface ILayoutComponentProps {
  children: React.ReactNode;
  settings?: ISbStoryData;
  content?: {
    title: string;
    description: string;
  };
  theme_override?: string;
}

const LayoutComponent: FC<ILayoutComponentProps> = ({
  children,
  settings,
  content,
  theme_override,
}) => {
  const { theme } = useTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={getTheme(theme_override || theme)}>
        <CssBaseline />
        <LayoutContent
          settings={settings}
          content={content}
          theme_override={theme_override}
        >
          {children}
        </LayoutContent>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default LayoutComponent;
