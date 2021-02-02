import React from 'react';
import { StoryData } from 'storyblok-js-client';

import Head from '@components/head';
import Nav from '@components/nav';
import Footer from '@components/footer';
import { Theme, useTheme } from '@context/theme.context';
import AngstblitzSky from './components/AngstblitzSky.component';
import useStyles from './LayoutContent.styles';

const LayoutContent = ({
  children,
  settings,
  content,
}: {
  children: React.ReactNode,
  settings?: StoryData,
  content?: {
    title: string,
    description: string,
  },
}) => {
  const classes = useStyles();
  const { theme } = useTheme();

  return (
    <div className={classes.container}>
      <Head title={content.title} description={content.description} />
      <Nav settings={settings} />
      {(theme === Theme.angstblitz) ? (
        <AngstblitzSky />
      ) : (
        null
      )}
      <main className={classes.content}>
        {children}
      </main>
      <Footer settings={settings} />
    </div>
  );
};

export default LayoutContent;

LayoutContent.defaultProps = {
  settings: {},
  content: {
    title: '',
    description: '',
  },
};
