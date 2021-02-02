import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StoryData } from 'storyblok-js-client';

import { useTheme } from '@context/theme.context';
import getTheme from '@themes/index';
import LayoutContent from './components/LayoutContent/LayoutContent.component';

const Layout = ({
  children,
  settings,
  content,
}: {
  children: React.ReactNode,
  settings?: StoryData,
  content?: {
    title: string,
    description: string,
  }
}) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <CssBaseline />
      <LayoutContent settings={settings} content={content}>
        {children}
      </LayoutContent>
    </ThemeProvider>
  );
};

export default Layout;

Layout.defaultProps = {
  settings: {},
  content: {
    title: '',
    description: '',
  },
};
