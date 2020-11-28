import React from 'react';
import { StoryData } from 'storyblok-js-client';

import Head from '@components/head';
import Nav from '@components/nav';
import Footer from '@components/footer';
import useStyles from './layout.styles';

const Layout = ({
  children,
  settings,
}: {
  children: React.ReactNode,
  settings?: StoryData,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Head />
      <Nav settings={settings} />
      <div className={classes.content}>
        {children}
      </div>
      <Footer settings={settings} />
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  settings: {},
};
