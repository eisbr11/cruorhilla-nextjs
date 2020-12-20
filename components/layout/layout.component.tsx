import React from 'react';
import { StoryData } from 'storyblok-js-client';

import Head from '@components/head';
import Nav from '@components/nav';
import Footer from '@components/footer';
import useStyles from './layout.styles';

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
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Head title={content.title} description={content.description} />
      <Nav settings={settings} />
      <main className={classes.content}>
        {children}
      </main>
      <Footer settings={settings} />
    </div>
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
