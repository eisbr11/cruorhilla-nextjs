import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { StoryData } from 'storyblok-js-client';

import { useTheme } from '@context/theme.context';
import getTheme from '@themes/index';
import LayoutContent from './components/LayoutContent';

interface ILayoutComponentProps {
  children: React.ReactNode;
  settings?: StoryData;
  content?: {
    title: string;
    description: string;
  }
}

const LayoutComponent = ({
  children,
  settings,
  content,
}: ILayoutComponentProps) => {
  const { theme } = useTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={getTheme(theme)}>
        <CssBaseline />
        <LayoutContent settings={settings} content={content}>
          {children}
        </LayoutContent>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default LayoutComponent;

LayoutComponent.defaultProps = {
  settings: {},
  content: {
    title: '',
    description: '',
  },
};
